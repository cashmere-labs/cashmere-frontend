import styles from "./Pool.module.scss";
import { DepositDashboard, Navbar, Pools, Footer } from "components";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button, Layout } from "ui";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Pool = () => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const minWidth = useMediaQuery({
    query: "(max-width: 350px)",
  });
  const [whichPool, setWhichPool] = useState(false);
  const [bodyCount, setBodyCount] = useState(6);
  const { theme } = useTheme();

  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <DepositDashboard />
          <div className={styles.whichPoolWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.buttons}>
                <Button
                  height="46px"
                  width={isPhoneOrPC ? minWidth? "95px" : "102px" : "162px"}
                  fontSize={isPhoneOrPC ? minWidth? "fs12" : "fs14" : "fs18"}
                  onClick={() => {
                    setWhichPool(false);
                    setBodyCount(6);
                  }}
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
                  width={isPhoneOrPC ? minWidth? "95px" : "102px" : "162px"}
                  fontSize={isPhoneOrPC ? minWidth? "fs12" : "fs14" : "fs18"}
                  onClick={() => {
                    setWhichPool(true);
                    setBodyCount(6);
                  }}
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
                <div className={styles.text1}>TVL:</div>
                <div className={styles.text2}>$518,213,212.42</div>
              </div>
            </div>
          </div>
          <Pools
            whichPool={whichPool}
            bodyCount={bodyCount}
            setBodyCount={setBodyCount}
          />
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export { Pool };
