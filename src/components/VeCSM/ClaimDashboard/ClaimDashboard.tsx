import styles from "./ClaimDashboard.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button } from "ui";

const ClaimDashboard = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <div className={styles.text}>
          <span>Name</span>
          <span>Jump CRYPTO</span>
        </div>
        <div className={styles.text}>
          <span>Amount Locked</span>
          <span>12,193 CSM</span>
        </div>
        <div className={styles.text}>
          <span>Pending Profit</span>
          <span>298.41 USN</span>
        </div>
        <Button
          height="40px"
          width="156px"
          fontSize="fs16"
          fontWeight="fw600"
          onClick={() => {}}
          color={theme === "light" ? "black" : "white"}
          className={clsnm(styles.claimAll)}
        >
          Claim
        </Button>
      </div>
    </div>
  );
};

export { ClaimDashboard };
