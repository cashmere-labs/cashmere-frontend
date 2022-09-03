import { Row } from "components";
import { useTheme } from "hooks";
import { usePoolStates } from "hooks";
import useDimensions from "react-cool-dimensions";
import { useMediaQuery } from "react-responsive";
import { useTypedSelector } from "store";
import { Button, Option, Select } from "ui";
import { clsnm } from "utils/clsnm";

import styles from "./ChoosePool.module.scss";

interface ChoosePool {
  filter: any;
  setFilter: any;
  tokenOptions: any;
  chainOptions: any;
}

const ChoosePool = ({
  filter,
  setFilter,
  tokenOptions,
  chainOptions,
}: ChoosePool) => {
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
  const whichPool = useTypedSelector((state) => state.pool.whichPool);
  const { theme } = useTheme();

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
              whichPool ? styles.poolButtonOff : styles.poolButtonOn,
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
              !whichPool ? styles.poolButtonOff : styles.poolButtonOn,
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
            value={filter.token}
            setValue={() => undefined}
            options={tokenOptions}
            menuClassName={styles.option}
            width={selectWidth ? `${width - 16}px` : ""}
            optionRenderer={(close) => (
              <>
                {tokenOptions.map((item: any, key: number) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={"item.name"}
                    onClick={() => {
                      setFilter({ ...filter, token: item });
                      close?.();
                    }}
                  >
                    <Row style={{ width: "max-content" }} alignItems="center">
                      <span style={{ color: "var(--text)" }}>{item}</span>
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
            value={filter.chain}
            setValue={() => undefined}
            menuClassName={styles.option}
            options={chainOptions}
            optionRenderer={(close) => (
              <>
                {chainOptions.map((item: any, key: number) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={"item.name"}
                    onClick={() => {
                      setFilter({ ...filter, chain: item });
                      close?.();
                    }}
                  >
                    <Row style={{ width: "max-content" }} alignItems="center">
                      <span style={{ color: "var(--text)" }}>{item}</span>
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
