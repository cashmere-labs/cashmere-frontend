import styles from "./Waiting.module.scss";
import ExitBlack from "assets/icons/exit-black.png";
import ExitWhite from "assets/icons/exit-white.png";
import { useTheme } from "hooks";
import { Button } from "ui";
import { useMediaQuery } from "react-responsive";
import WaitingGif from "assets/gifs/loading.gif";

interface WaitingProps {
  functionName: string;
  iconName: any;
  value: string;
  icon?: any;
}

const Waiting = ({ functionName,  iconName, value , icon}: WaitingProps) => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.exit}
        src={theme === "light" ? ExitBlack : ExitWhite}
      ></img>
      <img
        src={WaitingGif}
        alt="Waiting..."
        className={styles.waitingGif}
      ></img>

      <div className={styles.text1}>Waiting For Confirmation</div>

      <div className={styles.text2}>
        Please confirm this transaction in your wallet
      </div>
      <div className={styles.text3}>{functionName}</div>
      <div className={styles.values}>
        <div className={styles.value1}>
          <img className={styles.icon} src={icon} ></img> {iconName}
        </div>
        <div className={styles.value2}>{value}</div>
      </div>
    </div>
  );
};

export { Waiting };
