export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      OTS: '0x13251cE31ac3330067C3acAf4Bb3339dfF765C76',
    }
  } else {
    return {
      OTS: '0x9c3fe1ace60f02f868c33bd4548983fe6539b7ef',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x1',
      chainName: 'ETH-Mainnet',
      rpcUrls: ['https://eth-mainnet.g.alchemy.com/v2/Z_xFFXUwd05vfeJOS74UETGJVEd2A65Y']
    };
  } else {
    return {
      chainId: '0x5',
      chainName: 'Goerli-Testnet',
      rpcUrls: ['https://eth-goerli.g.alchemy.com/v2/dDCf0lfjfq1HeLlGAK3-u8r7hRhrJrEY']
    };
  }
};