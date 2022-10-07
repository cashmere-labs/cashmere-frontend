import { Row } from "components";
import { useTheme } from "hooks";
import { usePoolStates } from "hooks";
import { FilterType, PoolTab } from "pages/Pool/Pool";
import useDimensions from "react-cool-dimensions";
import { useMediaQuery } from "react-responsive";
import { Network } from "types/network";
import { Token } from "types/token";
import { Button, Option, Select } from "ui";
import { clsnm } from "utils/clsnm";

import styles from "./ChoosePool.module.scss";

interface ChoosePool {
  poolTab: PoolTab;
  setPoolTab: (to: PoolTab) => void;
  filter: FilterType;
  setFilter: (to: FilterType) => void;
  tokenOptions: Token[];
  networkOptions: Network[];
}

const ChoosePool = ({
  poolTab,
  setPoolTab,
  filter,
  setFilter,
  tokenOptions,
  networkOptions,
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
  const { resetPoolCount } = usePoolStates();
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
              setPoolTab(PoolTab.ALL);
              resetPoolCount();
            }}
            color="white"
            className={clsnm(
              poolTab === PoolTab.MY
                ? styles.poolButtonOff
                : styles.poolButtonOn,
              styles.poolButton,
            )}
            fontWeight={poolTab === PoolTab.MY ? "fw500" : "fw600"}
          >
            All Pools
          </Button>
          <Button
            height="46px"
            width={isPhoneOrPC ? (minWidth ? "125px" : "171px") : "162px"}
            fontSize={isPhoneOrPC ? (minWidth ? "fs12" : "fs14") : "fs18"}
            onClick={() => {
              setPoolTab(PoolTab.MY);
              resetPoolCount();
            }}
            color={theme === "light" ? "white" : "white"}
            className={clsnm(
              poolTab === PoolTab.ALL
                ? styles.poolButtonOff
                : styles.poolButtonOn,
              styles.poolButton,
            )}
            fontWeight={poolTab === PoolTab.ALL ? "fw500" : "fw600"}
          >
            My Pools
          </Button>
        </div>
        <div className={styles.options}>
          <Select
            containerClassName={styles.select}
            isFullWidth
            height={"46px"}
            menuRenderer={() =>
              filter.token != null ? filter.token.name : "All tokens"
            }
            value={filter.token}
            setValue={() => undefined}
            options={tokenOptions}
            menuClassName={styles.option}
            width={selectWidth ? `${width - 16}px` : ""}
            optionRenderer={(close) => (
              <>
                <Option
                  style={{ marginRight: "8px" }}
                  value={"All tokens"}
                  onClick={() => {
                    setFilter({ ...filter, token: null });
                    close?.();
                  }}
                >
                  <Row style={{ width: "max-content" }} alignItems="center">
                    <span style={{ color: "var(--text)" }}>All tokens</span>
                  </Row>
                </Option>
                {tokenOptions.map((item, key) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={item.name}
                    onClick={() => {
                      setFilter({ ...filter, token: item });
                      close?.();
                    }}
                  >
                    <Row style={{ width: "max-content" }} alignItems="center">
                      <span style={{ color: "var(--text)" }}>{item.name}</span>
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
            value={filter.network}
            menuRenderer={() =>
              filter.network != null ? filter.network.name : "All chains"
            }
            setValue={() => undefined}
            menuClassName={styles.option}
            options={networkOptions}
            optionRenderer={(close) => (
              <>
                <Option
                  style={{ marginRight: "8px" }}
                  value={"All chains"}
                  onClick={() => {
                    setFilter({ ...filter, network: null });
                    close?.();
                  }}
                >
                  <Row style={{ width: "max-content" }} alignItems="center">
                    <span style={{ color: "var(--text)" }}>All chains</span>
                  </Row>
                </Option>
                {networkOptions.map((item, key) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={"item.name"}
                    onClick={() => {
                      setFilter({ ...filter, network: item });
                      close?.();
                    }}
                  >
                    <Row style={{ width: "max-content" }} alignItems="center">
                      <span style={{ color: "var(--text)" }}>{item.name}</span>
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
