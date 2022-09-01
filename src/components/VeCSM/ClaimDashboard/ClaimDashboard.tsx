import styles from "./ClaimDashboard.module.scss";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button, Modal, NetworkBadge, SelectNetwork } from "ui";
import { useMediaQuery } from "react-responsive";
import { Waiting } from "components";
import { NetworkTypes } from "ui/NetworkBadge/utils";

const ClaimDashboard = () => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const claimModal = useModal();

  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <div className={styles.texts}>
          <div className={styles.text}>
            <div>
              <span>Name</span>
              <span>CSM Locker</span>
            </div>
          </div>
          <div className={styles.text}>
            <div>
              <span>My Locked CSM</span>
              <span>12,193 CSM</span>
            </div>
          </div>
          <div className={styles.text}>
            <div>
              <span>Pending Profit</span>
              <span>$298.41</span>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.buttons}>
          {/* <div className={styles.network}> */}
          <SelectNetwork style={{ height: "40px" }} />
          {/* </div> */}
          <Button
            height="43px"
            width={"156px"}
            fontSize={isPhoneOrLaptop ? "fs14" : "fs16"}
            fontWeight="fw600"
            onClick={() => claimModal.open()}
            color={theme === "light" ? "black" : "white"}
            className={clsnm(styles.claimAll)}
          >
            Claim
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

export { ClaimDashboard };
