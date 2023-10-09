import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import { Guild__factory } from 'funtopia-core/typechain-types';
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/fun-topia/outer-guild',
  cache: new InMemoryCache(),
});

export function guild() {
  return Guild__factory.connect(contract().Guild, rpcProvider);
}