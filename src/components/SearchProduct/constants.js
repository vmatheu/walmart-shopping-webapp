export const PRODUCT_SERVICE_ENDPOINT = {
  development: {
    url: 'https://walmark-api-shopping.herokuapp.com/api/walmart/v1/product/filter/',
  },
  production: {
    url: 'https://walmark-api-shopping.herokuapp.com/api/walmart/v1/product/filter/',
  },
  funtional_test: {
    url: '/api/walmart/v1/product/filter/',
  },
};

export default {
  PRODUCT_SERVICE_ENDPOINT,
};
