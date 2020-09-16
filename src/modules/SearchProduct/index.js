import React, { useState } from 'react';
import ProductList from 'modules/ProductList';
import Logger from 'core/services/Logger';
import productService from './services/productService';

export const onChange = async (search, setProducts) => {
  setProducts({ products: [] });
  if ((/^([0-9,a-z,A-Z]){1,}$/.test(search))) {
    Logger.debbug(`search init for ${search}`);
    const data = await productService.getProductById(search);
    setProducts({ products: [data] });
  }
};

export const SearchProduct = () => {
  const [data, setProducts] = useState({ products: [] });

  return (<div className="container">
    <div className="row col-sm-12 col-md-5 ">
      <p>Ingresar busqueda de Productos</p>
    </div>
    <div className="row col-sm-12 col-md-5">
      <input
        id="inputSearchId"
        className="form-control"
        style={{ width: '100%' }}
        onChange={() => onChange(inputSearchId.value, setProducts)}
      />
    </div>
    <div className="container" style={{ marginTop: '20px' }}>
      <ProductList products={data.products} />
    </div>
  </div>);
};

export default { SearchProduct, onChange };
