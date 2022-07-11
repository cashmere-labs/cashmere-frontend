import { Token } from "types/token";
import AuroraImage from "assets/images/tokens/aurora.png";
import DaiImage from "assets/images/tokens/dai.png";
import PolygonImage from "assets/images/tokens/polygon.png";
import TetherusImage from "assets/images/tokens/tetherus.png";

export const Aurora = new Token({
  name: "Aurora",
  decimal: 18,
  address: "",
  imageUrl: AuroraImage,
});

export const Polygon = new Token({
  name: "Polygon",
  decimal: 18,
  address: "",
  imageUrl: PolygonImage,
});

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
