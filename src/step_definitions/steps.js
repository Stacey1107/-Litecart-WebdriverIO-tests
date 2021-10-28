import { Given, When, Then } from '@cucumber/cucumber';
import { expect as chaiExpect } from 'chai';
import { HomePage } from '../po/pages/HomePage.js';
import { ShoppingCartPage } from '../po/pages/ShoppingCartPage.js';

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
    return homePage.sidebar.selectedCategory.getSubcategoryItem(duckColor).click();
});

Then(/^a duck should have certain technical data$/, async (table) => {
    await homePage.addToCartForm.technicalDataTab.click();
    const data = table.raw(); //[['Body', 'Yellow'], ['Eyes', 'Black'], ['Beak', 'Orange'], ['Material', 'Plastic']]
    for (const [characteristic, characteristicValue] of data) {
        const characteristicElement = homePage.addToCartForm.technicalDataTable.getTableCellElement(characteristic);
        const characteristicValueElement = homePage.addToCartForm.technicalDataTable.getTableCellElement(characteristicValue);

        await characteristicElement.check.elementIsDisplayed();
        await characteristicValueElement.check.elementIsDisplayed();
    }
});

When(/^a user selects a duck of "(.*)" size$/, async (sizeValue) => {
    return homePage.addToCartForm.sizeSelect.selectOption(sizeValue);
});

When(/^a user specifies "(.*)" items of ducks$/, async (duckQuantity) => {
    await homePage.addToCartForm.quantityInput.clearValue();
    return homePage.addToCartForm.quantityInput.setValue(duckQuantity);
});

Then(/^a user adds ducks to a cart$/, async () => {
    await homePage.addToCartForm.addToCartButton.click();
    return homePage.header.cartCounter.wait.forDisplayed();
});

When(/^a user opens the cart$/, async () => {
    return homePage.header.cartIcon.click();
});

When(/^a user waits for the item to be displayed$/, async () => {
    return shoppingCartPage.productItemsList.productItemsWrapper.wait.forDisplayed();
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
    return (await shoppingCartPage.productItemsList.getProductItemByName(name)).removeIcon.click();
});

// When(/^a user waits until the item disappears from the cart$/, async () => {
//     return expect(shoppingCartPage.productItemsList.productItemsWrapper.wdioElement).not.toBeDisplayed();
// });

When(/^a user waits until the item disappears from the cart$/, async () => {
    throw new Error(); //to check AfterStep hook with result.status === TestStepResultStatus.FAILED
});
