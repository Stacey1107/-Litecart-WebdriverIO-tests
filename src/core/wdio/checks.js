export class Checks {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
    };

    async elementIsDisplayed() {
        return expect(this.wdioElement).toBeDisplayed();
    };

    async elementsIsNotPresent() {
        return expect(this.wdioElement).not.toBePresent();
    };
}

