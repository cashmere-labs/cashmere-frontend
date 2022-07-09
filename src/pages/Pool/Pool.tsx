import styles from "./Pool.module.scss";
import { DepositDashboard, Navbar, Pools } from "components";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button } from "ui";
import { useState } from "react";

const Pool = () => {
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
                width="162px"
                onClick={() => setWhichPool(false)}
                color={theme === "light" ? "neutral" : "neutral"}
                className={clsnm(
                  whichPool ? styles.poolButtonOff : styles.poolButtonOn
                )}
              >
                All Pools
              </Button>
              <Button
                height="46px"
                width="162px"
                onClick={() => setWhichPool(true)}
                color={theme === "light" ? "neutral" : "neutral"}
                className={clsnm(
                  !whichPool ? styles.poolButtonOff : styles.poolButtonOn
                )}
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
        <Pools whichPool={whichPool}/>
      </div>
    </div>
  );
};

export { Pool };
