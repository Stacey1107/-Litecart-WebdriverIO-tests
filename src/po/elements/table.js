import {WebElement} from './web-element.js';

export class Table {
    constructor(wdioElement) {
        this.wdioElement = wdioElement; //целая таблица
    };

    getTableCellElement(text) {
        return new WebElement(this.wdioElement.$(`td=${text}`));
    };
}