import fs from 'fs';
import path from 'path';
import opentype from 'opentype.js';

// Config
const FONT_PATH = path.resolve(process.cwd(), 'public', 'fonts', 'atkinson-bold.woff');
const OUT_PATH = path.resolve(process.cwd(), 'scripts', 'badge-paths.json');
const LABELS = ['NEW', 'PIN'];
const FONT_SIZE = 72; // units in font units; we'll scale to fit viewBox later

async function main() {
  if (!fs.existsSync(FONT_PATH)) {
    console.error('Font file not found at', FONT_PATH);
    process.exit(1);
  }

  const font = await opentype.load(FONT_PATH);

  const results = {};

  for (const label of LABELS) {
    // Create a path for the string at given fontSize
    const pathObj = font.getPath(label, 0, 0, FONT_SIZE);

    // Compute bounding box and center in font units
    const bbox = pathObj.getBoundingBox();
    const width = bbox.x2 - bbox.x1;
    const height = bbox.y2 - bbox.y1;
    const cx = (bbox.x1 + bbox.x2) / 2;
    const cy = (bbox.y1 + bbox.y2) / 2;

    // Target height in SVG viewBox units (0..100). Tweak this to taste.
    const TARGET_HEIGHT = 28; // glyph height will map to ~28 viewBox units
    const scale = TARGET_HEIGHT / height;

    // Transform commands: translate so center is at origin, flip Y, scale to viewBox units
    function tX(x) { return (x - cx) * scale; }
    function tY(y) { return -(y - cy) * scale; }

    // Build new path data string with transformed coordinates
    const cmds = pathObj.commands;
    let d = '';
    for (const c of cmds) {
      if (c.type === 'M') {
        d += `M${tX(c.x).toFixed(2)} ${tY(c.y).toFixed(2)}`;
      } else if (c.type === 'L') {
        d += `L${tX(c.x).toFixed(2)} ${tY(c.y).toFixed(2)}`;
      } else if (c.type === 'C') {
        d += `C${tX(c.x1).toFixed(2)} ${tY(c.y1).toFixed(2)} ${tX(c.x2).toFixed(2)} ${tY(c.y2).toFixed(2)} ${tX(c.x).toFixed(2)} ${tY(c.y).toFixed(2)}`;
      } else if (c.type === 'Q') {
        d += `Q${tX(c.x1).toFixed(2)} ${tY(c.y1).toFixed(2)} ${tX(c.x).toFixed(2)} ${tY(c.y).toFixed(2)}`;
      } else if (c.type === 'Z') {
        d += 'Z';
      }
    }

    results[label] = {
      d,
      meta: {
        bbox,
        cx: +cx.toFixed(2),
        cy: +cy.toFixed(2),
        scale: +scale.toFixed(6),
        targetHeight: TARGET_HEIGHT
      }
    };
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify(results, null, 2), 'utf8');
  console.log('Wrote badge paths to', OUT_PATH);
  console.log(JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
