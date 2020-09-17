import { debbug } from 'core/services/Logger';
import axios from 'axios';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';

export const findProductBySearch = async (search) => {
  debbug(`product id for get endpoint is ${search}`);
  debbug(`Url calling is ${PRODUCT_SERVICE_ENDPOINT}`);
  const response = await axios.get(`${PRODUCT_SERVICE_ENDPOINT}${search}`);
  return response.data;
};

export default { findProductBySearch };
