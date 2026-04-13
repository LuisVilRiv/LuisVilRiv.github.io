# Portfolio — Luis Villegas Rivera

Portfolio personal construido con **Astro** y CSS puro. Sin frameworks JS en el cliente.

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build
```

## Estructura

```
src/
├── components/
│   ├── Nav.astro        ← Navbar (menú móvil CSS-only vía checkbox)
│   ├── Hero.astro       ← Sección principal
│   ├── About.astro      ← Sobre mí
│   ├── Projects.astro   ← Lee automáticamente src/content/projects/*.md
│   ├── Skills.astro     ← Habilidades
│   └── Contact.astro    ← Formulario de contacto
├── content/
│   ├── config.ts        ← Schema de la colección "projects"
│   └── projects/        ← Un .md por proyecto ← EDITA AQUÍ
├── layouts/
│   └── Layout.astro     ← HTML base + toda la CSS global
└── pages/
    └── index.astro      ← Página principal
public/
└── foto.jpg             ← PON AQUÍ TU FOTO (280×330 px recomendado)
```

## Añadir un proyecto nuevo

Crea un archivo `.md` en `src/content/projects/`:

```markdown
---
title: "Nombre del proyecto"
desc: "Descripción breve."
tags: ["Python", "Docker"]
url: "https://github.com/LuisVilRiv/mi-repo"
public: true
order: 7
---
```

Si `public: false` o `url` está vacío, la tarjeta aparece como privada (sin enlace).

## Foto

Copia tu foto como `public/foto.jpg`. La foto del portfolio anterior
está integrada en el HTML original; extráela o usa una nueva.
Dimensiones ideales: **280 × 330 px**.

## Deploy en GitHub Pages

```bash
# astro.config.mjs ya tiene site: 'https://luisvilriv.github.io'
npm run build
# Sube el contenido de /dist a la rama gh-pages
```

O usa el workflow de GitHub Actions de Astro:
https://docs.astro.build/en/guides/deploy/github/
