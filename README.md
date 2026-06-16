# Lexend Website

<img width="1093" alt="Screen Shot 2019-06-08 at 7 26 26 PM" src="https://user-images.githubusercontent.com/25366/64728959-329a1b80-d4aa-11e9-9025-f6536102a21e.png">

An awesome, function website for an awesome, functional font — Lexend is a font designed specifically to increase to reading-proficiency, and it's got some data to back it up. We designed this sucker to show it.

There's a lot of fun but not-too-complicated tech here:

- [next.js](https://nextjs.org) for a minimal react framework
- [react-spring](https://www.react-spring.io/) for amazing animation
- [emotion](https://emotion.sh/docs/introduction) for simple & mostly-contained component styling
- [mdx](https://mdxjs.com/) to keep our homepage in fairly simple markdown, with components mixed in

### 🏃‍♂️ Getting Up & Running

> Make sure you've got a recent [Node](https://nodejs.org/en/) (18+) installed. These examples use `npm`, but `yarn`/`pnpm` work too.

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev      # http://localhost:3000
```

3. Build the static site (output is written to `./out`):

```bash
npm run build
```

### 🚀 Deployment

The site is a fully static export (Next.js [`output: 'export'`](https://nextjs.org/docs/app/guides/static-exports)). Pushing to `main` triggers [`.github/workflows/build.yml`](.github/workflows/build.yml), which builds `./out` and publishes it to the `gh-pages` branch automatically — you don't need to run anything by hand.

To deploy manually if you ever need to: `npm run build && npm run deploy`.

> **Moving to Cloudflare Pages?** Use **Build command:** `npm run build`, **Build output directory:** `out`. No special Node flags are required anymore. Cloudflare handles the custom domain, so the `CNAME` / `.nojekyll` files (kept in `public/` for GitHub Pages) become irrelevant there.

#### 👨🏻‍🚒 Notes for Future Development

###### Static files

Non-dynamic assets (fonts, images, favicons) live in [`public/static`](public/static). Anything in `public/` is served from the site root, so `public/static/fonts/lexendgx.woff2` is available at `/static/fonts/lexendgx.woff2`. The site is served from the domain root (`www.lexend.com`), so relative `static/...` URLs resolve correctly — no asset-prefix juggling needed.

###### The MDX homepage

The entire page is [`pages/index.mdx`](pages/index.mdx) — markdown with React components mixed in. Components are imported at the top of the file and rendered inline; the `export default` at the bottom is the page layout wrapper.
