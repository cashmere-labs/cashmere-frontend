import { clsnm } from "utils/clsnm";
import styles from "./ChoosePool.module.scss";
import { useTheme } from "hooks";
import { Button, Option, Select } from "ui";
import { useMediaQuery } from "react-responsive";
import { usePoolStates } from "hooks";
import { useSelector } from "react-redux";
import { Row } from "components";
import { useState, useEffect } from "react";
import useDimensions from "react-cool-dimensions";

const ChoosePool = () => {
  const { observe, width } = useDimensions({
    onResize: ({ observe }) => {
      observe(); // To re-start observing the current target element
    },
  });

  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 850px)",
  });

  const selectWidth = useMediaQuery({
    query: "(max-width: 620px)",
  });

  const minWidth = useMediaQuery({
    query: "(max-width: 350px)",
  });
  const { resetPoolCount, changeWhichPool } = usePoolStates();
  const whichPool = useSelector((state: any) => state.pool.whichPool);
  const { theme } = useTheme();

  const [state, setState] = useState({
    token: "All Tokens",
    chain: "All Chain",
  });

  const tokenOptions = [
    "All Tokens",
    "DAI",
    "USDC",
    "FRAX",
    "USDT",
    "BUSD",
    "TUSD",
  ];
  const chainOptions = [
    "All Chain",
    "Ethereum",
    "Avalanche",
    "Arbitrum",
    "Optimism",
    "Polygon",
    "BNBChain",
    "Fantom",
  ];
  return (
    <div className={styles.whichPoolWrapper} ref={observe}>
      <div className={styles.titleWrapper}>
        <div className={styles.buttons}>
          <Button
            height="46px"
            width={isPhoneOrPC ? (minWidth ? "125px" : "171px") : "162px"}
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
            width={isPhoneOrPC ? (minWidth ? "125px" : "171px") : "162px"}
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
        <div className={styles.options}>
          <Select
            containerClassName={styles.select}
            isFullWidth
            height={"46px"}
            value={state.token}
            setValue={() => undefined}
            options={tokenOptions}
            menuClassName={styles.option}
            // width={selectWidth ? `${width}px !important` : ""}
            width={selectWidth ? `${width - 16}px` : ""}
            optionRenderer={(close) => (
              <>
                {tokenOptions.map((item, key) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={"item.name"}
                    onClick={() => {
                      setState({ ...state, token: item });
                      close?.();
                    }}
                  >
                    <Row style={{ width: "max-content" }} alignItems="center">
                      <span style={{ color: `var(--text)` }}>{item}</span>
                    </Row>
                  </Option>
                ))}
              </>
            )}
          />
          <Select
            containerClassName={styles.select}
            isFullWidth
            height={"46px"}
            value={state.chain}
            setValue={() => undefined}
            menuClassName={styles.option}
            options={chainOptions}
            optionRenderer={(close) => (
              <>
                {chainOptions.map((item, key) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={"item.name"}
                    onClick={() => {
                      setState({ ...state, chain: item });
                      close?.();
                    }}
                  >
                    <Row style={{ width: "max-content" }} alignItems="center">
                      <span style={{ color: `var(--text)` }}>{item}</span>
                    </Row>
                  </Option>
                ))}
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export { ChoosePool };
