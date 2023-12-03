import { faker } from '@faker-js/faker';
import moment from 'moment/moment';
import { v4 } from 'uuid';

export const mount = (rootEl) => {
  const title = `<h1>Cart container ${v4()}</h1>`
  const date = `<p>${moment()}</p>`
  const cartText = `<div>You have ${faker.number.int({ min: 0, max: 10 })} items in your cart</div>`;
  const cartContainer = `<div>${title}${date}${cartText}</div>`;

  rootEl.innerHTML = cartContainer;
}

if (process.env.NODE_ENV === 'development') {
  const rootEl = document.querySelector('#dev-cart');

  // running in isolation
  if (rootEl) {
    mount(rootEl);
  }
}
