require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    bscTestnet: {
      url: "https://bsc-testnet.infura.io/v3/211b4f5ca60a434c9552f59a8da1de25",
      accounts: [
        process.env.PRIVATE_KEY1,
        process.env.PRIVATE_KEY2,
      ],
      chainId: 97,
    },
  },
};

//https://data-seed-prebsc-1-s1.bnbchain.org:8545
