import { Liquidity, Reward, Stake } from "components";
import { ModalController } from "hooks/useModal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "store/slicers/pool";
import { Modal } from "ui";

import styles from "./LiquidityStakeReward.module.scss";

const LiquidityStakeReward = ({
  modal,
  onSuccess,
  whichNetwork,
}: {
  modal: ModalController;
  onSuccess: () => void;
  whichNetwork: any;
}) => {
  const [whichComponent, setWhichComponent] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setWhichComponent(0);
  }, [modal.isOpen]);

  useEffect(() => {
    dispatch(setValue(""));
  }, [whichComponent, dispatch]);

  return (
    <Modal
      isOpen={modal.isOpen}
      close={modal.close}
      className={styles.wrapper}
      network={whichNetwork}
    >
      <div className={styles.line}></div>
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
        <Liquidity onSuccess={onSuccess} />
      ) : whichComponent === 1 ? (
        <Stake onSuccess={onSuccess} />
      ) : (
        <Reward onSuccess={onSuccess} />
      )}
    </Modal>
  );
};

export { LiquidityStakeReward };
