import { Button } from '../elements/button.js';

export class Header {

    get cartIcon() {
        return new Button($('div#cart'));
    };

    get cartCounter() {
        return $('[class="badge quantity"]');
    };
}