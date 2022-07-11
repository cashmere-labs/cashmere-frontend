import styles from "./Submitted.module.scss";
import SubmittedIcon from "assets/icons/submitted.png";
import ExitBlack from "assets/icons/exit-black.png";
import ExitWhite from "assets/icons/exit-white.png";
import { useTheme } from "hooks";
import { Button } from "ui";
import { useMediaQuery } from "react-responsive";

const Submitted = () => {
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
      <img src={SubmittedIcon} className={styles.submittedIcon}></img>
      <div className={styles.text}>Transaction Submitted</div>
      <Button
        height={isPhoneOrPC ? "45px" : "71px"}
        width={isPhoneOrPC ? "325px" : "524px"}
        color={theme === "light" ? "transparentWhite" : "transparentBlack"}
        className={styles.button1}
      >
        View on AuroraScan
      </Button>
      <Button
        height={isPhoneOrPC ? "34px" : "56px"}
        width={isPhoneOrPC ? "325px" : "524px"}
        color={theme === "light" ? "black" : "white"}
        className={styles.button2}
      >
        Done
      </Button>
    </div>
  );
};

export { Submitted };
