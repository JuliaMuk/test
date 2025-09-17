import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
export default defineConfig({
  base:"/test/",
  plugins: [
    Inspect(),
    tailwindcss(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
          exclude: undefined,
          include: undefined,
          png: {
            quality: 60,
          },
          jpeg: {
            quality: 60,
          },
          jpg: {
            quality: 60,
          },
          tiff: {
            quality: 60,
          },
          webp: {
            quality: 60,
          },
          avif: {
            quality: 60,
          },
          pngquant: {
            quality: [0.6, 0.8],
          },
          mozjpeg: {
            quality: 60,
          },
          gifsicle: {
            optimizationLevel: 3,
          },
          svgoOptions: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              'prefixIds',
            ],
          },
        
    }),
  ],
});