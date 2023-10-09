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

export const otsInfo = {
  getInviterInfos: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    inviter?: string,
    block?: number,
  ) => {
    const inviterInfosQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $inviter: String, $block: Int) {
        inviterInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, ${block ? `block: { number: $block },` : ``}
          where: {${inviter ? `inviter: $inviter,` : ``}}
        ) {
          inviter
          usersLength
          nftsLength
          nftsPower
        }
      }
    `;

    return await client.query({
      query: gql(inviterInfosQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        block: block,
        inviter: inviter,
      },
    });
  },
}