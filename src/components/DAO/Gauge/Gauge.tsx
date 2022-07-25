import styles from "./Gauge.module.scss";
import { Select, Option, Input, Button } from "ui";
import { Row } from "components";
import { useState } from "react";
import { useTheme } from "hooks";
const Gauge = () => {
  const { theme } = useTheme();
  const [state, setState] = useState({
    from: "Option 1",
    duration: "1 year",
  });

  const [whichToken, setWhichToken] = useState(0);

  const tokenOptions = ["Option 1", "Option 2", "Option 3"];
  const durationOptions = ["3 Months", "1 Year", "3 Years"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Gauge Boost Calculator</div>
      <div className={styles.boxWrapper}>
        <div className={styles.options}>
          <Select
            containerClassName={styles.select}
            isFullWidth
            height={"71px"}
            value={state.from}
            setValue={() => undefined}
            options={tokenOptions}
            optionRenderer={(close) => (
              <>
                {tokenOptions.map((item, key) => (
                  <Option
                    style={{ marginRight: "8px" }}
                    key={key}
                    value={"item.name"}
                    onClick={() => {
                      setState({ ...state, from: item });
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
        <div className={styles.input1}>
          <div>
            <div>Deposit: {"[ ]"} Use Existing Deposit</div>
            <Input placeholder="0" height={"71px"} />
          </div>
          <div>
            <div>Pool Liquidity</div>
            <Input placeholder="0" height={"71px"} />
          </div>
        </div>
        <div className={styles.whichToken}>
          <div className={styles.csm}>
            <div className={styles.bg} onClick={() => setWhichToken(0)}>
              <div className={styles.isSelected}>
                <div
                  className={whichToken === 0 ? styles.yes : styles.no}
                ></div>
              </div>
              <div>CSM</div>
            </div>
          </div>
          <div className={styles.veCSM}>
            <div className={styles.bg} onClick={() => setWhichToken(1)}>
              <div className={styles.isSelected}>
                <div
                  className={whichToken === 1 ? styles.yes : styles.no}
                ></div>
              </div>
              <div className={styles.text}>veCSM</div>
            </div>
          </div>
        </div>
        <div className={styles.input2}>
          <div className={styles.myCSM}>
            <div>My CSM</div>
            <Input placeholder="0.00" height={"71px"} />
          </div>
          <div className={styles.selectPart}>
            <div>
              <div>Locked For</div>
              <div>0.00 veCSM</div>
            </div>
            <div>
              <Select
                containerClassName={styles.select}
                isFullWidth
                height={"71px"}
                value={state.duration}
                setValue={() => undefined}
                options={tokenOptions}
                optionRenderer={(close) => (
                  <>
                    {durationOptions.map((item, key) => (
                      <Option
                        style={{ marginRight: "8px" }}
                        key={key}
                        value={"item.name"}
                        onClick={() => {
                          setState({ ...state, duration: item });
                          close?.();
                        }}
                      >
                        <Row
                          style={{ width: "max-content" }}
                          alignItems="center"
                        >
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
        <div className={styles.input3}>
          <div>Total VeCSM</div>
          <Input placeholder="0" height={"71px"} />
        </div>

        <div className={styles.calculate}>
          <Button
            width="100%"
            height="40px"
            color={theme === "light" ? "black" : "white"}
          >
            Calculate
          </Button>
        </div>

        <div className={styles.boost}>
          <div>Boost:</div>
          <div>1.00x</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.maxBoost}>
          <div>Max Boost Possible:</div>
          <div>X</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.minCSM}>
          <div>Min veCSM for max boost:</div>
          <div>Please enter a deposit amount</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.selectGauge}>
          <div> Select a gauge info</div>
          <div>--</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.maxDeposit}>
          <div>
            Max deposit to have
            <br />
            max boost:
          </div>
          <div>
            <div>
              Max deposit per veCSM to have
              <br />
              max boost:
            </div>
            <div>--</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Gauge };
