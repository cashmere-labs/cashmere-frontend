import styles from "./Reward.module.scss";
import { Button } from "ui";
import { useTheme } from "hooks";
import { useMediaQuery } from "react-responsive";

const Reward = () => {
  const { theme } = useTheme();

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
        >
          Claim
        </Button>
      </div>
    </div>
  );
};

export { Reward };
