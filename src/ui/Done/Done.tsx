import styles from "./Done.module.scss";
import ExitBlack from "assets/icons/exit-black.png";
import ExitWhite from "assets/icons/exit-white.png";
import { useTheme } from "hooks";
import { Button } from "ui";
import { useMediaQuery } from "react-responsive";
import { MdOutlineDone } from "react-icons/md";
import { motion } from "framer-motion";
const Done = () => {
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
      <motion.div
        className={styles.done}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: [0.8, 1.4, 0.9, 1.3, 1, 1.1, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MdOutlineDone
          color={theme === "light" ? "green" : "lightgreen"}
          size={"50"}
        />
      </motion.div>

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

export { Done };
