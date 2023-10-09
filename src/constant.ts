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
      Guild: '0x8AfAf3D506d78836E7aC798fd777852B35df8F0F',
    }
  } else {
    return {
      Guild: '0x331d4647A3DBF8468Edb9dA7E143A78A4D102389',
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
      chainId: '0xaa36a7',
      chainName: 'Sepolia-Testnet',
      rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/cb_rZmR500cF6qRkHuPCnK53kD7KXt1u']
    };
  }
};