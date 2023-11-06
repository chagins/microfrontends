import { faker } from '@faker-js/faker';

const cartText = `<div>You have ${faker.number.int({ min: 0, max: 10 })} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;