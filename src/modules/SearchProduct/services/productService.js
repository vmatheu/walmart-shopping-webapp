import Logger from 'core/services/Logger';
import { PRODUCT_SERVICE_ENDPOINT } from '../constants';

const getProductById = (productId) => {
  Logger.debbug(`product id for get endpoint is ${productId}`);
  Logger.debbug(`Url calling is ${PRODUCT_SERVICE_ENDPOINT}`);

  return [];
};

export default { getProductById };
