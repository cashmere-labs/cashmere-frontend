import styles from "./UnstakeWarning.module.scss";
import { ModalController } from "hooks/useModal";
import { Button, Modal } from "ui";
import WARNING from "assets/icons/warning.png";
import { useTheme } from "hooks";
import { useMediaQuery } from "react-responsive";

const UnstakeWarning = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 550px)",
  });
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Confirm Withdraw</div>
      <div className={styles.warning}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <img src={WARNING}></img>
          </div>
          <div className={styles.text}>Please unstake to withdraw </div>
        </div>
        <div className={styles.description}>
          You have staked the token. Please unstake first to withdraw the
          corresponding token.
        </div>
      </div>
      <Button
        height={isPhoneOrPC ? "34px" : "56px"}
        width={"100%"}
        color={theme === "light" ? "black" : "white"}
        className={styles.button1}
      >
        Unstake
      </Button>
    </Modal>
  );
};

export { UnstakeWarning };
