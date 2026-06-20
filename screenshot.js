const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  
  // Load the local index.html file
  await page.goto(`file://${__dirname.replace(/\\/g, '/')}/Index.html`, { waitUntil: 'networkidle0' });
  
  // Save to the artifacts directory
  await page.screenshot({ path: 'C:/Users/shrey/.gemini/antigravity-ide/brain/9e7824e3-993f-4ca9-a44f-da7863093142/desktop_1440px.png', fullPage: true });

  await browser.close();
})();
