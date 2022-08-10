import { ModalController } from "hooks/useModal";
import { Modal } from "ui";
import styles from "./LiquidityStakeReward.module.scss";
import { Liquidity, Reward, Stake } from "components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "store/slicers/pool";

const LiquidityStakeReward = ({
  modal,
  onSuccess,
}: {
  modal: ModalController;
  onSuccess: () => void;
}) => {
  const [whichComponent, setWhichComponent] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    setWhichComponent(0);
  }, [modal.isOpen]);

  useEffect(() => {
    dispatch(setValue(""))
  }, [whichComponent]);

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
