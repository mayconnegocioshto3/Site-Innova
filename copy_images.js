const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Maycon\\.gemini\\antigravity\\brain\\da946e07-66e8-4654-b8f6-a4ce7cb8067a';
const destDir = 'D:\\Downloads\\Site Innova\\public\\images';

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
    { src: 'dirty_clean_bedroom_1778170851605.png', dest: 'dirty_clean_bedroom_1778170851605.png' },
    { src: 'dirty_clean_kitchen_1778170868756.png', dest: 'dirty_clean_kitchen_1778170868756.png' },
    { src: 'dirty_clean_hallway_1778170885700.png', dest: 'dirty_clean_hallway_1778170885700.png' },
    { src: 'dirty_clean_exterior_1778170899090.png', dest: 'dirty_clean_exterior_1778170899090.png' },
    { src: 'innova_logo_mockup_v2_1778187040796.png', dest: 'logo-mockup-bg.png' }
];

filesToCopy.forEach(fileObj => {
    try {
        fs.copyFileSync(path.join(srcDir, fileObj.src), path.join(destDir, fileObj.dest));
        console.log(`Copied ${fileObj.src} to ${fileObj.dest}`);
    } catch (err) {
        console.error(`Error copying ${fileObj.src}:`, err.message);
    }
});
