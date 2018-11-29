export interface CacheNode<K> {
  value: K;
  next?: CacheNode<K>;
}

export class LRUCache<K,V> {
  readonly cache: Map<K, V>;
  readonly limit: number;
  oldest?: CacheNode<K>;

  constructor(limit: number = 100) {
    this.cache = new Map<K, V>();
    this.limit = limit;
  }

  set(key: K, value: V) {
    if (this.cache.size >= this.limit && this.oldest) {
      this.cache.delete(this.oldest.value);
      this.oldest = this.oldest.next;
    }

    if (!this.oldest) {
      this.oldest = {
        value: key
      };
    } else {
      let current = this.oldest;
      let newest: CacheNode<K> | undefined;

      while (current.next) {
        current = current.next;
        if (current) {
          newest = current;
        }
      }
      
      if (newest) {
        newest.next = {
          value: key
        };
      }
      if (!this.oldest.next) {
        this.oldest.next = {
          value: key
        };  
      }
    }

    this.cache.set(key, value);
  }

  get(key: K): V | undefined {
    return this.cache.get(key);
  }

  keys(): K[] {
    return Array.from(this.cache.keys())
  }

  values(): V[] {
    return Array.from(this.cache.values());
  }
}