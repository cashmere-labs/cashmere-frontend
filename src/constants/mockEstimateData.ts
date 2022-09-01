import { EstimateMapping } from "components/Modals/GasEstimatorModal/GasEstimatorModal";
import {
  ARBITRUM,
  AVALANCHE,
  BNB,
  ETHEREUM,
  FANTOM,
  OPTIMISM,
  POLYGON,
} from "constants/networks";
import { Network } from "types/network";

export const mockEstimateNetworks = [
  ETHEREUM,
  BNB,
  AVALANCHE,
  OPTIMISM,
  POLYGON,
  ARBITRUM,
  FANTOM,
];

export const getMockEstimations = (): EstimateMapping => {
  const mockEstimations: EstimateMapping = new Map();
  mockEstimateNetworks.forEach((network) => {
    const itemMap = new Map();

    for (let i = 0; i < mockEstimateNetworks.length; i++) {
      const item = mockEstimateNetworks[i];
      itemMap.set(item, {
        native: `0.0620 ${item.nativeCurrency?.name}`,
        usd: "$0.0620",
      });
      mockEstimations.set(network, itemMap);
    }
  });

  return mockEstimations;
};
