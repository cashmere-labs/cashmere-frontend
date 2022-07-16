import { useDispatch, useSelector } from "react-redux";
import { setIsActive, setValidatorCount } from "store/slicers/veCSM";

export const useVeCSMStates = () => {
  const validatorCount = useSelector(
    (state: any) => state.veCSM.validatorCount
  );
  const dispatch = useDispatch();

  const changeIsActive = (newState: boolean) => {
    dispatch(setIsActive(newState));
  };

  const increaseValidatorCount = () => {
    dispatch(setValidatorCount(validatorCount + 10));
  };

  const resetValidatorCount = () => {
    dispatch(setValidatorCount(6));
  };

  return { resetValidatorCount, increaseValidatorCount, changeIsActive };
};
