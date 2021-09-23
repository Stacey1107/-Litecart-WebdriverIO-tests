import { Button } from '../elements/button.js';
import { WebElement } from '../elements/web-element.js'

export class Header {

    get cartIcon() {
        return new Button($('div#cart'));
    };

    get cartCounter() {
        return new WebElement($('.badge.quantity'));
    };
}