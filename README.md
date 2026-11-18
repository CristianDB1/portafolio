# Portafolio · Cristian

Landing de portafolio y servicios (Astro, sitio estático) con la dirección visual "talonario de remisiones".

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321/portafolio
npm run build     # genera dist/
```

## Dónde editar

Todo el contenido está en `src/data/site.ts` (servicios, proyectos, pasos, WhatsApp, correo, foto).
Los datos marcados `PENDIENTE` los pones tú: sin WhatsApp/correo, esos botones no aparecen.

## Publicar en GitHub Pages (automático)

1. Crea el repo en GitHub (por ejemplo `portafolio`) y sube este código a la rama `main`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `git push` a `main` ejecuta `.github/workflows/deploy.yml` y publica en
   `https://<usuario>.github.io/<repo>/`.
4. Si el repo no se llama `portafolio`, cambia `base` en `astro.config.mjs`
   (o usa el repo `<usuario>.github.io` con `ASTRO_BASE=/`).

## Skills de diseño

`.agents/skills/` (animación y diseño) y `skills-lock.json` se instalan con `npx skills`.
