import styles from "./Reward.module.scss";
import { Button, Input } from "ui";
import { useTheme } from "hooks";
import { Icon, Tooltip } from "ui";
import { InfoIcon } from "assets/icons";
import { useState } from "react";
import WHITEPLUS from "assets/icons/whitePlus.png";
import GRAYPLUS from "assets/icons/grayPlus.png";
import MINUS from "assets/icons/minus.png";
import { useMediaQuery } from "react-responsive";
import DAI from "assets/pool/dai.png";

const Reward = () => {
  const { theme } = useTheme();

  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.depositingAmount}>
        <div>Your Deposits</div>
        <div>24,680.98 DAI</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.fee}>
        <div>Your Rewards</div>
        <div>145.67 CSM</div>
      </div>
      <div className={styles.liquidityButton}>
        <Button
          width="100%"
          height={isPhoneOrPC ? "34px" : "56px"}
          fontWeight="fw600"
          color={theme === "light" ? "black" : "white"}
        >
          Claim
        </Button>
      </div>
    </div>
  );
};

export { Reward };
