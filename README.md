# Blue Aoi 💙🎀

Handmade bracelets & products — a boutique shop site for a Hong Kong handmade brand.

🌐 **Live site:** https://blueaoi-handmade.netlify.app
🛍️ **Shop manager:** https://blueaoi-handmade.netlify.app/admin/

## About

Blue Aoi sells 100% handmade bracelets — designed, strung and finished by hand in
Hong Kong in tiny batches. The site is a soft, girly-blue storefront with a lace
tablecloth feel (palette sampled from the brand logo): customers browse the
collection and order directly through WhatsApp chat, where payment is confirmed
with a PayMe / FPS QR code. No accounts, no carts, no checkout forms — just pick
a piece and say hi.

## Features

- **Banner hero carousel** on the home page (auto-playing fade slider, clickable dots)
- **New Arrival strip** on the home page, featuring the latest pieces

- **Shop grid** with prices in HKD, In Stock / Sold Out filters and New badges
- **Product detail pages** with photo gallery, thumbnails and per-item order button
- **Order via WhatsApp** — every order button opens a chat with a pre-filled
  message (item code · name · price), so the owner always knows exactly which
  piece is wanted

- **How to Order page** explaining the chat-first flow: contact → shipping
  (SF Express / HK Post) → PayMe/FPS QR payment
- **Marketable About page** — brand story, "why shop with us" cards and a
  shop-the-collection call to action
- **CMS for the shop owner** — products, shop text and photos are managed from
  the `/admin` panel with drag-and-drop image upload; no coding needed
- **SEO-ready** — per-page titles, meta description, Open Graph/Twitter cards,
  JSON-LD store data, robots.txt and sitemap

## Design

Girly cute blue + lace: baby-blue background with a seamless tablecloth-style
lace tile (diamond net + floral medallions), scalloped lace hems between
sections, script headings (*Parisienne*) paired with a soft rounded body font
(*Quicksand*), and tiny blush-pink bow accents.

## Pages

| Route | Page |
|---|---|
| `/` | Home — banner carousel, New Arrival, Instagram follow |
| `/shop` | Full collection with stock filters |
| `/shop/:id` | Product detail with gallery + WhatsApp order button |
| `/about` | Brand story + highlights + call to action |
| `/buyNow` | How to order, shipping and payment info |
| `/admin` | Content manager (Decap CMS) |

## Managing content

- **Products** (code, name, price, description, photos, status, New Arrival flag)
  live in `src/data/products.json` and are edited through `/admin`.
- **Shop text** (tagline, Instagram, About story, highlight cards, shipping text)
  lives in `src/data/site.json`, also editable through `/admin`.
- **Banners** live in `public/` as `Banner1`–`Banner3` (`.jpeg`, `.jpg` or `.png`);
  the carousel picks them up automatically, and any missing slot is skipped.
- **Photos** uploaded through `/admin` are stored in `public/media/products/`.

## Tech stack

React 19 · Vite 6 · React Router 7 · Decap CMS (git-gateway backend with
Netlify Identity login) · Hosted on Netlify.

## Project structure

```
src/
  component/    Navbar, Footer, Carousel, Gallery, ProductGridItem
  data/         products.json · site.json (both CMS-managed)
  layout/       Layout shell
  pages/        Home · About · Shop · ProductDetail · BuyNow
  utils/        pricing + WhatsApp link helpers
public/
  admin/        Decap CMS (index.html + config.yml)
  media/        photos uploaded through the CMS
```

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

Copy `.env.example` to `.env.local` and set the shop's WhatsApp number
(`VITE_WHATSAPP_NUMBER`, digits only with country code) to enable the WhatsApp
order buttons locally. The variable is git-ignored and never committed.
