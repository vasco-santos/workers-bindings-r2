#!/usr/bin/env node
import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

await build({
  entryPoints: [path.join(__dirname, 'index.js')],
  bundle: true,
  format: 'esm',
  outfile: path.join(__dirname, 'dist', 'worker.mjs'),
  legalComments: 'external',
  minify: false,
  sourcemap: 'external',
})
