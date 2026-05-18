import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'PageBannerWebPartStrings';
import PageBanner from './components/PageBanner';
import { IPageBannerProps } from './components/IPageBannerProps';
import {
  PropertyFieldFilePicker,
  IPropertyFieldFilePickerProps,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import { initPnp } from "../../services/pnpClient";

export interface IPageBannerWebPartProps {
  description: string;
  Title: string;
  Description: string;
  HomeBannerFilePicker: IFilePickerResult;
  search: boolean;
}

export default class PageBannerWebPart extends BaseClientSideWebPart<IPageBannerWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();
    initPnp(this.context);

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IPageBannerProps> = React.createElement(
      PageBanner,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        Title: this.properties.Title ? this.properties.Title : "The Source Company Announcements",
        Description: this.properties.Description ? this.properties.Description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua...",
        HomeBannerFilePicker: this.properties.HomeBannerFilePicker,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        search: this.properties.search ? this.properties.search : false,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {

          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("Title", {
                  label: "Title",
                }),
                PropertyPaneTextField("Description", {
                  label: "Description",
                }),
                PropertyFieldFilePicker("HomeBannerFilePicker", {
                  context: this.context as any,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.HomeBannerFilePicker = e;
                  },
                  onChanged: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.HomeBannerFilePicker = e;
                  },
                  buttonLabel: "Image",
                  label: "Banner Image",
                  key: "FilePickerID",
                  filePickerResult: this.properties.HomeBannerFilePicker,
                  hideLocalUploadTab: true,
                }),
                PropertyPaneToggle('search', {
                  label: "Visible Search",
                  onText: "Yes",
                  offText: "No"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
