export class Actions {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
    };

    async getText() {
        return this.wdioElement.getText();
    };

    async getAttribute(attributeName) {
        return this.wdioElement.getAttribute(attributeName);
    };

    async click() {
        await this.wdioElement.click();
    };
}