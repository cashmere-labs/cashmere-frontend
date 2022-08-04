import styles from "./BecomeValidatorError.module.scss";
import { ModalController } from "hooks/useModal";
import { Button, Modal } from "ui";
import WARNING from "assets/icons/warning.png";
import { useTheme } from "hooks";
import { useMediaQuery } from "react-responsive";

const BecomeValidatorError = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 550px)",
  });
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Become a Validator</div>
      <div className={styles.warning}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <img src={WARNING}></img>
          </div>
          <div className={styles.text}>Unsufficient veCSM Balance </div>
        </div>
        <div className={styles.description}>
          Minimum 500,000 “veCSM” required. Either increase the amount or
          increase the lock time to get enough “veCSM”.
        </div>
      </div>
    </Modal>
  );
};

export { BecomeValidatorError };
