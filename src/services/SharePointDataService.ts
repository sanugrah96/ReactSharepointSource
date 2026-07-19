import { sp } from "./pnpClient";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/search";

export class SharePointDataService {

  public static async getListItems(
    listName: string,
    selectFields?: string[],
    filter?: string
  ): Promise<any[]> {
    try {
      let query = sp.web.lists.getByTitle(listName).items;

      if (selectFields && selectFields.length > 0) {
        query = query.select(...selectFields);
      }

      if (filter) {
        query = query.filter(filter);
      }

      return await query();
    } catch (error) {
      return [];
    }
  }

  public static async getListItemsFromSite(
    siteUrl: string,
    listName: string,
    selectFields?: string[],
    filter?: string
  ): Promise<any[]> {
    try {
      const { spfi, SPFx } = await import("@pnp/sp");
      const web = spfi(siteUrl).using((SPFx as any)(siteUrl)).web;
      let query = web.lists.getByTitle(listName).items;

      if (selectFields && selectFields.length > 0) {
        query = query.select(...selectFields);
      }

      if (filter) {
        query = query.filter(filter);
      }

      return await query();
    } catch (error) {
      return [];
    }
  }

  public static async getListItemsByUrl(
    listUrl: string,
    selectFields?: string[],
    filter?: string
  ): Promise<any[]> {
    try {
      let query = sp.web.getList(listUrl).items;

      if (selectFields && selectFields.length > 0) {
        query = query.select(...selectFields);
      }

      if (filter) {
        query = query.filter(filter);
      }

      return await query();
    } catch (error) {
      return [];
    }
  }

  public static async searchAcrossSites(
    searchQuery: string,
    siteFilter?: string,
    rowLimit: number = 100
  ): Promise<any[]> {
    try {
      const searchConfig: any = {
        Querytext: searchQuery,
        RowLimit: rowLimit,
        SelectProperties: ["Title", "Path", "Author", "Created", "Modified"]
      };

      if (siteFilter) {
        searchConfig.QueryTemplate = `Path:${siteFilter}*`;
      }

      const results = await sp.search(searchConfig);
      return results.PrimarySearchResults || [];
    } catch (error) {
      return [];
    }
  }
}
