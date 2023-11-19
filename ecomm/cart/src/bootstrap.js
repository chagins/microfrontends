import { faker } from '@faker-js/faker';
import moment from 'moment/moment';

const title = `<h1>Cart container</h1>`
const date = `<p>${moment()}</p>`
const cartText = `<div>You have ${faker.number.int({ min: 0, max: 10 })} items in your cart</div>`;
const cartContainer = `<div>${title}${date}${cartText}</div>`;

document.querySelector('#dev-cart').innerHTML = cartContainer;
