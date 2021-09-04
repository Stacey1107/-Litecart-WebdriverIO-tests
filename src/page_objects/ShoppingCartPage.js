class ShoppingCartPage {
    
    getItemDetails(quantity, color) {
        return $(`//*[@data-quantity="${quantity}" and @data-name="${color} Duck"]`);
    }

    get removeIcon () {
        return $('//button[@name="remove_cart_item"]');
    }
}

export default new ShoppingCartPage();