//https://eth-goerli.g.alchemy.com/v2/v0V9naOnX_H2gmL4v-ayPmQVzw0RlT87
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/v0V9naOnX_H2gmL4v-ayPmQVzw0RlT87',
      accounts: ['2c21f5861b5973b4b48d5c2b18514de666406cd9b8a7e4895c480755e14ee5da']

    }
  }
}