export class Select {
    constructor(basicButton) {
        this.basicButton = basicButton;
    };

    async selectOption(option) {
        await this.basicButton.selectByVisibleText(option);
    };
}