export class Checks {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
    };

    async checkElementIsDisplayed() {
        expect(this.wdioElement).toBeDisplayed();
    };

    async checkElementsIsNotPresent() {
        expect(this.wdioElement).not.toBePresent();
    };
}

