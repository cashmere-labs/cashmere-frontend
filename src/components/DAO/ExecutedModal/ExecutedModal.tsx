import { InfoIcon } from "assets/icons";
import { useTheme } from "hooks";
import { ModalController } from "hooks/useModal";
import { useMediaQuery } from "react-responsive";
import { Icon, Modal, Tooltip } from "ui";
import { NetworkTypes } from "ui/NetworkBadge/utils";

import styles from "./ExecutedModal.module.scss";

type ExecutedModalProps = {
  modalController: ModalController;
  network: NetworkTypes | string;
};

const ExecutedModal = ({ modalController, network }: ExecutedModalProps) => {
  const { theme } = useTheme();

  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 750px)",
  });

  const minWidth = useMediaQuery({
    query: "(max-width: 375px)",
  });

  const barRate = 0.48;
  return (
    <Modal
      network={network}
      isOpen={modalController.isOpen}
      close={modalController.close}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div>ID: 6</div>
            <div>Executing</div>
            <div>Register Liquidation Queue Contract</div>
            <div>Wed, Nov 10, 2021</div>
          </div>
          <div className={styles.voteInfos}>
            <div className={styles.votes}>
              <div>
                <span>Voted</span>
                <span>48.3%</span>
              </div>
              <div>
                <span>Yes</span>
                <span>48.3%</span>
              </div>
              <div>
                <span>No</span>
                <span>00.0%</span>
              </div>
            </div>
            <div>Pass Threshold</div>
            <div>
              <div
                style={{
                  width: `${
                    isPhoneOrLaptop
                      ? minWidth
                        ? barRate * 290 // !
                        : barRate * 337
                      : barRate * 401
                  }px`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.infoRow}>
            <div>
              <div>Creator</div>
              <div>Jump Crypto</div>
            </div>
            <div>
              <div>Total Amount</div>
              <div>1,000 veCSM</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div>
              <div>Start time</div>
              <div>Wed, Nov 10, 2021&nbsp; 9:08:36 PM</div>
            </div>
            <div>
              <div>Estimated end time</div>
              <div>Wed, Nov 10, 2021 &nbsp;9:08:36 PM</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div>
              <div>Description</div>
              <div>Change the liquidation contract address on Overseer...</div>
            </div>
            <div>
              <div className={styles.tip}>
                <span>Extra Rewards</span>
                <Tooltip placement="top" content="Content coming here">
                  <Icon size={16}>
                    <InfoIcon />
                  </Icon>
                </Tooltip>
              </div>
              <div>100,000 USDD to Yes supporters in Jump Crypto</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { ExecutedModal };
