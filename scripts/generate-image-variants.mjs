import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root = path.resolve('public/assets');
const inventoryPath = path.resolve('src/utils/image-variant-inventory.json');
const sizes = [320,640,1024];
const inventory = {};
const publicManifest = {};
let failures = 0;
let removedDirectories = 0;
const assetRoot = await fs.realpath(root);

// 先删完素材目录内的旧缩略图，再开始生成，避免遗留旧格式和孤立文件。
async function clearOldThumbnails(dir) {
  for (const entry of await fs.readdir(dir,{withFileTypes:true})) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir,entry.name);
    if (entry.name !== 'low') { await clearOldThumbnails(full); continue; }
    const target = await fs.realpath(full);
    const relative = path.relative(assetRoot,target);
    if (!relative || relative === '..' || relative.startsWith('..'+path.sep) || path.isAbsolute(relative) || path.basename(target) !== 'low') {
      throw new Error('拒绝删除素材目录以外的路径：'+target);
    }
    await fs.rm(target,{recursive:true});
    removedDirectories++;
  }
}

async function walk(dir) {
  for (const entry of await fs.readdir(dir,{withFileTypes:true})) {
    if (entry.name === 'low') continue;
    const full = path.join(dir,entry.name);
    if (entry.isDirectory()) { await walk(full); continue; }
    if (!entry.isFile() || !/\.(png|jpe?g|webp)$/i.test(entry.name)) continue;
    const relative = '/assets/' + path.relative(root,full).split(path.sep).join('/');
    const stat = await fs.stat(full);
    // Animated WebP must never be converted into single-frame responsive thumbnails.
    // GIFs are excluded by the extension filter above.
    if (/\.webp$/i.test(entry.name)) {
      try {
        const meta = await sharp(full).metadata();
        if ((meta.pages || 1) > 1) {
          publicManifest[relative] = {bytes: stat.size, widths: []};
          continue;
        }
      } catch (err) {
        failures++;
        console.error('Image metadata failed:', relative, err);
        continue;
      }
    }
    if (stat.size < 10*1024) { publicManifest[relative] = {bytes: stat.size, widths: []}; continue; }
    const outDir = path.join(dir,'low');
    const name = path.parse(entry.name).name;
    const completed = [];
    const format = 'webp';
    try {
      await fs.mkdir(outDir,{recursive:true});
      for (const width of sizes) {
        const output = path.join(outDir,`${name}-${width}.${format}`);
        try {
          const image = sharp(full).resize({width,withoutEnlargement:true});
          await image.webp({quality:80}).toFile(output);
          completed.push(width);
        } catch(err) { failures++; console.error('Variant failed:',relative,width,err); }
      }
    } catch(err) { failures++; console.error('Image failed:',relative,err); }
    if (completed.length) inventory[relative] = completed;
    publicManifest[relative] = {bytes: stat.size, widths: completed, format};
  }
}
await clearOldThumbnails(root);
console.log(`Removed old thumbnails from ${removedDirectories} directories.`);
await walk(root);
await fs.writeFile(inventoryPath,JSON.stringify(inventory,null,2)+'\n');
await fs.writeFile(path.resolve('public/assets/image-variant-manifest.json'),JSON.stringify(publicManifest,null,2)+'\n');
console.log(`Generated variants for ${Object.keys(inventory).length} images; failures: ${failures}`);
if (failures) process.exitCode=1;
