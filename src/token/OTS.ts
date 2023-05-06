import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import { OTS__factory } from '../../typechain-types';
import { rpcProvider } from '../utils';
import { token } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/fun-topia/outer-spaceship',
  cache: new InMemoryCache(),
});

export function ots() {
  return OTS__factory.connect(token().OTS, rpcProvider);
}

export const otsInfo = {
  getOtsCountByOwners: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    owner?: string,
    block?: string,
  ) => {
    const otsCountByOwnersQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $owner: String, $block: Int) {
        otsCountByOwners(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, ${block ? `block: { number: $block },` : ``}
          where: {${owner ? `owner: $owner,` : ``}}
        ) {
          owner
          total
          l4
          l5
          golden
        }
      }
    `;

    return await client.query({
      query: gql(otsCountByOwnersQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        owner: owner,
        block: block,
      },
    });
  },

  getOtsCounts: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    block?: string,
  ) => {
    const otsCountsQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $block: Int) {
        otsCounts(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, ${block ? `block: { number: $block },` : ``}
        ) {
          total
          l4
          l5
          golden
        }
      }
    `;

    return await client.query({
      query: gql(otsCountsQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        block: block,
      },
    });
  },
}