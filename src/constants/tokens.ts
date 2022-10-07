import AvaxImage from "assets/images/tokens/avax.png";
import DaiImage from "assets/images/tokens/dai.png";
import EtherImage from "assets/images/tokens/ethereum.svg";
import MaticImage from "assets/images/tokens/polygon.png";
import TetherusImage from "assets/images/tokens/tetherus.png";
import UsdcImage from "assets/pool/usdc.png";
import { Token } from "types/token";

export const Dai = new Token({
  address: "",
  decimal: 18,
  imageUrl: DaiImage,
  name: "DAI",
});

export const Tetherus = new Token({
  address: "",
  decimal: 18,
  imageUrl: TetherusImage,
  name: "USDT",
});

export const Matic = new Token({
  address: "",
  decimal: 18,
  imageUrl: MaticImage,
  name: "MATIC",
});

export const Avax = new Token({
  address: "",
  decimal: 18,
  imageUrl: AvaxImage,
  name: "AVAX",
});

export const Ether = new Token({
  address: "",
  decimal: 18,
  imageUrl: EtherImage,
  name: "ETH",
});

export const Usdc = new Token({
  address: "",
  decimal: 18,
  imageUrl: UsdcImage,
  name: "USDC",
});
