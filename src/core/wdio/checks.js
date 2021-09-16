import { expect as chaiExpect } from "chai";
export class Checks {
    constructor(element) {
        this.element = element; //this.element - это экземпляр класса WebElement
    };

    async checkElementIsVisible() {
        await chaiExpect(await this.element.isDisplayed()).to.equal(true);
    };

    async checkElementsIsNotPresent() {
        await chaiExpect(this.element.isExisting()).to.equal(false);
    };
}

