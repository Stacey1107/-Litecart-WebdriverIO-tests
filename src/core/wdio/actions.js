import { Waits } from "./waits";
export class Actions {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
        this.wait = new Waits(this.wdioElement);
    };

    async getText() {
        return this.wdioElement.getText();
    };

    async getAttribute(attributeName) {
        return this.wdioElement.getAttribute(attributeName);
    };

    async click() {
        await this.wait.forClickable();
        await this.wdioElement.click();
    };
}