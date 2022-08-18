import { useDispatch } from "react-redux";
import { useTypedSelector } from "store";
import { setNetwork } from "store/slicers/network";
import { NetworkTypes } from "ui/NetworkBadge/utils";

export const useNetwork = (): NetworkTypes | string => {
  const { network } = useTypedSelector((state) => state.network);
  return network;
};

export const useSetNetwork = () => {
  const dispatch = useDispatch();
  return (network: NetworkTypes | string) => {
    dispatch(setNetwork(network));
  };
};
