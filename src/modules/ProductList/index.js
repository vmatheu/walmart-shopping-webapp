import React from 'react';
import { arrayOf, object } from 'prop-types';

const ProductList = ({ products }) =>
     (
       <div className="card-deck mb-3 text-center">
         {products.map((product) => (
           <div key={product.id} className="ard mb-4 shadow-sm">
             <div className="card-header">
               <h4 className="my-0 font-weight-normal">{product.description}</h4>
             </div>

             <div className="card-body">
               <h1 className="card-title pricing-card-title">${product.price}</h1>
               <img alt={`imagen del producto ${product.description}`} src={`http://${product.image}`} />
             </div>
           </div>
            ))}
       </div>
   );


ProductList.propTypes = {
  products: arrayOf(object).isRequired,
};

export default ProductList;
