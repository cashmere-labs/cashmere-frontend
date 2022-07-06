import { EthyleneNetwork } from "ethylene/types/app";

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
