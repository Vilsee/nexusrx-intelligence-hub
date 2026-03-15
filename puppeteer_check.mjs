import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('BROWSER CONSOLE ERROR:', msg.text());
        }
    });

    page.on('pageerror', err => {
        console.log('BROWSER PAGE ERROR:', err.message);
    });

    console.log('Navigating to http://localhost:5173/report/demo-001 ...');
    await page.goto('http://localhost:5173/report/demo-001', { waitUntil: 'networkidle0' });

    console.log('Navigated. Waiting 2 seconds...');
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Navigating to http://localhost:5173/demo ...');
    await page.goto('http://localhost:5173/demo', { waitUntil: 'networkidle0' });

    console.log('Navigated to Demo. Waiting 2 seconds...');
    await new Promise(resolve => setTimeout(resolve, 2000));

    await browser.close();
    console.log('Done.');
})();
