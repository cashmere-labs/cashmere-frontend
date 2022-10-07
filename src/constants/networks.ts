import ARBITRUM_IMAGE from "assets/images/networks/arbitrum.png";
import AVALANCHE_IMAGE from "assets/images/networks/avalanche.png";
import BNB_IMAGE from "assets/images/networks/bnb.png";
import ETHEREUM_IMAGE from "assets/images/networks/ethereum.svg";
import OPTIMISM_IMAGE from "assets/images/networks/optimism.png";
import FANTOM_IMAGE from "assets/images/networks/phantom.png";
import POLYGON_IMAGE from "assets/images/networks/polygon.png";
import AuroraImage from "assets/images/tokens/aurora.png";
import { EthyleneNetwork } from "ethylene/types/app";
import { Network } from "types/network";
import { NetworkTypes } from "ui/NetworkBadge/utils";

export const GOERLI: EthyleneNetwork = {
  chainId: "0x5",
  name: "Goerly Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: ["https://rpc.goerli.mudit.blog/"],
};

export const AURORA: Network = {
  chainId: "",
  imageUrl: AuroraImage,
  name: "Aurora",
  nativeCurrency: {
    decimals: 18,
    name: "ADTX",
    symbol: "",
  },
  rpcUrls: [""],
};

export const POLYGON: Network = {
  chainId: "",
  imageUrl: POLYGON_IMAGE,
  name: "Polygon",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "",
  },
  rpcUrls: [""],
};

export const AVALANCHE: Network = {
  chainId: "",
  imageUrl: AVALANCHE_IMAGE,
  name: "Avalance",
  nativeCurrency: {
    decimals: 18,
    name: "AVAX",
    symbol: "",
  },
  rpcUrls: [""],
};

export const BNB: Network = {
  chainId: "",
  imageUrl: BNB_IMAGE,
  name: "BNB",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "",
  },
  rpcUrls: [""],
};

export const OPTIMISM: Network = {
  chainId: "",
  imageUrl: OPTIMISM_IMAGE,
  name: "Optimism",
  nativeCurrency: {
    decimals: 18,
    name: "OP",
    symbol: "",
  },
  rpcUrls: [""],
};

export const FANTOM: Network = {
  chainId: "",
  imageUrl: FANTOM_IMAGE,
  name: "Fantom",
  nativeCurrency: {
    decimals: 18,
    name: "FTM",
    symbol: "",
  },
  rpcUrls: [""],
};

export const ARBITRUM: Network = {
  chainId: "",
  imageUrl: ARBITRUM_IMAGE,
  name: "Arbitrum",
  nativeCurrency: {
    decimals: 18,
    name: "AETH",
    symbol: "",
  },
  rpcUrls: [""],
};

export const ETHEREUM: Network = {
  chainId: "",
  imageUrl: ETHEREUM_IMAGE,
  name: "Ethereum",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "",
  },
  rpcUrls: [""],
};

export const networkTypes = [
  NetworkTypes.ARBITRUM,
  NetworkTypes.AVALANCE,
  NetworkTypes.BNB,
  NetworkTypes.ETHEREUM,
  NetworkTypes.FANTOM,
  NetworkTypes.OPTIMISM,
  NetworkTypes.POLYGON,
];
