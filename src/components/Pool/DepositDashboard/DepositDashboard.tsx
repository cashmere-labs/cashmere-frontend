import styles from "./DepositDashboard.module.scss";
import { useTheme, useModal } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button, Modal } from "ui";
import { Waiting } from "components/Modals/Waiting/Waiting";


const DepositDashboard = () => {
  const claimModal = useModal();
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
            <span>MY TOTAL REWARDS</span>
            <span className={styles.text2}>$1.890,24</span>
          </div>
        </div>
        <Button
          height="40px"
          width="156px"
          fontSize="fs16"
          onClick={() => claimModal.open()}
          color={theme === "light" ? "black" : "white"}
          className={clsnm(styles.claimAll)}
        >
          Claim All
        </Button>
        <Modal
          bodyProps={{
            style: {
              borderRadius: "16px",
            },
          }}
          isOpen={claimModal.isOpen}
          close={claimModal.close}
        >
          <Waiting
            icon={null}
            value="24.689.905"
            iconName="veCSM"
            functionName="Claim rewards"
          />
        </Modal>
      </div>
    </div>
  );
};

export { DepositDashboard };
