import { faker } from '@faker-js/faker';
import moment from 'moment/moment';

const title = `<h1>Products container</h1>`
const date = `<p>${moment()}</p>`
let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

const productsContainer = `<div>${title}${date}${products}</div>`;

document.querySelector('#dev-products').innerHTML = productsContainer;

