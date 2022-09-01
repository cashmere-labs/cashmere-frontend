import { BigNumber, ethers } from "ethers";
import { ERC20 } from "ethylene/constants";
import { useAccount } from "ethylene/hooks";
import { useEffect, useState } from "react";

export const useAllowance = (tokenAddress: string, contractAddress: string) => {
  const { auth, address, provider } = useAccount();
  const [allowance, setAllowance] = useState<BigNumber | null>(null);

  const tokenAllowance = async () => {
    if (!auth || !contractAddress) {
      return;
    }
    const _contract = new ethers.Contract(tokenAddress, ERC20, provider);
    const res = await _contract.allowance(address, contractAddress);
    setAllowance(res);
    return res;
  };

  useEffect(() => {
    if (!auth || !contractAddress) {
      return;
    }
    const fetch = async () => {
      await tokenAllowance();
    };
    fetch();
  }, [auth, contractAddress]);

  return {
    tokenAllowance,
    allowance,
    setAllowance,
  };
};
