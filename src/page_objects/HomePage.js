class HomePage {
    async openWebsite() {
        await browser.url('https://demo.litecart.net/', { 'timeout': 30000 });
        expect(browser).toHaveUrl('https://demo.litecart.net/');
        //await browser.deleteCookies();
    }
}

export default new HomePage()