import { Token } from "types/token";
import DaiImage from "assets/images/tokens/dai.png";
import TetherusImage from "assets/images/tokens/tetherus.png";

export const Dai = new Token({
  name: "Dai",
  decimal: 18,
  address: "",
  imageUrl: DaiImage,
});

export const Tetherus = new Token({
  name: "Tetherus",
  decimal: 18,
  address: "",
  imageUrl: TetherusImage,
});
