import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SopLibraryWebPartStrings';
import SopLibrary from './components/SopLibrary';
import { ISopLibraryProps } from './components/ISopLibraryProps';
import { initPnp } from '../../services/pnpClient';

export interface ISopLibraryWebPartProps {
  libraryTitle: string;
  versionColumn: string;
  revDateColumn: string;
  phaseColumn: string;
}

export default class SopLibraryWebPart extends BaseClientSideWebPart<ISopLibraryWebPartProps> {

  protected onInit(): Promise<void> {
    initPnp(this.context);
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ISopLibraryProps> = React.createElement(
      SopLibrary,
      {
        libraryTitle: this.properties.libraryTitle || 'SOP',
        versionColumn: this.properties.versionColumn || '',
        revDateColumn: this.properties.revDateColumn || '',
        phaseColumn: this.properties.phaseColumn || '',
        siteUrl: this.context.pageContext?.web?.absoluteUrl || '',
      }
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
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('libraryTitle', {
                  label: strings.LibraryTitleLabel,
                  placeholder: 'SOP Library',
                }),
                PropertyPaneTextField('versionColumn', {
                  label: strings.VersionColumnLabel,
                  placeholder: 'DocumentVersion',
                }),
                PropertyPaneTextField('revDateColumn', {
                  label: strings.RevDateColumnLabel,
                  placeholder: 'RevisionDate',
                }),
                PropertyPaneTextField('phaseColumn', {
                  label: strings.PhaseColumnLabel,
                  placeholder: 'Phase',
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
