import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SubpageTemplateWebPartStrings';
import SubpageTemplate from './components/SubpageTemplate';
import { ISubpageTemplateProps } from './components/ISubpageTemplateProps';
import {
  PropertyFieldFilePicker,
  IPropertyFieldFilePickerProps,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import { initPnp } from "../../services/pnpClient";

export interface ISubpageTemplateWebPartProps {
  description: string;
}

export default class SubpageTemplateWebPart extends BaseClientSideWebPart<ISubpageTemplateWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();
    // @pnp/sp inital setup
    initPnp(this.context);

    const style = document.createElement("style");
    style.textContent = `
  #theSourceBootOverlay{position:fixed;inset:0;background:#111;z-index:2147483647}
`;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = "theSourceBootOverlay";
    document.body.appendChild(overlay);

    // remove overlay when your main webpart/app is ready
    window.addEventListener("theSource:ready", () => overlay.remove());

    window.dispatchEvent(new Event("theSource:ready"));


    const loader = document.createElement("div");
    loader.id = "preLoader";

    loader.innerHTML = `
    <section class="homecontainer">
      <div class="loader-wrapper">
        <img style="margin-top: 25%;width:65px;" src="${require('./assets/MCALogoLoadingIcon.gif')}" />
      </div>
    </section>
  `;

    document.body.appendChild(loader);

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ISubpageTemplateProps> = React.createElement(
      SubpageTemplate,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        spfxContext: this.context,
        siteUrl: this.context.pageContext.web.absoluteUrl,
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
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
