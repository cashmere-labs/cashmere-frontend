import styles from "./Stake.module.scss";
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
import { useDispatch } from "react-redux";
import { setValue, setFunctionName } from "store/slicers/pool";

const Stake = ({ onSuccess }: { onSuccess: () => void }) => {
  const { theme } = useTheme();
  const dispatch=useDispatch()

  const [isPlus, setIsPlus] = useState(true);

  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>Stake Liquidity</div>
        <div className={isPlus ? styles.bgPlus : styles.bgMinus}>
          <div className={styles.dot} onClick={() => setIsPlus(!isPlus)}>
            {isPlus ? (
              theme === "light" ? (
                <img src={WHITEPLUS}></img>
              ) : (
                <img src={GRAYPLUS}></img>
              )
            ) : (
              <img src={MINUS}></img>
            )}
          </div>
        </div>
      </div>
      <div className={styles.balance}>
        <div>
          <Button
            width={isPhoneOrPC ? "46px" : "65px"}
            height="34px"
            color={theme === "light" ? "transparentWhite" : "transparentBlack"}
          >
            25%
          </Button>{" "}
          <Button
            width={isPhoneOrPC ? "46px" : "65px"}
            height="34px"
            color={theme === "light" ? "transparentWhite" : "transparentBlack"}
          >
            50%
          </Button>{" "}
          <Button
            width={isPhoneOrPC ? "46px" : "65px"}
            height="34px"
            color={theme === "light" ? "transparentWhite" : "transparentBlack"}
          >
            75%
          </Button>
          <Button
            width={isPhoneOrPC ? "46px" : "65px"}
            height="34px"
            color={theme === "light" ? "transparentWhite" : "transparentBlack"}
            // style={{backgroundColor: ""}}
          >
            MAX
          </Button>
        </div>
        <div>BALANCE 24689.905</div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.pattern}>
          <img className={styles.image} src={DAI}></img>
          <div className={styles.text}>DAI</div>
        </div>
        <Input
          extendLeft
          placeholder="Amount"
          height={isPhoneOrPC ? "59px" : "71px"}
          onChange={(e) => dispatch(setValue(e.target.value.toString()))}
        />
      </div>
      <div className={styles.depositingAmount}>
        <div>
          <div>Total Stake</div>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <div>24680 DAI</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.fee}>
        <div>
          <div>Auto Claim</div>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <div>15.6235 CSM</div>
      </div>
      <div className={styles.liquidityButton}>
        <Button
          width="100%"
          height={isPhoneOrPC ? "34px" : "56px"}
          fontWeight="fw600"
          color={theme === "light" ? "black" : "white"}
          onClick={() => {
            onSuccess();
            if (isPlus) {
              dispatch(setFunctionName("Stake Liquidity"));
            } else {
              dispatch(setFunctionName("Unstake Liquidity"));
            }
          }}
        >
          {isPlus ? "Stake Liquidity" : "Unstake Liquidity"}
        </Button>
      </div>
    </div>
  );
};

export { Stake };
