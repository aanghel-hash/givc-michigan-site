# How to put the GIVC Michigan site online

You only do this once. It takes about 30 minutes of clicking, plus up to a day of waiting for the domain to connect. No coding needed.

You'll use two free or cheap services:
- **GitHub Pages** hosts the website for free.
- **A domain registrar** (Porkbun, Namecheap, or Cloudflare) sells you girlsintovcmichigan.com, usually about $10–15 a year.

> **Tip for future e-boards:** sign up for both with a shared chapter email (like a Gmail the e-board shares) instead of a personal one. When you graduate, the next e-board just gets the password.

---

## Part 1: Put the site on GitHub (free)

1. **Unzip the folder.** Double-click `givc-michigan-site.zip`. You'll get a folder with `index.html`, `content.js`, `styles.css`, `script.js`, and an `images` folder.

2. **Make a GitHub account** at https://github.com/signup. Pick a username like `givc-michigan`. The free plan is all you need.

3. **Create a repository** (GitHub's word for a project folder).
   - Click the **+** in the top right, then **New repository**.
   - Name it `givc-michigan-site`.
   - Choose **Public** (required for free hosting).
   - Click **Create repository**.

4. **Upload the files.**
   - On the new page, click the link that says **uploading an existing file**.
   - Open your unzipped folder, select **everything inside it** (including the `images` folder), and drag it all onto the GitHub page. Drag the contents, not the folder itself, so `index.html` ends up at the top level.
   - Wait until every file finishes uploading, then click the green **Commit changes** button.

5. **Turn on GitHub Pages.**
   - In your repository, click **Settings** (top menu), then **Pages** (left sidebar).
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Under **Branch**, pick **main** and **/ (root)**, then click **Save**.

6. **Check it.** After 1–3 minutes, refresh the Pages settings. A link appears at the top, like `https://givc-michigan.github.io/givc-michigan-site/`. Open it: your site is live.

---

## Part 2: Connect girlsintovcmichigan.com

Do these in order. Adding the domain on GitHub **before** changing anything at the registrar keeps someone else from claiming it.

7. **Buy the domain.** Go to your registrar (Porkbun, Namecheap, or Cloudflare), search `girlsintovcmichigan.com`, and buy it. Skip the add-ons (email, hosting, website builder). You don't need them.

8. **Tell GitHub about the domain.**
   - Back in GitHub: **Settings → Pages**.
   - Under **Custom domain**, type `girlsintovcmichigan.com` and click **Save**.
   - GitHub will say the DNS check is failing. That's expected until step 9 is done.

9. **Point the domain at GitHub.** At your registrar, find the domain's **DNS settings** (sometimes called "DNS records" or "Manage DNS"). Delete any existing **A** or **CNAME** records the registrar added by default (often a "parking" page), then add these five records:

   | Type  | Host / Name | Value / Points to |
   |-------|-------------|-------------------|
   | A     | @           | 185.199.108.153   |
   | A     | @           | 185.199.109.153   |
   | A     | @           | 185.199.110.153   |
   | A     | @           | 185.199.111.153   |
   | CNAME | www         | `your-github-username.github.io` (e.g. `givc-michigan.github.io`) |

   Leave TTL on its default. Some registrars want the host left blank instead of `@`; that means the same thing.

10. **Wait.** DNS changes can take up to 24 hours, though they often finish within an hour.

11. **Turn on HTTPS (the padlock).** Go back to **Settings → Pages**. Once the DNS check shows a green checkmark, tick **Enforce HTTPS**. If the box is greyed out, wait a little longer and try again.

12. **You're live.** Visit https://girlsintovcmichigan.com. Then put the link in your Instagram bio.

---

## If something goes wrong

- **Site shows a 404 page:** make sure `index.html` is at the top level of the repository, not inside another folder. If it's inside a folder, re-upload the contents.
- **Domain shows the registrar's parking page:** an old A or CNAME record is still there. Delete it, then wait.
- **"Enforce HTTPS" stays greyed out after a day:** in Settings → Pages, remove the custom domain, click Save, add it again, and Save.
- **Link previews look wrong in texts:** apps cache previews for a while. They update within a day or two.

If you ever buy a different domain, also update the four lines in `index.html` that mention `girlsintovcmichigan.com` (they control link previews).
