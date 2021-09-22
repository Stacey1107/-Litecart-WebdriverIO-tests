import { Given, When, Then } from '@cucumber/cucumber';
import { expect as chaiExpect } from 'chai';
import { HomePage } from '../po/pages/HomePage.js';
import { ShoppingCartPage } from '../po/pages/ShoppingCartPage.js';
import { Checks } from '../core/wdio/checks.js';
import {Waits} from '../core/wdio/waits.js';

const homePage = new HomePage();
const shoppingCartPage = new ShoppingCartPage();


Given(/^a user is on LiteCart home page$/, async () => {
    return homePage.open();
});

When(/^a user accepts cookies$/, async () => {
    return homePage.acceptCookies.click();
});

When(/^a user selects "(.*)" category$/, async (categoryType) => {
    return homePage.sidebar.selectCategory(categoryType);
});

When(/^a user selects "(.*)" in subcategory$/, async (duckColor) => {
    await new Waits(homePage.sidebar.selectedCategory.getSubcategoryItem(duckColor).wdioElement).waitForClickable();
    await homePage.sidebar.selectedCategory.getSubcategoryItem(duckColor).click();
});

Then(/^a duck should have certain technical data$/, async (table) => {
    await homePage.addToCartForm.technicalDataTab.click();
    const data = table.raw(); //[['Body', 'Yellow'], ['Eyes', 'Black'], ['Beak', 'Orange'], ['Material', 'Plastic']]
    for (const [characteristic, characteristicValue] of data) {
        const characteristicCheck = homePage.addToCartForm.technicalDataTable.getTableCellElement(characteristic);
        const characteristicValueCheck = homePage.addToCartForm.technicalDataTable.getTableCellElement(characteristicValue);

        await new Checks(characteristicCheck.wdioElement).checkElementIsDisplayed();
        await new Checks(characteristicValueCheck.wdioElement).checkElementIsDisplayed();
    }
});

When(/^a user selects a duck of "(.*)" size$/, async (sizeValue) => {
    await homePage.addToCartForm.sizeSelect.selectOption(sizeValue);
});

When(/^a user specifies "(.*)" items of ducks$/, async (duckQuantity) => {
    await homePage.addToCartForm.quantityInput.clearValue();
    await homePage.addToCartForm.quantityInput.setValue(duckQuantity);
});

Then(/^a user adds ducks to a cart$/, async () => {
    await homePage.addToCartForm.addToCartButton.click();
    await new Waits(homePage.header.cartCounter.wdioElement).waitForDisplayed();
});

When(/^a user opens the cart$/, async () => {
    await homePage.header.cartIcon.click();
});

When(/^a user waits for the item to be displayed$/, async () => {
    await new Waits(shoppingCartPage.productItemsList.productItemsWrapper.wdioElement).waitForDisplayed();
});

Then(/^a user (should|should not) see "(.*)" item$/, async (condition, name) => {
    switch (condition) {
        case 'should':
            chaiExpect((await shoppingCartPage.productItemsList.getProductItemByName(name))).not.to.equal('Product item by name has not been found');
            break;
        case 'should not':
            chaiExpect((await shoppingCartPage.productItemsList.getProductItemByName(name))).to.equal('Product item by name has not been found');
            break;
    }
});

When(/^a user deletes "(.*)" product from the cart$/, async (name) => {
    await (await shoppingCartPage.productItemsList.getProductItemByName(name)).removeIcon.click();
});

When(/^a user waits until the item disappears from the cart$/, async () => {
    await expect(shoppingCartPage.productItemsList.productItemsWrapper.wdioElement).not.toBeDisplayed();
});
