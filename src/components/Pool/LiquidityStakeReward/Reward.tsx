import { useTheme } from "hooks";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setFunctionName, setValue } from "store/slicers/pool";
import { Button } from "ui";

import styles from "./Reward.module.scss";

const Reward = ({ onSuccess }: { onSuccess: () => void }) => {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.depositingAmount}>
        <div>Your Deposits</div>
        <div>24,680.98 DAI</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.fee}>
        <div>Your Rewards</div>
        <div>145.67 CSM</div>
      </div>
      <div className={styles.liquidityButton}>
        <Button
          width="100%"
          height={isPhoneOrPC ? "34px" : "56px"}
          fontWeight="fw600"
          color={theme === "light" ? "black" : "white"}
          onClick={() => {
            onSuccess();
            dispatch(setValue("145.67"));
            dispatch(setFunctionName("Claim"));
          }}
        >
          Claim
        </Button>
      </div>
    </div>
  );
};

export { Reward };
