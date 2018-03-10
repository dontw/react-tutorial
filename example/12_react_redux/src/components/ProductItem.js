import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
    />
    <button
      className="btn btn-primary"
      onClick={onAddToCartClicked}
      disabled={product.inventory === 0}
    >
      {product.inventory === 0 ? '售完' : '購買'}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCartClicked: PropTypes.func,
};
export default ProductItem;
