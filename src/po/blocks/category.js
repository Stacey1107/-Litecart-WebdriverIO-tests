import { logger } from "../../winstonLogger";
import { WebElement } from "../elements/web-element";

export class Category {
    constructor(wdioElement) {
        this.wdioElement = wdioElement;
    };

    getSubcategoryItem(name) {
        return new WebElement($(`[data-name="${name}"]`));
    };

    async getName() {
        logger.log('marrakesh', await new WebElement(this.wdioElement.$('a')).getText());
        return new WebElement(this.wdioElement.$('a')).getText();
    };

}