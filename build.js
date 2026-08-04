const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(srcDir, '.vercel', 'output', 'static');

// Clean and recreate destination
if (fs.existsSync(path.join(srcDir, '.vercel'))) {
  fs.rmSync(path.join(srcDir, '.vercel'), { recursive: true, force: true });
}
fs.mkdirSync(destDir, { recursive: true });

// Copy function
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Files/folders to ignore
const ignoreList = new Set([
  '.git',
  '.vercel',
  'node_modules',
  'build.js',
  'package.json',
  'package-lock.json',
  '.gitignore',
  'vercel.json'
]);

// Read root directory and copy
fs.readdirSync(srcDir).forEach((item) => {
  if (ignoreList.has(item)) {
    return;
  }
  const srcPath = path.join(srcDir, item);
  const destPath = path.join(destDir, item);
  copyRecursiveSync(srcPath, destPath);
});

// Create config.json
const configPath = path.join(srcDir, '.vercel', 'output', 'config.json');
fs.writeFileSync(configPath, JSON.stringify({ version: 3 }, null, 2));

console.log('Build output generated successfully in .vercel/output');
