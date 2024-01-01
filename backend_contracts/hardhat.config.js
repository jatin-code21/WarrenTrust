require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.9",
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			blockConfirmations: 1,
		},
		sepolia: {
			chainId: 11155111, // Correct chain ID for Sepolia
			url: "https://sepolia.infura.io/v3/9281040f1b714887b1894d7136858978", // Reliable public RPC endpoint
			accounts: [PRIVATE_KEY],
			blockConfirmations: 6, // Adjust based on network conditions
		  },
		localhost: {
			url: "http://127.0.0.1:8545/",
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
	},
};
