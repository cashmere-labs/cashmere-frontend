import { EthyleneNetwork } from "ethylene/types/app";
import AuroraImage from "assets/images/tokens/aurora.png";
import PolygonImage from "assets/images/tokens/polygon.png";
import { Network } from "types/network";

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

export const Aurora: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Aurora",
  nativeCurrency: {
    decimals: 18,
    name: "",
    symbol: "",
  },
  imageUrl: AuroraImage,
};

export const Polygon: Network = {
  rpcUrls: [""],
  chainId: "",
  name: "Polygon",
  nativeCurrency: {
    decimals: 18,
    name: "",
    symbol: "",
  },
  imageUrl: PolygonImage,
};
