import { IS_PROD } from "ethylene/constants";

export const formatValue = (value: string, decimals: number = 6) => {
  try {
    const [int, decimal] = value?.split(".");
    if (decimal) {
      const returned = [int, decimal.substring(0, decimals)].join(".");
      return returned;
    } else {
      return int;
    }
  } catch (err) {
    if (!IS_PROD) {
      console.log(err);
    }
    return "";
  }
};
