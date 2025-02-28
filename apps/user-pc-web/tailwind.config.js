import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export const content = [
  join(
    __dirname,
    '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  ),
  ...createGlobPatternsForDependencies(__dirname),
];
export const theme = {
  extend: {},
};
export const plugins = [typography];
