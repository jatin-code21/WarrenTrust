const networkConfig = {
	default: {
		name: "hardhat",
	},
	11155111: {
		name: "sepolia",
	},
	4: {
		name: "rinkeby",
	},
	1: {
		name: "mainnet",
	},
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
// const frontEndContractsFile = "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json"
// const frontEndAbiFile = "../nextjs-smartcontract-lottery-fcc/constants/abi.json"

module.exports = {
	networkConfig,
	developmentChains,
	VERIFICATION_BLOCK_CONFIRMATIONS,
	// frontEndContractsFile,
	// frontEndAbiFile,
};
