import DaiImage from "assets/images/tokens/dai.png";
import TetherusImage from "assets/images/tokens/tetherus.png";
import UsdcImage from "assets/pool/usdc.png";
import { Token } from "types/token";

export const Dai = new Token({
  address: "",
  decimal: 18,
  imageUrl: DaiImage,
  name: "Dai",
});

export const Tetherus = new Token({
  address: "",
  decimal: 18,
  imageUrl: TetherusImage,
  name: "USDT",
});

export const Usdc = new Token({
  address: "",
  decimal: 18,
  imageUrl: UsdcImage,
  name: "USDC",
});
