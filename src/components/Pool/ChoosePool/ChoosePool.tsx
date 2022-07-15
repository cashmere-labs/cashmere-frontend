import { ComponentPropsWithoutRef } from "react";
import { clsnm } from "utils/clsnm";
import styles from "./ChoosePool.module.scss";
import { DepositDashboard, Navbar, Pools, Footer } from "components";
import { useModal, useTheme } from "hooks";
import { Button, Layout } from "ui";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePoolStates } from "hooks";
import { useSelector } from "react-redux";

const ChoosePool = () => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const minWidth = useMediaQuery({
    query: "(max-width: 350px)",
  });
  const {resetPoolCount, increasePoolCount, changeWhichPool } = usePoolStates()
  const whichPool = useSelector((state: any) => state.pool.whichPool);
  const poolCount = useSelector((state:any) => state.pool.poolCount)
  const { theme } = useTheme();
  return (
    <div className={styles.whichPoolWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.buttons}>
          <Button
            height="46px"
            width={isPhoneOrPC ? (minWidth ? "95px" : "102px") : "162px"}
            fontSize={isPhoneOrPC ? (minWidth ? "fs12" : "fs14") : "fs18"}
            onClick={() => {
              changeWhichPool(false);
              resetPoolCount();
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
            width={isPhoneOrPC ? (minWidth ? "95px" : "102px") : "162px"}
            fontSize={isPhoneOrPC ? (minWidth ? "fs12" : "fs14") : "fs18"}
            onClick={() => {
              changeWhichPool(true);
              resetPoolCount();
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
  );
};

export { ChoosePool };
