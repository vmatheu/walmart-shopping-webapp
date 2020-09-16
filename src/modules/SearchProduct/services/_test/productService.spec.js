import { getProductById } from '../productService';

describe('ProductService ', () => {
  it('should be return object when calling getProductById', () => {
    const result = getProductById(1);
    expect(result).not.toBeNull();
  });
});
