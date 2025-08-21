import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              /** Enable readable classNames in development */
              displayName: true,
              /** Remove dead code annotations for smaller bundles */
              pure: true,
            },
          ],
        ],
      },
    }),
  ],
})
