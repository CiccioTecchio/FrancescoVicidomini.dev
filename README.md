# FrancescoVicidomini.dev

Personal website of Francesco Vicidomini, aka CiccioTecchio,
available at [francescovicidomini.dev](https://francescovicidomini.dev/).
In this website I explain my experiences and my skills.  
The site uses Next.js App Router and is rendered on the server so that search
engines receive the complete page markup.

- [React](https://it.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## How to run

1. If u use nvm then do `nvm use`, else install the node version 24.14.0
2. `npm install`
3. `npm run dev`
4. Go to [http://localhost:3000/](http://localhost:3000/)

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Keep the detected framework preset set to **Next.js**.
3. Keep the default build command (`npm run build`) and output settings.
4. Add `francescovicidomini.dev` as the primary production domain. Keep
   `cicciotecchio.dev` and `www.cicciotecchio.dev` attached to the same project
   so the host-aware permanent redirects in `next.config.ts` can preserve every
   path on the new domain. Configure the DNS records shown by Vercel.

Every push to `master` will produce a production deployment after the GitHub
integration is enabled. Pull requests will receive their own preview deployment.
No `vercel.json` file or GitHub deployment workflow is needed for this standard
Next.js setup.

For a production-like local run, use `npm run build` followed by `npm start`.
