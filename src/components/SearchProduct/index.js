import React, { useState } from 'react';
import ProductList from 'components/ProductList';
import productService from './services/productService';

export const onChange = async (search, setProducts) => {
  setProducts({ products: [], loading: 'visible' });
  if ((/^([0-9,a-z,A-Z]){1,}$/.test(search))) {
    const data = await productService.findProductBySearch(search);
    setProducts({ products: data, loading: 'hidden' });
  } else {
    setProducts({ products: [], loading: 'hidden' });
  }
};

export const SearchProduct = () => {
  const [data, setProducts] = useState({ products: [], loading: 'hidden' });

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
