import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'neutral',
    fromVite: true,
    sourcemap: true,
    dts: {
      vue: true,
    },
  },
])
