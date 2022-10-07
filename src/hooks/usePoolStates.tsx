import { useDispatch } from "react-redux";
import { useTypedSelector } from "store";
import { setPoolCount } from "store/slicers/pool";

export const usePoolStates = () => {
  const poolCount = useTypedSelector((state) => state.pool.poolCount);
  const dispatch = useDispatch();

  const increasePoolCount = () => {
    dispatch(setPoolCount(poolCount + 10));
  };

  const resetPoolCount = () => {
    dispatch(setPoolCount(6));
  };

  return { increasePoolCount, resetPoolCount };
};
