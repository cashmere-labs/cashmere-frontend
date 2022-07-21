import styles from "./LockModal.module.scss";
import { useTheme } from "hooks";
import { useMediaQuery } from "react-responsive";
import { ModalController } from "hooks/useModal";
import { Modal, Button, Input } from "ui";
import EXCHANGE from "assets/icons/exchange.png";
import INFO from "assets/icons/info.png";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";

const LockModal = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();

  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Confirm Lock</div>
      <div className={styles.input}>
        <div className={styles.logo}>
          <img src={theme === "light" ? LOGOBLACK : LOGOWHITE}></img>
          <span>CSM</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.value}>24.689.905</div>
      </div>
      <div className={styles.exchange}>
        <img src={EXCHANGE}></img>
      </div>
      <div className={styles.output}>
        <div className={styles.logo}>
          <img src={theme === "light" ? LOGOBLACK : LOGOWHITE}></img>
          <span>veCSM</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.value}>24.689.905</div>
      </div>
      <div className={styles.info}>
        <div className={styles.icon}>
          <img src={INFO}></img>
        </div>
        <div>
          Your Starting veCSM will be: 10989.905 You are locking 23689.905 CSM
          until dd/mm/yyy
        </div>
      </div>
      <div className={styles.button}>
        <Button
          width={"100%"}
          height={isPhoneOrLaptop ? "34px" : "56px"}
          color={theme === "light" ? "black" : "white"}
        >
          Lock
        </Button>
      </div>
    </Modal>
  );
};

export { LockModal };
