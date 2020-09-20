import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';


export const findProductBySearch = async (search) => {

  const data = await axios.get(`${PRODUCT_SERVICE_ENDPOINT}${search}`)
    .then(response => (response.data))
    .catch(error => ([]));

  return data;
};

export default { findProductBySearch };
