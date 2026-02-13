# PLASTIC2BITCOIN — Blue Sword Energy

Marketing site for Blue Sword Energy: Turning Plastic Waste Into Bitcoin.

## Run locally

**Recommended (avoids 404):** build once, then run the production server:

```bash
npm install
npm run build
npm run start:prod
```

Then open **http://localhost:3005** in your browser.

**Or use dev mode:** `npm run dev` then open the URL shown in the terminal (e.g. http://localhost:3000). If you get 404 in dev, use the production steps above instead; the project path with a space can sometimes cause the dev server to mis-route the home page.

## Build for production

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

Images live in `public/images/`. The crypto mining proposal PDF is in `public/` and linked from the Partnerships section.

## Deploy to the web (GitHub + Vercel)

1. **Create a repo on GitHub**  
   Go to [github.com/new](https://github.com/new). Name it (e.g. `plastic2bitcoin`). Don’t add a README or .gitignore (you already have them). Create the repo.

2. **Push this project** (run in this folder; replace `YOUR_USERNAME` and `YOUR_REPO` with yours):
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Deploy on Vercel**  
   Go to [vercel.com](https://vercel.com) → Sign in (e.g. with GitHub) → **Add New** → **Project** → Import your repo → **Deploy**. You’ll get a live URL (e.g. `your-project.vercel.app`).

4. **Add your domain (optional)**  
   In the Vercel project: **Settings** → **Domains** → add your domain and follow the DNS instructions at your registrar.

5. **Search engines**  
   After the site is live, add it in [Google Search Console](https://search.google.com/search-console) and submit `https://plastic2bitcoin.org/sitemap.xml`. The project includes `/sitemap.xml` and `/robots.txt`.
