import styles from "./UnlockModal.module.scss";
import { useTheme } from "hooks";
import { useMediaQuery } from "react-responsive";
import { ModalController } from "hooks/useModal";
import { Modal, Button, Input } from "ui";
import { Warning } from "components/Modals/Warning/Warning";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";

const UnlockModal = ({
  modal,
  onSuccess,
}: {
  modal: ModalController;
  onSuccess: () => void;
}) => {
  const { theme } = useTheme();

  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Confirm Unlock</div>
      <Warning />
      <div className={styles.body}>
        <div className={styles.balance}>BALANCE 24689.905</div>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={theme === "light" ? LOGOBLACK : LOGOWHITE}></img>
            <span>veCSM</span>
          </div>
          <div className={styles.input}>
            <Input placeholder="Amount" height={"71px"} />
          </div>
          <div className={styles.maxButton}>
            <Button
              width="45px"
              height="25px"
              color={theme === "light" ? "transparentWhite" : "white"}
            >
              Max
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.remainig}>
        <div>My Remaining Lock</div>
        <div>230 CSM</div>
      </div>
      <div className={styles.button}>
        <Button
          width={"100%"}
          height={isPhoneOrLaptop ? "34px" : "56px"}
          color={theme === "light" ? "black" : "white"}
          onClick={() => onSuccess()}
        >
          Unlock
        </Button>
      </div>
    </Modal>
  );
};

export { UnlockModal };
