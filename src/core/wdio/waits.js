export class Waits {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
    };

    async forDisplayed(waitOptions) {
        await this.wdioElement.waitForDisplayed(waitOptions);
    };

    async forClickable() {
        await this.wdioElement.waitForClickable();
    };
}