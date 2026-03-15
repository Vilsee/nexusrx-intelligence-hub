import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => {
        console.log('BROWSER_LOG:', msg.text());
    });

    page.on('pageerror', err => {
        console.log('BROWSER_PAGE_ERROR:', err.message);
    });

    console.log('Navigating to Demo...');
    await page.goto('http://localhost:5173/demo', { waitUntil: 'networkidle0' });

    console.log('Clicking the start button...');
    try {
        await page.waitForSelector('button.magnetic-button', { timeout: 2000 });
        await page.click('button.magnetic-button');
    } catch (e) {
        console.log('No button found or click failed', e.message);
    }

    console.log('Waiting 18 seconds for demo to transition...');
    await new Promise((resolve) => setTimeout(resolve, 18000));

    const url = page.url();
    console.log('URL after wait:', url);

    const content = await page.content();
    fs.writeFileSync('demodump.html', content);

    await page.screenshot({ path: 'demodump.png' });
    console.log('Saved dump to demodump.html and demodump.png');

    await browser.close();
})();
