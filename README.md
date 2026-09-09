# TripleAEstudio

Sitio web de TripleAEstudio, un estudio dedicado al desarrollo web, sistemas en Excel y documentos de trabajo para pequeñas empresas.

## Requisitos

- Node.js 20 o superior
- pnpm 11

## Desarrollo

Instala las dependencias y levanta el entorno local:

```bash
pnpm install
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Comandos

```bash
pnpm dev       # entorno de desarrollo
pnpm lint      # revisión de ESLint
pnpm build     # compilación de producción
pnpm start     # servidor de producción
```

## Configuración

Copia `.env.example` a `.env.local` para personalizar el nombre, los datos de contacto y los enlaces de redes sociales. La configuración compartida está en `lib/config/site.ts`.
