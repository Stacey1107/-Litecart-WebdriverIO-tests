export class WebElement {
    constructor(rootElement) {
        this.rootElement = rootElement;
    };

    async isDisplayed() {
        return this.rootElement.isDisplayed();
    };

    async isExisting() {
        return this.rootElement.isExisting();
    };

    async getText() {
        return this.rootElement.getText();
    };

    async getAttribute(attributeName) {
        return this.rootElement.getAttribute(attributeName);
    };

    async click() {
        await this.rootElement.click();
    };

    async waitForDisplayed(waitOptions) {
        await this.rootElement.waitForDisplayed(waitOptions);
    }
}