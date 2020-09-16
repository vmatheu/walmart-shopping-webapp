import { debbug } from 'core/services/Logger';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';

export const getProductById = (productId) => {
  debbug(`product id for get endpoint is ${productId}`);
  debbug(`Url calling is ${PRODUCT_SERVICE_ENDPOINT}`);

  return [];
};

export default { getProductById };
