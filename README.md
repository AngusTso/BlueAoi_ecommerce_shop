# Blue Aoi · Handmade Bracelets & Products 💙🎀

A small, girly-blue shop site for **Blue Aoi** — built with **React + Vite**,
styled with soft blues and lace, deployed on **Netlify**, and managed with
**Decap CMS** (no coding needed to add products).

## ✨ Features

- Soft baby-blue theme with **elegant tablecloth-style lace** (diamond net +
  floral medallions), scalloped dividers & script headings
  (palette sampled from the Blue Aoi logo)
- **Banner hero carousel** at the top of the home page
- Shop grid with prices (HKD), New Arrival badges, sold-out states & filters
- Product detail pages with photo gallery
- **"Order via WhatsApp"** buttons with a pre-filled message
  (item code · name · price) — payment is confirmed in chat via PayMe/FPS QR
- Marketable **About page** (story + why-shop-with-us cards + CTA) — all
  editable from the CMS, no coding needed
- **SEO**: per-page titles, meta description, Open Graph/Twitter cards,
  JSON-LD Store structured data, robots.txt & sitemap.xml
- **Decap CMS at `/admin`** — add/edit products with drag-and-drop photo upload,
  no GitHub account needed for your sister (Netlify Identity login)

## 🖼️ Banners (drop-in, do it yourself later)

Put your banner photos in the `public/` folder using these names:

```
public/Banner1.jpeg      (also accepts banner1.jpeg / .jpg / .png)
public/Banner2.jpeg
public/Banner3.jpeg
```

They appear in the home page carousel automatically (wide images work best —
roughly 1890×945 px, i.e. 2:1). Any missing file is simply skipped, and until
all banners are added a pretty lace hero card is shown instead. No code changes
needed — to swap a banner later, just replace the file with the same name.

## 🧑‍💻 Local development

**Prerequisite:** install **Node.js LTS** from [nodejs.org](https://nodejs.org)
(this gives you `npm`). Then:

```bash
npm install
npm run dev          # opens http://localhost:5173
```

### Your `.env.local` (the WhatsApp number — stays on your machine only)

On **Windows PowerShell**:

```powershell
Copy-Item .env.example .env.local
notepad .env.local
# then set:  VITE_WHATSAPP_NUMBER=85261234567
#            <- digits only, with country code (852 for HK), no + or spaces
```

(macOS/Linux: `cp .env.example .env.local`)

> ⚠️ The WhatsApp number is **never** written into the repository. It is read
> from `VITE_WHATSAPP_NUMBER` at build time. If it's not set, the site
> gracefully falls back to Instagram links.
>
> **Restart `npm run dev` after editing `.env.local`** — Vite only reads env
> files when the dev server starts. You can verify it worked by opening a
> product page: the green button should link to `wa.me/852...` instead of
> falling back to Instagram.

**Note:** the `/admin` CMS only works on the **deployed** Netlify site (it
needs Netlify Identity, which doesn't run locally). Just test it on the live
URL — no local setup needed.

## 🛍️ Adding products (for the shop owner)

1. Go to `https://<your-site>.netlify.app/admin/`
2. Log in with the email invite you received (password of your choice)
3. Open **🛍️ Products → All Bracelets → Add item**
   - Item Code (`B07`), Name, Price (number only → shows as `HK$70`)
   - Photos: drag & drop / pick from your phone
   - Status: `In Stock` / `Sold Out` / `Hidden`
   - Tick **Show in New Arrival** to feature it on the home page
4. Press **Publish** — the site rebuilds and goes live in ~1 minute

## 🚀 Deployment (one-time setup, in this order)

### 1. Push the project to GitHub

One-time git identity (skip if you've committed before — commits fail without it):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check that `origin` points to your GitHub repository, then push the `main`
branch:

```bash
git remote -v
git add .
git commit -m "Describe your change"
git push -u origin main
```

If `origin` is already configured, do not run `git remote add origin` again.
If its URL is wrong, update it with `git remote set-url origin <repo-url>`.

If Git reports that the local and remote histories are unrelated, preserve both
by fetching and merging the existing GitHub `main` branch:

```bash
git fetch origin
git merge --allow-unrelated-histories origin/main
```

Resolve any conflicts, commit the merge, then push.

> The repo can stay **private** — Netlify and Decap both work with private
> repos, and it keeps everything (including her number, if it ever leaks into
> git) off the public internet.

### 2. Import into Netlify

Go to [netlify.com](https://www.netlify.com) → *Add new site* → *Import from
Git* → pick your repo. Build settings come automatically from `netlify.toml`.

### 3. Add the WhatsApp number (environment variable)

1. *Site settings → Environment variables → Add a variable*:
   `VITE_WHATSAPP_NUMBER` = `85261234567` (digits only, with `852`)
2. ⚠️ **Then trigger a fresh deploy**: *Deploy → Trigger deploy →
   Clear cache and deploy site.* Netlify does **not** rebuild automatically
   when you add a variable — until you do this, the site keeps building
   without the number and WhatsApp buttons fall back to Instagram.

*(Optional: custom domain under Site settings → Domain management.)*

### 4. Enable Identity for your sister's login

1. *Site settings → Identity →* **Enable**
2. *Identity → Registration preferences* → **Invite only**
3. *Identity → Services →* **Git Gateway → Enable**
   — this is what lets her publish **without a GitHub account** (Netlify
   commits on her behalf; the site's `config.yml` already uses `git-gateway`)
4. *Identity →* **Invite users** → enter your sister's email →
   she opens the link from her inbox and chooses her own password

### 5. Test her admin panel

Open `https://<your-site>.netlify.app/admin/`, log in with her email +
password, edit a product, press **Publish** — the site rebuilds in ~1 minute.
(The admin only works on the deployed site, not on local `npm run dev`.)

### 6. SEO finalization

Once your site has its final domain, replace `YOUR-SITE.netlify.app` with it
in three files and commit + push:
`index.html`, `public/robots.txt`, `public/sitemap.xml`.
(`public/og-image.jpg` is the social-share preview image — swap it for any
prettier photo of the bracelets, ideally 1200×630 px.)

Done! `your-site.netlify.app/admin` is your sister's shop manager.

## 📁 Project structure

```
src/
  component/    Navbar, Footer, Carousel, Gallery, ProductGridItem
  data/         products.json (CMS-managed) · site.json (CMS-managed)
  layout/       Layout shell
  pages/        Home · About · Shop · ProductDetail · BuyNow
  utils/        pricing + WhatsApp link helpers
public/
  admin/        Decap CMS (index.html + config.yml)
  media/        photos uploaded through the CMS
```

## 🔒 Privacy note

`VITE_WHATSAPP_NUMBER` stays out of git (`.env*` is ignored), but once the site
is live the number is visible to visitors who tap "Order on WhatsApp" — that is
inherent to `wa.me` links. Use a dedicated shop number (e.g. WhatsApp Business)
if preferred.
