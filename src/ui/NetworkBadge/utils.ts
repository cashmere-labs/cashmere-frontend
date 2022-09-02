import ARBITRUM_IMG from "assets/images/networks/arbitrum.png";
import AVALANCHE_IMG from "assets/images/networks/avalanche.png";
import BNB_IMG from "assets/images/networks/bnb.png";
import ETHEREUM_IMG from "assets/images/networks/ethereum.svg";
import OPTIMISM_IMG from "assets/images/networks/optimism.png";
import FANTOM_IMG from "assets/images/networks/phantom.png";
import POLYGON_IMG from "assets/images/networks/polygon.png";
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
        bg: "#ffd9da",
        hoverBg: "#f7c1c3",
        icon: AVALANCHE_IMG,
        name: "Avalanche",
        text: "#e84142",
      };
    }
    case NetworkTypes.BNB: {
      return {
        bg: "#ffe29b",
        hoverBg: "#fada8c",
        icon: BNB_IMG,
        name: "BNBChain",
        text: "#282b32",
      };
    }
    case NetworkTypes.ETHEREUM: {
      return {
        bg: "#d8dfff",
        hoverBg: "#ccd5fc",
        icon: ETHEREUM_IMG,
        name: "Ethereum",
        text: "#627eea",
      };
    }
    case NetworkTypes.POLYGON: {
      return {
        bg: "#f0e6ff",
        hoverBg: "#e9dcfc",
        icon: POLYGON_IMG,
        name: "Polygon",
        text: "#8247e5",
      };
    }
    case NetworkTypes.ARBITRUM: {
      return {
        bg: "#e0f1ff",
        hoverBg: "#d9eeff",
        icon: ARBITRUM_IMG,
        name: "Arbitrum",
        text: "#2c374b",
      };
    }
    case NetworkTypes.OPTIMISM: {
      return {
        bg: "#ffd6d9",
        hoverBg: "#facace",
        icon: OPTIMISM_IMG,
        name: "Optimism",
        text: "#fc0d20",
      };
    }
    case NetworkTypes.FANTOM: {
      return {
        bg: "#d6f4ff",
        hoverBg: "#caeffc",
        icon: FANTOM_IMG,
        name: "Fantom",
        text: "#129cce",
      };
    }
    default:
      return {
        bg: "#d6f4ff",
        hoverBg: "#cff2ff",
        icon: QUESTIONMARK,
        name: label,
        text: "#2c374b",
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
