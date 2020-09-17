import { findProductBySearch } from '../productService';

describe('ProductService ', () => {
  it('should be return object when calling getProductById', () => {
    const result = findProductBySearch('1');
    expect(result).not.toBeNull();
  });
});
