const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'aa.png' });
    //page.content html code
    
    await browser.close();
})();