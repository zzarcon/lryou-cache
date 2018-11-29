import LRUCache from '../src';

describe('LRUCache', () => {  
  it('should clear oldest value', () => {
    const cache = new LRUCache<string, number>(2);

    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);

    expect(cache.keys()).toEqual(['b', 'c'])
  });
});
