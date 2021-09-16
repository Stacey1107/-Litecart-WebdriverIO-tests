import { WebElement } from "../../po/elements/web-element";

export function getTableCellElement(text) {
    return new WebElement($(`td=${text}`));
};