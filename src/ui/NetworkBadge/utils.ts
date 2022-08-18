import AVALANCHE from "assets/images/networks/avalanche.png";
import BNB from "assets/images/networks/bnb.png";
import ETHEREUM from "assets/images/networks/ethereum.svg";
import POLYGON from "assets/images/networks/polygon.png";
import ARBITRUM from "assets/images/networks/arbitrum.png";
import OPTIMISM from "assets/images/networks/optimism.png";
import FANTOM from "assets/images/networks/phantom.png";
import QUESTIONMARK from "assets/images/networks/question.png";

export enum NetworkTypes {
  "AVALANCE",
  "BNB",
  "ETHEREUM",
  "POLYGON",
  "ARBITRUM",
  "OPTIMISM",
  "FANTOM",
}

export const getBadgeProps = (label: NetworkTypes | string) => {
  switch (label) {
    case NetworkTypes.AVALANCE: {
      return {
        icon: AVALANCHE,
        name: "Avalanche",
        text: "#e84142",
        bg: "#ffd9da",
      };
    }
    case NetworkTypes.BNB: {
      return {
        icon: BNB,
        name: "BNBChain",
        text: "#282b32",
        bg: "#ffe29b",
      };
    }
    case NetworkTypes.ETHEREUM: {
      return {
        icon: ETHEREUM,
        name: "Ethereum",
        text: "#627eea",
        bg: "#d8dfff",
      };
    }
    case NetworkTypes.POLYGON: {
      return {
        icon: POLYGON,
        name: "Polygon",
        text: "#8247e5",
        bg: "#f0e6ff",
      };
    }
    case NetworkTypes.ARBITRUM: {
      return {
        icon: ARBITRUM,
        name: "Arbitrum",
        text: "#2c374b",
        bg: "#e0f1ff",
      };
    }
    case NetworkTypes.OPTIMISM: {
      return {
        icon: OPTIMISM,
        name: "Optimism",
        text: "#fc0d20",
        bg: "#ffd6d9",
      };
    }
    case NetworkTypes.FANTOM: {
      return {
        icon: FANTOM,
        name: "Fantom",
        text: "#129cce",
        bg: "#d6f4ff",
      };
    }
    default:
      return {
        icon: QUESTIONMARK,
        name: label,
        text: "#2c374b",
        bg: "#d6f4ff",
      };
  }
};
