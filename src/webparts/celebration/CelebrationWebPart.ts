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

import * as strings from 'CelebrationWebPartStrings';
import Celebration from './components/Celebration';
import { ICelebrationProps } from './components/ICelebrationProps';
import { initPnp } from "../../services/pnpClient";

export interface ICelebrationWebPartProps {
  description: string;
  topitem: any;
  viewall: boolean;
}

export default class CelebrationWebPart extends BaseClientSideWebPart<ICelebrationWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();
    // @pnp/sp inital setup
    initPnp(this.context);

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ICelebrationProps> = React.createElement(
      Celebration,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext?.user?.displayName || "User",
        topitem: this.properties.topitem ? this.properties.topitem : "5",
        viewall: this.properties.viewall ? this.properties.viewall : false,
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
                PropertyPaneTextField('topitem', {
                  label: "Items will be shown"
                }),
                // PropertyPaneToggle('viewall', {
                //   label: "Visible View All Button",
                //   onText: "Yes",
                //   offText: "No"
                // })
              ]
            }
          ]
        }
      ]
    };
  }
}
