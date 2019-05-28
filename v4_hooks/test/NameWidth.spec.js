const assert = require('assert');
const puppeteer = require('puppeteer');
describe( 'Feature: Hooks Basis', () => {
  describe('Given: Name in the input text', () => {
   it('When: Search the Name, Then: the inital name is there',  async () => {
      const browser = await puppeteer.launch({
        args: [
           '--no-sandbox',
           '--disable-setuid-sandbox'
        ]
      });    
      const page = await browser.newPage();
        await page.goto('http://localhost:'+process.env.PORT+'/', {waitUntil: 'domcontentloaded'}); //, {waitUntil: 'networkidle2'});
        let textResponse = await page.evaluate(() => {
          let elemCheck = document.querySelector('div.name');
          return elemCheck.innerHTML;
        });
        assert( textResponse === '', "[OK] Initial Name is there: [${textResponse}] must be Emptry" );
        browser.close();
    }).timeout(3000);
 
   it('When: Modify the input name, Then: change the div name', async () => {
      const browser = await puppeteer.launch({
        args: [
           '--no-sandbox',
           '--disable-setuid-sandbox'
        ]
      });    
      const page = await browser.newPage();
        await page.goto('http://localhost:'+process.env.PORT+'/', { waitUntil: 'networkidle0'});//{waitUntil: 'domcontentloaded'}); //, {waitUntil: 'networkidle2'});
        await page.type('input.name', 'Joaquin', {delay:10});
        let textResponse = await page.evaluate(() => {
          let elemCheck = document.querySelector('div.name');
          return elemCheck.innerHTML;
        });
        assert( textResponse === 'Joaquin', `[OK] The Changed Name is there expected: Joaquin, inspected: ${textResponse}` );
        browser.close();
   }).timeout(3000);

  });
});

