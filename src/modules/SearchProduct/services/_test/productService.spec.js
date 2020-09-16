import productService from '../productService';

describe('ProductService ', () => {
  it('should be return object array when calling getProductById', () => {
    const result = productService.getProductById(1);
    expect(result).toEqual([]);
  });
});
