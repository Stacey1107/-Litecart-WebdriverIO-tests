import { expect as chaiExpect } from "chai";

export async function checkElementIsVisible(element) {
    await element.waitForDisplayed();
    await expect(element).toBeDisplayed();
};

export async function checkElementsIsNotPresent(element) {
    chaiExpect(await element.isExisting()).to.equal(false);
};