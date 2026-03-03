# RE/MAX Skyway Realty Inc. Website (Static)

## What you get
- Clean white theme + gold/charcoal accents pulled from your logo
  - Gold: #C0A070
  - Charcoal: #2B2B2B
- Bold typography (Playfair Display + Manrope via Google Fonts)
- Pages: Home, About, Listings, Services, Testimonials, Gallery, Contact
- Responsive nav + gallery modal

## How to run locally
Just open `index.html` in a browser.

## How to host (GitHub Pages)
1. Create a repo (example: `yourname-realestate-site`)
2. Upload **all** files from this folder to the repo root
3. GitHub → Settings → Pages → Deploy from branch → `main` → `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo>/`

## Customize checklist (5 minutes)
- Replace "Hardeep Ghuman" everywhere (search/replace)
- Update phone/email in `contact.html` + footer
- Add your social links in the footer
- Swap listing cards with real listings (or connect IDX later)
- Add gallery photos:
  - Put images into `assets/photos/`
  - Replace the placeholder `.ph` blocks in `gallery.html` with `<img src="assets/photos/yourfile.jpg" ...>`

## Notes
This site is intentionally static to keep it simple. If you want:
- Working form submissions (Formspree / Netlify Forms)
- MLS/IDX feed integration
- Analytics + SEO schema
tell me and I’ll wire it in.
