export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      OTS: '',
    }
  } else {
    return {
      OTS: '0x11f1735D87ED6d7118C55db5A5a85c4ECbeD9ECa',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x38',
      chainName: 'BSC-Mainnet',
      rpcUrls: ['https://bsc-dataseed3.ninicoin.io/']
    };
  } else {
    return {
      chainId: '0x61',
      chainName: 'BSC-Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
    };
  }
};