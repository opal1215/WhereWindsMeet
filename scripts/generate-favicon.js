const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 读取 SVG
const svgPath = path.join(__dirname, '../public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

console.log('🎨 Starting favicon generation...\n');

// 生成不同尺寸
const sizes = [16, 32, 48, 180, 192, 512];

async function generateFavicons() {
  try {
    // 生成不同尺寸的 PNG
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));

      console.log(`✅ Generated favicon-${size}x${size}.png`);
    }

    // 生成 Apple Touch Icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

    console.log('✅ Generated apple-touch-icon.png');

    // 生成标准 favicon.ico (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, '../public/favicon.png'));

    console.log('✅ Generated favicon.png (for fallback)');

    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Check public/ folder for all generated images');
    console.log('2. Update your HTML <head> with favicon links');
    console.log('3. Test in browser with hard refresh (Ctrl+Shift+R)');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
