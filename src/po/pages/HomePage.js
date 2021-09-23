import { Header } from '../blocks/header.js';
import { Sidebar } from '../blocks/sidebar.js';
import { AddToCartForm } from '../blocks/addToCartForm.js';
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
    header = new Header();
    sidebar = new Sidebar();
    addToCartForm = new AddToCartForm();
}