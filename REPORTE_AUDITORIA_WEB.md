# Reporte de auditoría técnica (SEO, DOM, Accesibilidad, Escalabilidad y UX)

## Estado actual (resumen ejecutivo)

El proyecto tiene una **base sólida visual y de estructura** (Next.js 16 + App Router, tipado estricto, secciones bien definidas), pero presenta brechas importantes para SEO técnico, accesibilidad y escalabilidad de contenido.

Hallazgos clave:

1. **SEO técnico incompleto**: no hay `robots`, `sitemap`, `manifest`, metadata social avanzada ni datos estructurados.
2. **Accesibilidad mejorable**: faltan atributos ARIA en controles críticos, hay enlaces placeholder y faltan estados de foco consistentes.
3. **Rendimiento/LCP**: uso de `<img>` en hero en lugar de `next/image`, animaciones y efectos visuales costosos en toda la landing.
4. **Escalabilidad de contenido**: textos, contactos y enlaces hardcodeados en múltiples componentes, sin capa de configuración/CMS.
5. **Problema de DOM/semántica**: hay `main` anidado (landmark duplicado), lo cual afecta semántica y navegación asistiva.

---

## Evidencia encontrada en el código

| Área | Hallazgo | Evidencia |
|---|---|---|
| SEO | Solo metadata básica (`title`, `description`, `keywords`) | `app/layout.tsx:13` |
| SEO | No existen archivos/handlers de `robots`, `sitemap`, `manifest` | `app/**/{sitemap.*,robots.*,manifest.*}` (sin resultados) |
| Performance/SEO | Imagen principal con `<img>` (warning de Next) | `features/landing/components/HeroSection.tsx:93` |
| DOM/Accesibilidad | `main` anidado (layout + page) | `app/layout.tsx:31`, `app/page.tsx:8` |
| Accesibilidad | Botón menú móvil sin `aria-label`/`aria-expanded` | `features/layout/components/Navbar.tsx:184` |
| UX/Calidad | Enlace placeholder `href: '#'` (brochure) | `features/layout/components/Navbar.tsx:56` |
| Escalabilidad | Datos de contacto repetidos/hardcodeados | `Navbar.tsx`, `ContactSection.tsx`, `FloatingContact.tsx`, `Footer.tsx` |
| Arquitectura | Casi toda la landing es Client Component | múltiples `use client` en componentes de secciones |
| Mantenibilidad | Comentario interno largo/no limpio en Hero | `features/landing/components/HeroSection.tsx:37` |
| Configuración | Advertencia de raíz Turbopack por lockfiles múltiples | salida de build |

---

## Mejoras recomendadas por prioridad

## 🔴 Prioridad alta (impacto inmediato)

### 1) Corregir semántica de landmarks (`main` único)
- **Qué hacer**: eliminar `<main>` de `app/page.tsx` y dejar solo el de `app/layout.tsx`.
- **Impacto**: mejora navegación para lectores de pantalla y semántica HTML.

### 2) Migrar hero image a `next/image`
- **Qué hacer**: reemplazar `<img>` por `<Image>` con `priority` para LCP, tamaños (`sizes`) y dimensiones explícitas.
- **Impacto**: mejora LCP, CLS y SEO técnico.

### 3) Completar SEO técnico base
- **Qué hacer**:
  - crear `app/robots.ts`
  - crear `app/sitemap.ts`
  - crear `app/manifest.ts`
  - ampliar metadata con `openGraph`, `twitter`, `metadataBase`, `alternates.canonical`.
- **Impacto**: indexación correcta y mejor vista previa social.

### 4) Corregir accesibilidad de navegación móvil
- **Qué hacer**:
  - añadir `aria-label` al botón del menú
  - enlazar estado con `aria-expanded`
  - referenciar panel con `aria-controls`.
- **Impacto**: navegación más accesible en móvil.

### 5) Remover placeholders de producción
- **Qué hacer**: reemplazar `href: '#'` por URL real de brochure o deshabilitar con estado explícito.
- **Impacto**: evita mala UX y señales negativas de calidad.

---

## 🟠 Prioridad media (mejora fuerte de UX y mantenibilidad)

### 6) Centralizar contenido de negocio en un módulo de configuración
- **Qué hacer**: mover teléfono, email, redes, textos de CTA y enlaces a un archivo central (ej. `lib/site-config.ts`).
- **Impacto**: reduce duplicación y facilita cambios de contenido.

### 7) Reducir carga de Client Components
- **Qué hacer**: dejar en cliente solo componentes con estado/animación; convertir resto a server components cuando aplique.
- **Impacto**: menos JS en cliente, mejor rendimiento percibido.

### 8) Estrategia de motion accesible
- **Qué hacer**: respetar `prefers-reduced-motion` para framer-motion y suavizar efectos de blur/hover en móviles.
- **Impacto**: mejor accesibilidad cognitiva y rendimiento en dispositivos modestos.

### 9) Mejorar estados de foco visibles y consistentes
- **Qué hacer**: definir sistema de `focus-visible` para enlaces, botones y tarjetas interactivas.
- **Impacto**: accesibilidad por teclado y claridad de interacción.

### 10) Limpiar comentarios y deuda de código visible
- **Qué hacer**: remover comentario interno extenso del Hero y dejar intención limpia.
- **Impacto**: mantenibilidad y profesionalismo del código.

---

## 🟡 Prioridad estratégica (escalabilidad del producto)

### 11) Definir modelo de contenido escalable
- **Qué hacer**: separar “presentación” de “contenido” (JSON/TS config o CMS headless).
- **Impacto**: crecimiento multisitio, cambios de copy sin tocar componentes.

### 12) Añadir i18n base si habrá expansión regional
- **Qué hacer**: preparar estructura para múltiples idiomas/rutas (`es`, `en`).
- **Impacto**: SEO internacional y expansión comercial.

### 13) Instrumentar métricas UX (Core Web Vitals + eventos)
- **Qué hacer**: integrar analítica para medir LCP, CLS, INP, CTA clicks y scroll depth.
- **Impacto**: priorización basada en datos, no intuición.

### 14) Estrategia de assets y branding
- **Qué hacer**: generar OG image propia, favicon/manifest completo, iconos y logos optimizados.
- **Impacto**: mejor CTR en buscadores/redes y consistencia de marca.

### 15) Fortalecer pipeline de calidad
- **Qué hacer**: agregar chequeos de accesibilidad/SEO en CI (ej. Lighthouse CI, axe en pruebas E2E).
- **Impacto**: evita regresiones en experiencia de usuario.

---

## Plan de implementación sugerido

### Fase 1 (rápida)
1. Landmark `main` único.
2. `next/image` en hero.
3. `robots`, `sitemap`, `manifest`.
4. Correcciones ARIA en navbar móvil.
5. Eliminar `href="#"`.

### Fase 2 (estructural)
1. Centralización de contenido y contactos.
2. Reducción de Client Components innecesarios.
3. Motion accesible y sistema de foco global.

### Fase 3 (escalabilidad)
1. Capa de contenido escalable (config/CMS).
2. i18n.
3. Instrumentación de métricas y auditorías automáticas en CI.

---

## Resultado de chequeo técnico ejecutado

- **Lint**: sin errores, 1 warning de `@next/next/no-img-element` en Hero.
- **Build**: exitoso.
- **Build warning**: conflicto potencial de raíz por lockfile adicional fuera del repo (`C:\Users\USER\package-lock.json`); conviene fijar `turbopack.root` para evitar ambigüedad.
