import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfi, SPFI, SPFx } from "@pnp/sp";
import { graphfi, GraphFI, SPFx as GraphSPFx } from "@pnp/graph";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import "@pnp/sp/site-users/web";
import "@pnp/graph/users";

let _sp: SPFI;
let _graph: GraphFI;

export function initPnp(context: WebPartContext): void {
  _sp = spfi().using(SPFx(context));
}

export function initGraph(context: WebPartContext): void {
  _graph = graphfi().using(GraphSPFx(context));
}

export const sp: SPFI = new Proxy({} as SPFI, {
  get(_target, prop) {
    if (!_sp) throw new Error("PnP SP not initialized — call initPnp(context) in onInit");
    return (_sp as any)[prop];
  },
});

export const graph: GraphFI = new Proxy({} as GraphFI, {
  get(_target, prop) {
    if (!_graph) throw new Error("PnP Graph not initialized — call initGraph(context) in onInit");
    return (_graph as any)[prop];
  },
});
