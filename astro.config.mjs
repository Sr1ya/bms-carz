// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The dev toolbar boots right after page load, exactly when the intro logo animates,
  // and its long main-thread tasks made the animation skip frames in `npm run dev`.
  devToolbar: { enabled: false },
});
