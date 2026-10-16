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

Put your banner photos in the `public/` folder using these exact names:

```
public/banner1.png
public/banner2.png
public/banner3.png
```

They appear in the home page carousel automatically (wide images work best —
roughly 1600×700 px). Any missing file is simply skipped, and until all banners
are added a pretty lace hero card is shown instead. No code changes needed.

## 🧑‍💻 Local development

```bash
npm install
npm run dev
```

Configure your **own** secrets locally (this file is git-ignored):

```bash
cp .env.example .env.local
# then edit .env.local:
#   VITE_WHATSAPP_NUMBER=85261234567   <- digits only, with country code
```

> ⚠️ The WhatsApp number is **never** written into the repository. It is read
> from `VITE_WHATSAPP_NUMBER` at build time. If it's not set, the site
> gracefully falls back to Instagram links.

## 🛍️ Adding products (for the shop owner)

1. Go to `https://<your-site>.netlify.app/admin/`
2. Log in with the email invite you received (password of your choice)
3. Open **🛍️ Products → All Bracelets → Add item**
   - Item Code (`B07`), Name, Price (number only → shows as `HK$70`)
   - Photos: drag & drop / pick from your phone
   - Status: `In Stock` / `Sold Out` / `Hidden`
   - Tick **Show in New Arrival** to feature it on the home page
4. Press **Publish** — the site rebuilds and goes live in ~1 minute

## 🚀 Deployment (one-time setup)

1. Create a **private** GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Blue Aoi shop"
   git branch -M main
   git remote add origin <your-private-repo-url>
   git push -u origin main
   ```
2. Go to [netlify.com](https://www.netlify.com) → *Add new site* → *Import from
   Git* (build settings are already in `netlify.toml`)
3. In Netlify: **Site settings → Environment variables** → add
   `VITE_WHATSAPP_NUMBER` = `85261234567`
4. Enable **Identity** (Site settings → Identity → Enable) →
   *Invite users* → send the invite to your sister's email.
   Under *Registration preferences* choose *Invite only*.
5. Edit `public/admin/config.yml` and replace
   `YOUR_GITHUB_USERNAME/blueAoiShop` with your real repo, then commit.
6. Connect Netlify's GitHub integration to the repo (Identity's GitHub backend
   commits as your account — under *Identity → Services* authorize the GitHub
   backend if prompted).
7. **SEO placeholders**: once your site has its final domain, replace
   `YOUR-SITE.netlify.app` with it in three files and commit:
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
