import { Given, When, Then } from '@cucumber/cucumber';
import { expect as chaiExpect } from 'chai';
import { HomePage } from '../po/pages/HomePage.js';
import { ShoppingCartPage } from '../po/pages/ShoppingCartPage.js';
import { checkElementIsVisible } from '../core/wdio/checks.js';
import { getTableCellElement } from '../core/wdio/actions.js';

const homePage = new HomePage();
const shoppingCartPage = new ShoppingCartPage();


Given(/^a user is on LiteCart home page$/, async () => {
    await homePage.openPage();
});

When(/^a user selects "(.*)" category$/, async (categoryType) => {
    await homePage.sidebar.selectCategory(categoryType);
});

When(/^a user selects "(.*)" in subcategory$/, async (duckColor) => {
    await (await homePage.sidebar.selectedCategory.getSubcategoryItem(duckColor)).waitForClickable();
    await (await homePage.sidebar.selectedCategory.getSubcategoryItem(duckColor)).click();
});

Then(/^a duck should have certain technical data$/, async (table) => {
    await homePage.addToCartForm.technicalDataTab.click();
    const data = table.raw(); //[['Body', 'Yellow'], ['Eyes', 'Black'], ['Beak', 'Orange'], ['Material', 'Plastic']]
    for (const [characteristic, characteristicValue] of data) {
        await checkElementIsVisible(getTableCellElement(characteristic));
        await checkElementIsVisible(getTableCellElement(characteristicValue));
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
});

When(/^a user waits until the ducks appear in the cart$/, async () => {
    await homePage.header.cartCounter.waitForExist({ timeout: 2000 });
    await browser.pause(2000); //без этого степа в корзине не появляется товар
});

When(/^a user opens the cart$/, async () => {
    await homePage.header.cartIcon.click();
    await browser.pause(2000); //без этого степа в корзине не появляется товар
});

Then(/^a user (should|should not) see "(.*)" item$/, async (condition, name) => {
    switch (condition) {
        case 'should':
            await checkElementIsVisible((await shoppingCartPage.getProductItemByName(name)).rootElement);
            break;
        case 'should not':
            chaiExpect((await shoppingCartPage.getProductItemByName(name))).to.equal(undefined);
            break;
    }
});

When(/^a user deletes "(.*)" product from the cart$/, async (name) => {
    await (await shoppingCartPage.getProductItemByName(name)).deleteProductItem();
    await browser.pause(3000);
});
