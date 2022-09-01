import { BigNumberish, ethers } from "ethers";
import { IS_PROD } from "ethylene/constants";

export const formatBalance = (
  balance: BigNumberish,
  decimals: number = 4,
  tokenDecimal = 18,
) => {
  if (!balance) {
    return "0";
  }

  try {
    const _balance = ethers.utils
      .formatUnits(balance as BigNumberish, tokenDecimal)
      .toString();

    const [int, decimal] = _balance.split(".");
    const returned = [int, decimal.substring(0, decimals)].join(".");
    return returned;
  } catch (err) {
    if (!IS_PROD) {
      console.log(err);
    }
  }
};
