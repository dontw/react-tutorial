import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

const ProductsList = ({ products, addToCart }) => (
  <div>
    <h3>商品</h3>
    {
      products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />))
    }
  </div>
);
ProductsList.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default ProductsList;
