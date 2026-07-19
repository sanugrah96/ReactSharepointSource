declare interface ISopLibraryWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  LibraryTitleLabel: string;
  VersionColumnLabel: string;
  RevDateColumnLabel: string;
  PhaseColumnLabel: string;
}

declare module 'SopLibraryWebPartStrings' {
  const strings: ISopLibraryWebPartStrings;
  export = strings;
}
