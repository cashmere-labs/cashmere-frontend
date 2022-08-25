import AVALANCHE_IMG from "assets/images/networks/avalanche.png";
import BNB_IMG from "assets/images/networks/bnb.png";
import ETHEREUM_IMG from "assets/images/networks/ethereum.svg";
import POLYGON_IMG from "assets/images/networks/polygon.png";
import ARBITRUM_IMG from "assets/images/networks/arbitrum.png";
import OPTIMISM_IMG from "assets/images/networks/optimism.png";
import FANTOM_IMG from "assets/images/networks/phantom.png";
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
        icon: AVALANCHE_IMG,
        name: "Avalanche",
        text: "#e84142",
        bg: "#ffd9da",
      };
    }
    case NetworkTypes.BNB: {
      return {
        icon: BNB_IMG,
        name: "BNBChain",
        text: "#282b32",
        bg: "#ffe29b",
      };
    }
    case NetworkTypes.ETHEREUM: {
      return {
        icon: ETHEREUM_IMG,
        name: "Ethereum",
        text: "#627eea",
        bg: "#d8dfff",
      };
    }
    case NetworkTypes.POLYGON: {
      return {
        icon: POLYGON_IMG,
        name: "Polygon",
        text: "#8247e5",
        bg: "#f0e6ff",
      };
    }
    case NetworkTypes.ARBITRUM: {
      return {
        icon: ARBITRUM_IMG,
        name: "Arbitrum",
        text: "#2c374b",
        bg: "#e0f1ff",
      };
    }
    case NetworkTypes.OPTIMISM: {
      return {
        icon: OPTIMISM_IMG,
        name: "Optimism",
        text: "#fc0d20",
        bg: "#ffd6d9",
      };
    }
    case NetworkTypes.FANTOM: {
      return {
        icon: FANTOM_IMG,
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

export const stringToBadgeType = (_str: string) => {
  const str = _str.toUpperCase();
  switch (str) {
    case "AVALANCE": {
      return NetworkTypes.AVALANCE;
    }
    case "ETHEREUM": {
      return NetworkTypes.ETHEREUM;
    }
    case "FANTOM": {
      return NetworkTypes.FANTOM;
    }
    case "BNB": {
      return NetworkTypes.BNB;
    }
    case "OPTIMISM": {
      return NetworkTypes.OPTIMISM;
    }
    case "ARBITRUM": {
      return NetworkTypes.ARBITRUM;
    }
    case "POLYGON": {
      return NetworkTypes.POLYGON;
    }
    default: {
      return _str;
    }
  }
};
