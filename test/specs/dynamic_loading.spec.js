const dynamicloadingpage = require('../pageobjects/dynamic_loading.page');


describe('My loading page application', () => {
    it('should open the dynamic loading page', async () => {
        await dynamicloadingpage.open();
        
    });
});

describe('My loading page application', () => {
    it('should save a screenshot of the browser view', async () => {
        await browser.saveScreenshot('./screenShots/screenshot.png');
        await browser.pause(2000);
        //await browser.saveScreenshot('./screenShots/screenshot2.png');
    });
});

describe('Start button and screenshot', () => {
    it('it should click the button and screenshot', async () => {
        await (dynamicloadingpage.startbutton).click()
        await browser.pause(5000);
        await browser.saveScreenshot('./screenShots/screenshot2.png');
    });
});

describe('Dyanmic Loading Page H4', () => {
    it('should say Hello World', async () => {
        //await expect(dynamicloadingpage.h4).toBeExisting();
        await expect(dynamicloadingpage.h4).toHaveTextContaining(
            'Hello World!');
        
    });
});

//Compact method
// describe('My Dynamic application', () => {
//     it('should click the start button', async () => {
//         await dynamicloadingpage.open();
        
//         await browser.saveScreenshot('./screenShots/screenshot.png');
        
//         await (dynamicloadingpage.startbutton).click();
//     });
//     it('should verify that the H4 exists and take a screenshot', async () => {
//         await browser.pause(5000);
        
//         await expect (dynamicloadingpage.h4).toExist;

//         await browser.saveScreenshot('./screenShots/screenshot2.png');
//     });
// });
