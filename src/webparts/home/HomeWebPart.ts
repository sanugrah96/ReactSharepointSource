import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'HomeWebPartStrings';
import Home from './components/Home';
import { IHomeProps } from './components/IHomeProps';
import {
  PropertyFieldFilePicker,
  IPropertyFieldFilePickerProps,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import { initPnp } from "../../services/pnpClient";

export interface IHomeWebPartProps {
  description: string;
  announcementTitle: string;
  announcementDescription: string;
  announcementHomeBannerFilePicker: IFilePickerResult;
  companyEventTitle: string;
  companyEventDescription: string;
  companyEventHomeBannerFilePicker: IFilePickerResult;
  videosTitle: string;
  videosDescription: string;
  videosHomeBannerFilePicker: IFilePickerResult;
  heroVideoFilePicker: IFilePickerResult;
  heroVideoUrl: string;
}

export default class HomeWebPart extends BaseClientSideWebPart<IHomeWebPartProps> {

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

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IHomeProps> = React.createElement(
      Home,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        announcementTitle: this.properties.announcementTitle ? this.properties.announcementTitle : "ANNOUNCEMENTS",
        announcementDescription: this.properties.announcementDescription ? this.properties.announcementDescription : "Stay informed with the latest company updates, policy changes, leadership messages, and important organizational news.",
        announcementHomeBannerFilePicker: this.properties.announcementHomeBannerFilePicker,
        companyEventTitle: this.properties.companyEventTitle ? this.properties.companyEventTitle : "EVENTS",
        companyEventDescription: this.properties.companyEventDescription ? this.properties.companyEventDescription : "Explore upcoming company events, team activities, trainings, and important dates happening across the organization.",
        companyEventHomeBannerFilePicker: this.properties.companyEventHomeBannerFilePicker,
        videosTitle: this.properties.videosTitle ? this.properties.videosTitle : "VIDEOS",
        videosDescription: this.properties.videosDescription ? this.properties.videosDescription : "Watch the latest company videos featuring updates, policy changes, leadership messages, and important organizational news.",
        videosHomeBannerFilePicker: this.properties.videosHomeBannerFilePicker,
        heroVideoFilePicker: this.properties.heroVideoFilePicker,
        heroVideoUrl: this.properties.heroVideoUrl,
        spfxContext: this.context,
        siteUrl: this.context.pageContext.web.absoluteUrl.split('/sites')[0],
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private getGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
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
              groupName: "Announcement Banner Details",
              groupFields: [
                PropertyPaneTextField("announcementTitle", {
                  label: "Title",
                }),
                PropertyPaneTextField("announcementDescription", {
                  label: "Description",
                }),
                PropertyFieldFilePicker("announcementHomeBannerFilePicker", {
                  context: this.context as any,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.announcementHomeBannerFilePicker = e;
                  },
                  onChanged: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.announcementHomeBannerFilePicker = e;
                  },
                  buttonLabel: "Image",
                  label: "Banner Image",
                  key: "FilePickerID",
                  filePickerResult: this.properties.announcementHomeBannerFilePicker,
                  hideLocalUploadTab: true,
                }),
              ]
            },
            {
              groupName: "Company Event Banner Details",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField("companyEventTitle", {
                  label: "Title",
                }),
                PropertyPaneTextField("companyEventDescription", {
                  label: "Description",
                }),
                PropertyFieldFilePicker("companyEventHomeBannerFilePicker", {
                  context: this.context as any,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.companyEventHomeBannerFilePicker = e;
                  },
                  onChanged: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.companyEventHomeBannerFilePicker = e;
                  },
                  buttonLabel: "Image",
                  label: "Banner Image",
                  key: "FilePickerID",
                  filePickerResult: this.properties.companyEventHomeBannerFilePicker,
                  hideLocalUploadTab: true,
                }),
              ]
            },
            {
              groupName: "Hero Video",
              isCollapsed: true,
              groupFields: [
                PropertyFieldFilePicker("heroVideoFilePicker", {
                  context: this.context as any,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    this.properties.heroVideoFilePicker = e;
                  },
                  onChanged: (e: IFilePickerResult) => {
                    this.properties.heroVideoFilePicker = e;
                  },
                  buttonLabel: "Pick or Upload Video",
                  label: "Hero Video (SharePoint / Upload)",
                  key: "heroVideoFilePickerID",
                  filePickerResult: this.properties.heroVideoFilePicker,
                }),
                PropertyPaneTextField("heroVideoUrl", {
                  label: "Or paste a Hero Video URL",
                  placeholder: "https://...",
                }),
              ]
            },
            {
              groupName: "Videos Banner Details",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField("videosTitle", {
                  label: "Title",
                }),
                PropertyPaneTextField("videosDescription", {
                  label: "Description",
                }),
                PropertyFieldFilePicker("videosHomeBannerFilePicker", {
                  context: this.context as any,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.videosHomeBannerFilePicker = e;
                  },
                  onChanged: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.videosHomeBannerFilePicker = e;
                  },
                  buttonLabel: "Image",
                  label: "Banner Image",
                  key: "FilePickerID",
                  filePickerResult: this.properties.videosHomeBannerFilePicker,
                  hideLocalUploadTab: true,
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
