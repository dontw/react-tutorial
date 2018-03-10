/**
 * Mocking client-server processing
 */
import products from './products.json';


export default {
  getProducts: () => new Promise((resolve) => {
    setTimeout(() => resolve(products), 100);
  }),

  buyProducts: () => new Promise((resolve) => {
    setTimeout(() => resolve(), 100);
  }),
};
