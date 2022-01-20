require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privatekey = fs.readFileSync(".secret").toString();
const projectId = "962e4c43f8b54a6ca04b12fc6108387a"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337 
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privatekey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privatekey]
    }
  },
  solidity: "0.8.4",
};
