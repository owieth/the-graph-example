import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.MUMBAI_PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_KEY!,
    },
  },
};

export default config;
