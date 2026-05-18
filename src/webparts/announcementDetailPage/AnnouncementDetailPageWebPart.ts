import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AnnouncementDetailPageWebPartStrings';
import { AnnouncementRouter } from './components/AnnouncementRouter';
import { initPnp } from "../../services/pnpClient";

export interface IAnnouncementDetailPageWebPartProps {
  description: string;
}

export default class AnnouncementDetailPageWebPart extends BaseClientSideWebPart<IAnnouncementDetailPageWebPartProps> {

  protected onInit(): Promise<void> {
    // @pnp/sp inital setup
    initPnp(this.context);

    return super.onInit();
  }

  public render(): void {
    // Use the new router component by default
    const element: React.ReactElement<any> = React.createElement(
      AnnouncementRouter,
      { basePath: '/announcements' }
    );

    ReactDom.render(element, this.domElement);
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
