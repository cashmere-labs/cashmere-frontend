import styles from "./ClaimDashboard.module.scss";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button, Modal } from "ui";
import { useMediaQuery } from "react-responsive";
import { Waiting } from "components/Modals/Waiting/Waiting";

const ClaimDashboard = () => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 650px)",
  });

  const claimModal = useModal();

  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <div className={styles.texts}>
          <div className={styles.text}>
            <div>
              <span>Name</span>
              <span>Jump CRYPTO</span>
            </div>
          </div>
          <div className={styles.text}>
            <div>
              <span>Amount Locked</span>
              <span>12,193 CSM</span>
            </div>
          </div>
          <div className={styles.text}>
            <div>
              <span>Pending Profit</span>
              <span>298.41 USN</span>
            </div>
          </div>
          <div></div>
        </div>
        <Button
          height="40px"
          width="156px"
          fontSize={isPhoneOrLaptop ? "fs14" : "fs16"}
          fontWeight="fw600"
          onClick={() => claimModal.open()}
          color={theme === "light" ? "black" : "white"}
          className={clsnm(styles.claimAll)}
        >
          Claim
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

export { ClaimDashboard };
