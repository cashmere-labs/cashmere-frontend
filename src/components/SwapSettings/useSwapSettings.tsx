import { useState } from "react";

export type SwapSlippagePercent = string;
export type SwapWithdrawalOrderTokenCondition = boolean;
export type SwapDeadline = string; // seconds

export type SwapSettings = Readonly<{
  swapSlippage: SwapSlippagePercent;
  setSwapSlippage: (to: SwapSlippagePercent) => void;
  withdrawSlippage: SwapSlippagePercent;
  setWithdrawSlippage: (to: string) => void;
  withDrawInOtherTokens: SwapWithdrawalOrderTokenCondition;
  setWithDrawInOtherTokens: (to: SwapWithdrawalOrderTokenCondition) => void;
  deadline: string;
  setDeadline: (to: string) => void;
}>;

/**
 * @dev Hook used to get swap data and mutators
 */
export const useSwapSettings = (): SwapSettings => {
  const [swapSlippage, setSwapSlippage] = useState<SwapSlippagePercent>("0.5");
  const [withdrawSlippage, setWithdrawSlippage] = useState<string>("0.5");
  const [withDrawInOtherTokens, setWithDrawInOtherTokens] =
    useState<SwapWithdrawalOrderTokenCondition>(false);
  const [deadline, setDeadline] = useState<SwapDeadline>("60");

  return {
    swapSlippage,
    setSwapSlippage,
    withdrawSlippage,
    setWithdrawSlippage,
    withDrawInOtherTokens,
    setWithDrawInOtherTokens,
    deadline,
    setDeadline,
  };
};
