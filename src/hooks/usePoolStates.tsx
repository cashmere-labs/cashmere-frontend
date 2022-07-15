import { useDispatch, useSelector } from "react-redux";
import { setWhichPool, setPoolCount } from "store/slicers/pool";
export const usePoolStates = () => {
  const poolCount = useSelector((state: any) => state.pool.poolCount);
  const dispatch = useDispatch();

  const changeWhichPool = (newState:boolean) => {
    dispatch(setWhichPool(newState));
  };

  const increasePoolCount = () => {
    dispatch(setPoolCount(poolCount + 10));
  };

  const resetPoolCount = () => {
    dispatch(setPoolCount(6));
  };

  return { resetPoolCount, increasePoolCount, changeWhichPool };
};
