import { ModalController } from "hooks/useModal";
import { Modal } from "ui";
import styles from "./LiquidityStakeReward.module.scss";
import { Liquidity } from "components/Modals/LiquidityStakeReward/Liquidity";
import { useState } from "react";

const LiquidityStakeReward = ({ modal }: { modal: ModalController }) => {
  const [whichComponent, setWhichComponent] = useState(0);
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.options}>
        <div
          onClick={() => {
            setWhichComponent(0);
          }}
          className={whichComponent === 0 ? styles.thisOne : styles.no}
        >
          Liquidity
        </div>
        <div
          onClick={() => {
            setWhichComponent(1);
          }}
          className={whichComponent === 1 ? styles.thisOne : styles.no}
        >
          Stake
        </div>
        <div
          onClick={() => {
            setWhichComponent(2);
          }}
          className={whichComponent === 2 ? styles.thisOne : styles.no}
        >
          Reward
        </div>
      </div>
      {whichComponent === 0 ? (
        <Liquidity />
      ) : whichComponent === 1 ? (
        <Liquidity />
      ) : (
        <Liquidity />
      )}
    </Modal>
  );
};

export { LiquidityStakeReward };
