import DaiImage from "assets/images/tokens/dai.png";
import TetherusImage from "assets/images/tokens/tetherus.png";
import UsdcImage from "assets/pool/usdc.png";
import QUESTIONMARK from "assets/images/networks/question.png";

export enum TokenTypes {
  "DAI",
  "USDT",
  "USDC",
}

export const getBadgeProps = (label: TokenTypes | string) => {
  switch (label) {
    case TokenTypes.DAI: {
      return {
        icon: DaiImage,
        name: "DAI",
        text: "#B57400",
        bg: "#F6E5CA",
      };
    }
    case TokenTypes.USDT: {
      return {
        icon: TetherusImage,
        name: "USDT",
        text: "#27bd8c",
        bg: "#c9f4e6",
      };
    }
    case TokenTypes.USDC: {
      return {
        icon: UsdcImage,
        name: "USDC",
        text: "#29A17A",
        bg: "#d8dfff",
      };
    }
    default:
      return {
        icon: QUESTIONMARK,
        name: "Unknown",
        text: "#2c374b",
        bg: "#d6f4ff",
      };
  }
};
