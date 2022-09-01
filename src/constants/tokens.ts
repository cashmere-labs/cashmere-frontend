import DaiImage from "assets/images/tokens/dai.png";
import TetherusImage from "assets/images/tokens/tetherus.png";
import UsdcImage from "assets/pool/usdc.png";
import { Token } from "types/token";

export const Dai = new Token({
  name: "Dai",
  decimal: 18,
  address: "",
  imageUrl: DaiImage,
});

export const Tetherus = new Token({
  name: "USDT",
  decimal: 18,
  address: "",
  imageUrl: TetherusImage,
});

export const Usdc = new Token({
  name: "USDC",
  decimal: 18,
  address: "",
  imageUrl: UsdcImage,
});
