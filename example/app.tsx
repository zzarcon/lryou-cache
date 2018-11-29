import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import LRUCache from '../src';
import {AppWrapper} from './styled';
export interface AppState {
  
}
const repoUrl = 'https://github.com/zzarcon/lryou-cache';

const cache = new LRUCache<string, number>(3);

cache.set('a', 1);
cache.set('b', 2);
cache.set('c', 3);
cache.set('d', 4);

console.log(cache.cache)

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
      </AppWrapper>
    )
  }
}