require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
ALCHEMY_API_KEY = process.env.GOERLI_API_KEY;
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ["0x92d01fc96da23dcebb3fd0d77f42acb72bd827698ee8aa706712125e28b9a2b8"],
    },
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
