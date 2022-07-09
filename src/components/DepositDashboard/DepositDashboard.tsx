import styles from "./DepositDashboard.module.scss";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button } from "ui";

const DepositDashboard = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.rewardWrapper}>
        <div className={styles.DBTexts}>
          <div className={styles.DBText}>
            <span>MY TOTAL DEPOSIT</span>
            <span className={styles.text2}>$2.890,12</span>
          </div>
          <div className={styles.DBText}>
            <span>MY TOTAL DEPOSIT</span>
            <span className={styles.text2}>$2.890,12</span>
          </div>
        </div>
        <Button
          height="40px"
          width="156px"
          fontSize="fs16"
          onClick={() => {}}
          color={theme === "light" ? "black" : "white"}
          className={clsnm(styles.claimAll)}
        >
          Claim All
        </Button>
      </div>
    </div>
  );
};

export { DepositDashboard };
