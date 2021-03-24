const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone 6'])
    await page.goto('https://rushankshah.vercel.app/');
    await page.screenshot({path: 'example.png'});
    // await browser.waitForTarget()
    await browser.close();
  })();