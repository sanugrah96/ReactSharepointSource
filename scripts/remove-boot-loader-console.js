/*
 * Remove the leftover "TheSourceBootLoader" ApplicationCustomizer WITHOUT
 * PowerShell — run these in the browser DevTools console (F12) using your
 * existing SharePoint session.
 *
 * SNIPPET 1: run on a The Source tab (https://tekbuilder1.sharepoint.com/sites/TheSource)
 *   - lists all Web- and Site-scoped UserCustomActions
 *   - deletes any matching the boot loader (by title or component id)
 *
 * SNIPPET 2: run on the App Catalog tab if snippet 1 found nothing
 *   - set `base` to the app catalog site path (check the tab's URL)
 *   - deletes the matching "Tenant Wide Extensions" row
 *
 * Afterwards: close the tab and reopen the site (or use a private window) —
 * tenant-wide changes can take a few minutes to propagate.
 */

/* ── SNIPPET 1 — run on the TheSource tab ─────────────────────────────────── */
(async () => {
  const CID = "001545b3-10d8-4734-ad06-cb80781a30ec";
  const TITLE = "TheSourceBootLoader";
  const base = "/sites/TheSource";
  const hdr = { Accept: "application/json;odata=nometadata" };
  const digest = (await (await fetch(`${base}/_api/contextinfo`, { method: "POST", headers: hdr })).json()).FormDigestValue;
  for (const scope of ["web", "site"]) {
    const res = await (await fetch(`${base}/_api/${scope}/usercustomactions?$select=Id,Title,Location,ClientSideComponentId`, { headers: hdr })).json();
    console.log(`${scope.toUpperCase()} — all custom actions:`, res.value);
    const hits = res.value.filter(a => a.Title === TITLE || (a.ClientSideComponentId || "").toLowerCase() === CID);
    if (!hits.length) { console.log(`${scope.toUpperCase()} — no boot-loader match`); continue; }
    for (const a of hits) {
      const del = await fetch(`${base}/_api/${scope}/usercustomactions('${a.Id}')`, {
        method: "POST", headers: { ...hdr, "X-RequestDigest": digest, "X-HTTP-Method": "DELETE" },
      });
      console.log(`${scope.toUpperCase()} — DELETED ${a.Id}: HTTP ${del.status}`);
    }
  }
})();

/* ── SNIPPET 2 — run on the App Catalog tab (fix `base` to its URL path) ──── */
(async () => {
  const CID = "001545b3-10d8-4734-ad06-cb80781a30ec";
  const base = "/sites/appcatalog"; // ← adjust to your app catalog site path
  const hdr = { Accept: "application/json;odata=nometadata" };
  const list = `${base}/_api/web/lists/getbytitle('Tenant Wide Extensions')/items`;
  const items = (await (await fetch(`${list}?$select=Id,Title,TenantWideExtensionComponentId`, { headers: hdr })).json()).value;
  console.log("Tenant Wide Extensions — all rows:", items);
  const hits = items.filter(i => i.Title === "TheSourceBootLoader" || (i.TenantWideExtensionComponentId || "").toLowerCase() === CID);
  if (!hits.length) { console.log("no boot-loader row here"); return; }
  const digest = (await (await fetch(`${base}/_api/contextinfo`, { method: "POST", headers: hdr })).json()).FormDigestValue;
  for (const i of hits) {
    const del = await fetch(`${list}(${i.Id})`, {
      method: "POST", headers: { ...hdr, "X-RequestDigest": digest, "X-HTTP-Method": "DELETE", "IF-MATCH": "*" },
    });
    console.log(`DELETED row ${i.Id}: HTTP ${del.status}`);
  }
})();
