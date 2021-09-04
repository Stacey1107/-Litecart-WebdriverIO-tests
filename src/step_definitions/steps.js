import {Given, When, Then} from '@cucumber/cucumber'
import homePage from '../page_objects/HomePage.js'
import headerPage from '../page_objects/HeaderPage.js'
import categoriesPage from '../page_objects/CategoriesPage.js'
import subcategoriesPage from '../page_objects/SubcategoriesPage.js'
import {checkElementIsVisible, checkElementsIsNotPresent} from '../helpers/element/checks.js'
import {getTableCellElement} from '../helpers/element/actions.js'
import shoppingCartPage from '../page_objects/ShoppingCartPage.js'


Given(/^a user is on LiteCart home page$/, async () => {
    await homePage.openWebsite();
});

When(/^a user selects Rubber Ducks category$/, async () => {
    await headerPage.selectCategory()
});

When(/^a user selects Rubber Ducks subcategory$/, async () => {
    await categoriesPage.getToSubcategory()
});

Then(/^a user should see the following duck types$/, async (table) => {
    let data = table.raw(); //[['Yellow'], ['Green']]
    for (const [arrElement] of data) {
        await checkElementIsVisible(subcategoriesPage.getDuck(arrElement));
    }
});

When(/^a user selects "(.*)" Duck in subcategory$/, async (duckColor) => {
    await subcategoriesPage.getDuck(duckColor).waitForClickable();
    await subcategoriesPage.getDuck(duckColor).click();
});

Then(/^a duck should have certain technical data$/, async (table) => {
    await subcategoriesPage.technicalDataTab.click();
    let data = table.raw(); //[['Body', 'Yellow'], ['Eyes', 'Black'], ['Beak', 'Orange'], ['Material', 'Plastic']]
    for (const [characteristic, characteristicValue] of data) {
        await checkElementIsVisible(getTableCellElement(characteristic));
        await checkElementIsVisible(getTableCellElement(characteristicValue));
    }
});

When(/^a user selects a duck of "(.*)" size$/, async (sizeValue) => {
    await subcategoriesPage.sizeDropdown.selectByVisibleText(sizeValue); 
});

When(/^a user specifies "(.*)" items of ducks$/, async (duckQuantity) => {
    await subcategoriesPage.quantityInput.clearValue();
    await subcategoriesPage.quantityInput.setValue(duckQuantity);
});

Then(/^a user adds ducks to a cart$/, async () => {
    await subcategoriesPage.addToCartButton.click();
});

When(/^a user waits until the ducks appear in the cart$/, async () => {
    await headerPage.cartCounter.waitForDisplayed({timeout:2000});
});

When(/^a user opens the cart$/, async () => {
    await headerPage.cartIcon.click();
});

Then(/^a user (should|should not) see "(.*)" "(.*)" duck items$/, async (condition, number, color) => {
    switch (condition) {
        case 'should':
            await checkElementIsVisible(shoppingCartPage.getItemDetails(number, color));
            break;
        case 'should not':
            await checkElementsIsNotPresent(shoppingCartPage.getItemDetails(number, color));
            break;
    }
});

When(/^a user deletes ducks from the cart$/, async () => {
    await shoppingCartPage.removeIcon.click();
    await browser.pause(3000);
});
