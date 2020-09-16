import React from 'react';
import productService from './services/productService';
import Logger from 'core/services/Logger';

export const onChange = async (search) => {
  if((/^([0-9,a-z,A-Z]){1,}$/.test(search))) {
    Logger.debbug(`search init for ${search}`);
    const response = productService.getProductById(search);
  }
};

export const SearchProduct = () => (
  <div className="container">
    <div className="row col-sm-12 col-md-5 ">
      <p>Ingresar busqueda de Productos</p>
    </div>
    <div className="row col-sm-12 col-md-5">
      <input
        id="inputSearchId"
        className="form-control"
        style={{ width: '100%' }}
        onChange={() => onChange(inputSearchId.value)}
      />
    </div>
    <div className="container" style={{ marginTop: '20px' }} />
  </div>
);

export default { SearchProduct, onChange };
