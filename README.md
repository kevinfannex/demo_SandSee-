# S and See Salon: demo website

React + Vite + Tailwind CSS + Lucide.

## Run locally
    npm install
    npm run dev        # http://localhost:5173

## Production build
    npm run build      # outputs dist/
    npm run preview

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel: Add New > Project > import the repo. Framework preset: Vite (build `npm run build`, output `dist`).
3. Deploy. Or via CLI: `npm i -g vercel && vercel --prod`.

## Replace before going live (all in `src/config.js` unless noted)
- WhatsApp number (`whatsappNumber`), phone, email, address
- Opening hours
- Google Maps embed URL, Instagram URL
- Photos: add licensed images to `public/images/` and set paths in `IMAGES` (hero, about, gallery)
- Service descriptions and prices (currently "Contact us for pricing")
- About copy: add real facts only once the owner supplies them
- Testimonials: replace placeholders in `components/Testimonials.jsx` with approved real reviews
- Contact form: connect a backend (e.g. Formspree, email service) in `components/Contact.jsx`; it currently validates and shows a demo message only
- Site URL, Open Graph image and title in `index.html`
