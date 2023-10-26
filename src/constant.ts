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

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      Guild: '0xd2629D07591877b4a0bd8928CE095F152829419b',
      OTUniverseActive: '0xF9549764396247a447CA903D6787f1aF3De5B497',
    }
  } else {
    return {
      Guild: '0x331d4647A3DBF8468Edb9dA7E143A78A4D102389',
      OTUniverseActive: '0x34Cc55580b2573bEC0d11AFec2dA8Abb5538b46D',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x1',
      chainName: 'Ethereum-Mainnet',
      rpcUrls: ['https://web3.mytokenpocket.vip']
    };
  } else {
    return {
      chainId: '0x61',
      chainName: 'BSC-Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
      // chainId: '0xaa36a7',
      // chainName: 'Sepolia-Testnet',
      // rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/cb_rZmR500cF6qRkHuPCnK53kD7KXt1u']
    };
  }
};