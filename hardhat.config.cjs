require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    celoSepolia: {
      url: "https://forno.celo-sepolia.celo-testnet.org/",
      accounts: [PRIVATE_KEY],
      chainId: 11142220
    }
  }
};