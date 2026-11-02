# How to update the GIVC Michigan site

Almost everything on the site lives in one file: **`content.js`**. You can edit it right on GitHub in your browser. No downloads, no coding.

## The basic routine

1. Go to the repository on GitHub and click **`content.js`**.
2. Click the **pencil icon** (Edit) in the top right of the file.
3. Make your change. Only edit text **between quote marks**, and keep every comma at the end of a line.
4. Click **Commit changes** (green button), then **Commit changes** again.
5. Wait 1–2 minutes and refresh the site.

> **Broke something?** If the site looks blank or half-loaded, a comma or quote mark is probably missing. Click **History** on `content.js`, open the previous version, and copy it back. Or undo your last change and try again.

## Common updates

**Change the meeting time or room**
Find `meetingInfo:` near the top and replace the text, e.g. `"Tuesdays, 7–8 PM · Ross R2240"`.

**Change the contact email**
Find `email:` near the top. A shared chapter inbox is best so it survives e-board turnover.

**Update the Fall/Winter session timeline**
Find the `sessions:` list. Each session looks like:
```
{ date: "2026-10-13", title: "How investors find opportunities", topic: "...", deliverable: "..." },
```
Dates are always `"YYYY-MM-DD"`. Past sessions grey out automatically. Each new semester, replace the list.

**Add or change an e-board member**
1. Upload their headshot: open the `images` folder, then `eboard`, then **Add file → Upload files**. Square photos work best. Name it after them, like `maya.jpg`.
2. In `content.js`, find `eboard:` and copy one person's `{ ... }` line. Paste it where they should appear and fill in their name, role, photo path (e.g. `"images/eboard/maya.jpg"`), and LinkedIn.
3. `year`, `major`, and `bio` are optional. Leave them as `""` to skip.
4. To remove someone, delete their whole `{ ... },` line.

**Change the hero photos (the polaroids at the top)**
Upload photos to `images/photos`, then edit `heroPhotos:` in `content.js`. Three photos look best. `note` is the handwritten word on each photo, and `alt` is a short description for screen readers.

**Change the Instagram strip photos**
Same as above, but edit `instagramPhotos:`.

**Edit programs, resources, member perks, or the FAQ**
Each has its own clearly labeled section in `content.js` (`programs:`, `resources:`, `join:`, `faq:`). Copy an existing item to add one, or delete an item to remove it.

**Update the stats**
Edit `stats:`. Keep a source link on every number so anyone can check it.

## Tips

- **Keep photos small.** Under 500 KB each keeps the site fast on phones. Most phones can export a "medium" size, or use a free compressor like squoosh.app.
- **Do one change at a time** and check the site after each one. It makes mistakes easy to find.
- **Don't edit `styles.css` or `script.js`** unless you know what you're doing. They control the design, not the content.
- **Hand-off checklist for the next e-board:** share the GitHub login, the domain registrar login, and the domain renewal date (set a reminder; if it lapses, the site goes down).
