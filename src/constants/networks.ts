import { EthyleneNetwork } from "ethylene/types/app";
import AuroraImage from "assets/images/tokens/aurora.png";
import { Network } from "types/network";
import AVALANCHE_IMAGE from "assets/images/networks/avalanche.png";
import BNB_IMAGE from "assets/images/networks/bnb.png";
import ETHEREUM_IMAGE from "assets/images/networks/ethereum.svg";
import POLYGON_IMAGE from "assets/images/networks/polygon.png";
import ARBITRUM_IMAGE from "assets/images/networks/arbitrum.png";
import OPTIMISM_IMAGE from "assets/images/networks/optimism.png";
import FANTOM_IMAGE from "assets/images/networks/phantom.png";

export const GOERLI: EthyleneNetwork = {
  rpcUrls: ["https://rpc.goerli.mudit.blog/"],
  chainId: "0x5",
  name: "Goerly Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
};

export const AURORA: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Aurora",
  nativeCurrency: {
    decimals: 18,
    name: "ADTX",
    symbol: "",
  },
  imageUrl: AuroraImage,
};

export const POLYGON: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Polygon",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "",
  },
  imageUrl: POLYGON_IMAGE,
};

export const AVALANCHE: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Avalance",
  nativeCurrency: {
    decimals: 18,
    name: "AVAX",
    symbol: "",
  },
  imageUrl: AVALANCHE_IMAGE,
};

export const BNB: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "BNB",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "",
  },
  imageUrl: BNB_IMAGE,
};

export const OPTIMISM: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Optimism",
  nativeCurrency: {
    decimals: 18,
    name: "OP",
    symbol: "",
  },
  imageUrl: OPTIMISM_IMAGE,
};

export const FANTOM: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Fantom",
  nativeCurrency: {
    decimals: 18,
    name: "FTM",
    symbol: "",
  },
  imageUrl: FANTOM_IMAGE,
};

export const ARBITRUM: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Arbitrum",
  nativeCurrency: {
    decimals: 18,
    name: "AETH",
    symbol: "",
  },
  imageUrl: ARBITRUM_IMAGE,
};

export const ETHEREUM: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Ethereum",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "",
  },
  imageUrl: ETHEREUM_IMAGE,
};
