import React from 'react';
import { arrayOf, object } from 'prop-types';

const ProductList = ({ products }) => (
  <div className="card-deck mb-3 text-center">
    {products.map(product => (
      <div key={product.id} className="ard mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{product.description}</h4>
        </div>

        <div className="card-body">
          { product.priceHaveDiscount ?
            <p className="card-title pricing-card-title">
              <h3> ${product.price} <span style={{ color: 'red' }}>50%</span></h3>
              <h5 style={{ 'text-decoration': 'line-through', color: 'grey' }}> ${product.priceWithOutDiscount} </h5>
            </p>
          : <h3 className="card-title pricing-card-title">${product.price}</h3>}
          <img alt={`imagen del producto ${product.description}`} src={`http://${product.image}`} />
          <h6>{product.brand}</h6>
        </div>
      </div>
    ))}
  </div>
);

ProductList.propTypes = {
  products: arrayOf(object).isRequired,
};

export default ProductList;
