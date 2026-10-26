// Makes the smaller copies of every stock photo that cards and thumbnails use:
// public/stock/<id>/<720|400|160>/NN.webp.
// Run after adding photos: npm run stock-sizes (skips copies that already exist).
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = join(process.cwd(), 'public', 'stock');
const widths = [720, 400, 160];

for (const id of readdirSync(root)) {
  const dir = join(root, id);
  for (const file of readdirSync(dir).filter((f) => /^\d+\.webp$/.test(f))) {
    for (const w of widths) {
      const out = join(dir, String(w), file);
      if (existsSync(out)) continue;
      mkdirSync(join(dir, String(w)), { recursive: true });
      await sharp(join(dir, file)).resize({ width: w, withoutEnlargement: true }).webp({ quality: w > 200 ? 72 : 60 }).toFile(out);
    }
  }
}
