# Biosfera

Sitio informativo de **Biosfera**, control de plagas, fumigación y sanitización para casas, jardines, bodegas y negocios en la CDMX y el Estado de México.

Hecho con React 19, Vite, React Router, Swiper y AOS. Por ahora es solo front: el contacto se hace por WhatsApp.

## Desarrollo

```bash
npm install
npm run dev
```

Otros comandos: `npm run build` (genera `dist/`), `npm run preview` (sirve el build) y `npm run lint`.

## Dónde editar el contenido

| Archivo | Contenido |
| --- | --- |
| `src/data/business.js` | Teléfono, WhatsApp, correo, horario, zona base y zonas de servicio |
| `src/data/services.js` | Servicios y sus páginas de detalle (`/servicios/:slug`) |
| `src/data/spaces.js` | Tipos de espacio que se atienden (`/espacios/:slug`) |
| `src/data/blog.js` | Artículos del blog (`/blog/:slug`) |
| `src/data/home.js` | Página de inicio |
| `src/data/pages.js` | Nosotros, preguntas frecuentes, galería, contacto |
| `src/data/layout.js` | Menú, footer y logos |

Los valores marcados como `PENDIENTE` deben reemplazarse con los datos reales antes de publicar.

## Publicar en Render

El repositorio incluye `render.yaml`, así que se puede crear como Blueprint:

1. En Render: **New > Blueprint** y elegir este repositorio.
2. Render toma la configuración del archivo: sitio estático, `npm ci && npm run build`, carpeta `dist` y Node 22.
3. Cada `push` a `main` vuelve a publicar el sitio.

Si prefieres crearlo a mano (**New > Static Site**): Build Command `npm ci && npm run build`, Publish Directory `dist`, y en **Redirects/Rewrites** agrega una regla *Rewrite* de `/*` a `/index.html` para que las rutas internas funcionen al recargar la página.
