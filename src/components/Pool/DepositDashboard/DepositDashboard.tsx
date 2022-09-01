import styles from "./DepositDashboard.module.scss";
import { useTheme, useModal } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button, Modal, NetworkBadge, SelectNetwork } from "ui";
import { Waiting } from "components";

const DepositDashboard = () => {
  const claimModal = useModal();
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.rewardWrapper}>
        <div className={styles.DBTexts}>
          <div className={styles.DBText}>
            <span className={styles.name}>My Total Deposits </span>
            <span className={styles.text2}>$2.890,12</span>
          </div>
          <div className={styles.DBText}>
            <div className={styles.name}>My Pending Rewards</div>
            <div className={styles.text2}>
              1.890,24 <span>CSM</span>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          {/* <NetworkBadge label={NetworkTypes.ETHEREUM} className={styles.network}/> */}
          <SelectNetwork style={{ height: "40px" }} />
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
        </div>
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
