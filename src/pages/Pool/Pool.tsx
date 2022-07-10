import styles from "./Pool.module.scss";
import { DepositDashboard, Navbar, Pools, Footer } from "components";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button } from "ui";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Pool = () => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const [whichPool, setWhichPool] = useState(false);
  const { theme } = useTheme();
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <DepositDashboard />
        <div className={styles.whichPoolWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.buttons}>
              <Button
                height="46px"
                width={isPhoneOrPC ? "102px" : "162px"}
                fontSize={isPhoneOrPC ? "fs14" : "fs18"}
                onClick={() => setWhichPool(false)}
                color={theme === "light" ? "white" : "white"}
                className={clsnm(
                  whichPool ? styles.poolButtonOff : styles.poolButtonOn
                )}
                fontWeight={whichPool ? "fw500" : "fw600"}
              >
                All Pools
              </Button>
              <Button
                height="46px"
                width={isPhoneOrPC ? "102px" : "162px"}
                fontSize={isPhoneOrPC ? "fs14" : "fs18"}
                onClick={() => setWhichPool(true)}
                color={theme === "light" ? "white" : "white"}
                className={clsnm(
                  !whichPool ? styles.poolButtonOff : styles.poolButtonOn
                )}
                fontWeight={!whichPool ? "fw500" : "fw600"}
              >
                My Pools
              </Button>
            </div>
            <div className={styles.TVLInfo}>
              <span className={styles.text1}>TVL:</span>
              <span className={styles.text2}>$518,213,212.42</span>
            </div>
          </div>
        </div>
        <Pools whichPool={whichPool} />
      </div>

      <Footer />
    </div>
  );
};

export { Pool };
