export class Waits {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
    };

    async waitForDisplayed(waitOptions) {
        await this.wdioElement.waitForDisplayed(waitOptions);
    };

    async waitForClickable() {
        await this.wdioElement.waitForClickable();
    };
}