import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'TripleA',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    theme_color: '#0B1120',
    background_color: '#0B1120',
    icons: [
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  };
}
