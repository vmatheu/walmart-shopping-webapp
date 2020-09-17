import React, { useState } from 'react';
import ProductList from 'components/ProductList';
import Loading from 'components/Loading';
import productService from './services/productService';
import './style.css';

export const onChange = async (search, setProducts) => {
  setProducts({ products: [], loading: true });
  if ((/^([0-9,a-z,A-Z]){1,}$/.test(search))) {
    const data = await productService.findProductBySearch(search);
    setProducts({ products: data, loading: false });
  } else {
    setProducts({ products: [], loading: false });
  }
};

export const SearchProduct = () => {
  const [data, setProducts] = useState({ products: [], loading: false });
  return (<div className="container">
    <Loading loading={data.loading} />

    <div className="row col-sm-12 col-md-5 ">
      <p>Ingresar busqueda de Productos</p>
    </div>
    <div className="row col-sm-12 col-md-5">
      <input
        id="inputSearchId"
        className="form-control walmark-input-search"
        onChange={() => onChange(inputSearchId.value, setProducts)}
      />
    </div>
    <div className="container walmark-container-productList">
      <ProductList products={data.products} />
    </div>
  </div>);
};

export default { SearchProduct, onChange };
