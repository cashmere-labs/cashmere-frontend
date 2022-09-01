import {
  ARBITRUM,
  AVALANCHE,
  BNB,
  ETHEREUM,
  FANTOM,
  OPTIMISM,
  POLYGON,
} from "constants/networks";
import { NetworkTypes } from "ui/NetworkBadge/utils";

export const networkMap = new Map([
  [NetworkTypes.ARBITRUM, ARBITRUM],
  [NetworkTypes.AVALANCE, AVALANCHE],
  [NetworkTypes.ETHEREUM, ETHEREUM],
  [NetworkTypes.FANTOM, FANTOM],
  [NetworkTypes.POLYGON, POLYGON],
  [NetworkTypes.OPTIMISM, OPTIMISM],
  [NetworkTypes.BNB, BNB],
]);

export const getNetworkFromNetwork = (network: NetworkTypes) => {
  return networkMap.get(network);
};
