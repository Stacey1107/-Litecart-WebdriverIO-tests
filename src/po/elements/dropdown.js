export class Dropdown {
    constructor(basicButton) {
        this.basicButton = basicButton;
    };

    async selectOption(option) {
        await this.basicButton.click();
        await option.click();
    };
}