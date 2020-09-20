import React from 'react';
import { string, number, bool } from 'prop-types';
import './style.css';

const ProductCard =
  ({ id, description, priceHaveDiscount, price, priceWithOutDiscount, brand, image }) => (
    <div className="ard mb-4 shadow-sm walmark-product-card">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{description}</h4>
      </div>
      <div className="card-body">
        {priceHaveDiscount ?
          <div className="card-title pricing-card-title">
            <h3> ${price} <span className="walmark-product-card-discount">50%</span></h3>
            <h5 className="walmark-product-card-discount-price"> ${priceWithOutDiscount} </h5>
          </div>
        : <h3 className="card-title pricing-card-title">${price}</h3>}
        <img alt={`imagen del producto ${description}`} src={`http://${image}`} />
        <h6>{brand}</h6>
      </div>
    </div>
);

ProductCard.propTypes = {
  id: number.isRequired,
  description: string.isRequired,
  priceHaveDiscount: bool.isRequired,
  price: number.isRequired,
  priceWithOutDiscount: number.isRequired,
  brand: string.isRequired,
  image: string.isRequired,
};

export default ProductCard;
