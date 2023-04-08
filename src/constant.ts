export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      OTS: '',
    }
  } else {
    return {
      OTS: '0x9525804e33dEB5291C2EF2C1cf44f386d5Ba3eB4',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x1',
      chainName: 'ETH-Mainnet',
      rpcUrls: ['https://mainnet.infura.io/v3/bf8dec918d984e83b993411ee2ab6f00']
    };
  } else {
    return {
      chainId: '0x5',
      chainName: 'Goerli-Testnet',
      rpcUrls: ['https://goerli.infura.io/v3/bf8dec918d984e83b993411ee2ab6f00']
    };
  }
};