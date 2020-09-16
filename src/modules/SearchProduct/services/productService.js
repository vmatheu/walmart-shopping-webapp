import { debbug } from 'core/services/Logger';
import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';

export const getProductById = async (productId) => {
  debbug(`product id for get endpoint is ${productId}`);
  debbug(`Url calling is ${PRODUCT_SERVICE_ENDPOINT}`);
  const response = await axios.get(`${PRODUCT_SERVICE_ENDPOINT}${productId}`);
  return response.data;
};

export default { getProductById };
