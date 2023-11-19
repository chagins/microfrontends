import { mount as productsMount } from 'products/ProductsIndex';
import 'cart/CartShow';

console.log('Container');

productsMount(document.querySelector('#products-root'));