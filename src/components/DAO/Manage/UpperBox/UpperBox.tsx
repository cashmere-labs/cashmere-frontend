import styles from "./UpperBox.module.scss";
import { useMediaQuery } from "react-responsive";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";
import { useTheme } from "hooks";
import { Input, Button } from "ui";

const UpperBox = () => {
  const { theme } = useTheme();

  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstRow}>
        <div className={styles.csm}>
          <div className={styles.title}>BALANCE 23689.905</div>
          <div className={styles.box}>
            <div className={styles.pattern}>
              <img
                className={styles.image}
                src={theme === "light" ? LOGOBLACK : LOGOWHITE}
              ></img>
              <div className={styles.text}>CSM</div>
            </div>
            <Input
              extendLeft
              placeholder="Amount"
              height={isPhoneOrPC ? "59px" : "71px"}
            />
          </div>
        </div>
        <div className={styles.veCSM}>
          <div className={styles.title}></div>
          <div className={styles.box}>
            <div className={styles.pattern}>
              <img
                className={styles.image}
                src={theme === "light" ? LOGOBLACK : LOGOWHITE}
              ></img>
              <div className={styles.text}>veCSM</div>
            </div>
            <div className={styles.button}>
              <Button
                width={isPhoneOrPC ? "46px" : "65px"}
                height="34px"
                color={
                  theme === "light" ? "transparentWhite" : "transparentBlack"
                }
              >
                MAX
              </Button>
            </div>
            <Input
              extendLeft
              placeholder="Amount"
              height={isPhoneOrPC ? "59px" : "71px"}
            />
          </div>
        </div>
        <div className={styles.result}>
          <div className={styles.title}></div>
          <div className={styles.buttons}>
            <Button
              width={isPhoneOrPC ? "46px" : "65px"}
              height="34px"
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
            >
              Lock
            </Button>{" "}
            <Button
              width={isPhoneOrPC ? "46px" : "65px"}
              height="34px"
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
            >
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UpperBox };
