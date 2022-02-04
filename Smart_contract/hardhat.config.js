//https://eth-ropsten.alchemyapi.io/v2/OzG8HNPfmRXFCgew9m9_EIx-kn4qvd9S
//f7b6e5dabb65c3b92aa09d3d10d8b3745d89a4cbef6358743f3dadb57230c1a4
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/OzG8HNPfmRXFCgew9m9_EIx-kn4qvd9S',
      accounts: ['f7b6e5dabb65c3b92aa09d3d10d8b3745d89a4cbef6358743f3dadb57230c1a4'],
    },
  },
};