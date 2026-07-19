/*
 * Creates the "SOP Ratings" / "SOP Searches" companion lists (and their columns)
 * that the SOP Library web part reads/writes. Use this to unblock testing under
 * `gulp serve` — where the package's declarative provisioning (elements.xml) does
 * NOT run — or on any site where the lists weren't provisioned.
 *
 * Symptoms this fixes:
 *   - 400 "List 'SOP Ratings' does not exist at site with URL '.../TheSource'"
 *   - 400 "The property 'Rating' does not exist on type 'SP.Data....ListItem'"
 *     (list exists but was created column-less)
 *
 * Run in the browser DevTools console (F12) on ANY page of the target site,
 * e.g. https://<tenant>.sharepoint.com/sites/TheSource. The base path below is
 * relative, so it works on any tenant as long as the site is at /sites/TheSource
 * (edit `base` if your site lives elsewhere). Requires Manage Lists rights
 * (site owner / admin). Idempotent: skips lists and columns that already exist.
 *
 * Column spec matches docs/sop-ratings-list-setup.md and sharepoint/assets/elements.xml.
 * Field internal names MUST be exactly SOPFileId / Rating / UserId — the web part
 * queries them by those names — so the fields are created with no-space Titles,
 * which makes InternalName == Title.
 */
(async () => {
  const base = "/sites/TheSource";
  const hdr = {
    Accept: "application/json;odata=nometadata",
    "Content-Type": "application/json;odata=nometadata",
  };
  const digest = (await (await fetch(`${base}/_api/contextinfo`, { method: "POST", headers: hdr })).json()).FormDigestValue;
  const dhdr = { ...hdr, "X-RequestDigest": digest };

  // Create a generic custom list (BaseTemplate 100) if it doesn't exist yet.
  // Returns true if the list exists (already or newly created), false on failure.
  const ensureList = async (title, description) => {
    const probe = await (await fetch(
      `${base}/_api/web/lists?$filter=Title eq '${title}'&$select=Id`, { headers: hdr })).json();
    if (probe.value && probe.value.length) { console.log(`✓ list "${title}" already exists`); return true; }
    const res = await fetch(`${base}/_api/web/lists`, {
      method: "POST", headers: dhdr,
      body: JSON.stringify({ Title: title, Description: description, BaseTemplate: 100 }),
    });
    if (res.ok) { console.log(`✓ created list "${title}"`); return true; }
    console.log(`\n✗✗✗ COULD NOT CREATE LIST "${title}" — HTTP ${res.status}`);
    console.log(await res.text());
    if (res.status === 403) {
      console.log(`→ 403 means this account can't create lists here (needs site owner /`);
      console.log(`  Manage Lists), or the site blocks scripting. Create the two lists`);
      console.log(`  manually via Site Contents → New → List (names EXACTLY "SOP Ratings"`);
      console.log(`  and "SOP Searches"), then re-run this script to add the columns.`);
    }
    return false;
  };

  // FieldTypeKind: 2 = Text, 9 = Number
  const ensureField = async (list, name, kind) => {
    const probe = await (await fetch(
      `${base}/_api/web/lists/getByTitle('${list}')/fields?$filter=InternalName eq '${name}'&$select=InternalName`,
      { headers: hdr })).json();
    if (probe.value && probe.value.length) { console.log(`  ✓ ${list} → ${name} already exists`); return; }
    const res = await fetch(`${base}/_api/web/lists/getByTitle('${list}')/fields`, {
      method: "POST", headers: dhdr,
      body: JSON.stringify({ FieldTypeKind: kind, Title: name }),
    });
    console.log(`  ${res.ok ? "✓ created" : "✗ FAILED"} ${list} → ${name} (HTTP ${res.status})`);
    if (!res.ok) console.log(await res.text());
  };

  // Halt at the first list we can't create/find, so the real cause is obvious
  // instead of a cascade of "list does not exist" 404s on the field calls.
  if (await ensureList("SOP Ratings", "Star ratings for SOP Library documents")) {
    await ensureField("SOP Ratings", "SOPFileId", 9);
    await ensureField("SOP Ratings", "Rating", 9);
    await ensureField("SOP Ratings", "UserId", 2);
  } else { return; }

  if (await ensureList("SOP Searches", "Search-activity log for SOP Library documents")) {
    await ensureField("SOP Searches", "SOPFileId", 9);
  } else { return; }

  console.log("Done — reload the page and submit a rating.");
})();
