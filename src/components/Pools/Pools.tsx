import styles from "./Pools.module.scss";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button } from "ui";
import { useState } from "react";
import { PersonalData, GlobalData } from "./datas";
import DAI from "../../assets/pool/dai.png";

interface Pools {
  whichPool?: boolean;
}

const Pools = ({ whichPool }: Pools) => {
  const [bodyCount, setBodyCount] = useState(6);
  const { theme } = useTheme();
  {
    console.log(GlobalData.length);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
        <div className={styles.tableTitle}>
          <div className={styles.title1}>Name</div>
          <div className={styles.title2}>Network</div>
          <div className={styles.title3}>Liquidity</div>
          <div className={styles.title4}>Volume (24h)</div>
          <div className={styles.title5}>VEAPR</div>
          <div className={styles.title6}>My Total APR</div>
        </div>
        {whichPool
          ? PersonalData.map((data, i) => {
              return (
                <div className={styles.tableBody}>
                  <div className={styles.line}></div>
                  <div className={styles.datas}>
                    <div className={styles.data1}>
                      <span className={styles.logoAndName}>
                        {data.logo && (
                          <img
                            style={{ width: "25px", marginRight: "14.5px" }}
                            src={data.logo}
                          ></img>
                        )}
                        <span>{data.name}</span>
                      </span>
                      <span className={styles.cRatio}>
                        Compensation Ratio: %154.89
                      </span>
                    </div>
                    <div className={styles.data2}>{data.network}</div>
                    <div className={styles.data3}>%{data.liquidity}</div>
                    <div className={styles.data4}>%{data.volume}</div>
                    <div className={styles.data5}>{data.veapr}%</div>
                    <div className={styles.data6}>{data.myTotalApr}%</div>
                  </div>
                </div>
              );
            })
          : GlobalData.map((data, i) => {
              if (i < bodyCount) {
                return (
                  <div className={styles.tableBody}>
                    <div className={styles.line}></div>
                    <div className={styles.datas}>
                      <div className={styles.data1}>
                        <span className={styles.logoAndName}>
                          {data.logo && (
                            <img
                              style={{ width: "25px", marginRight: "14.5px" }}
                              src={data.logo}
                            ></img>
                          )}
                          <span>{data.name}</span>
                        </span>
                        <span className={styles.cRatio}>
                          Compensation Ratio: %154.89
                        </span>
                      </div>
                      <div className={styles.data2}>{data.network}</div>
                      <div className={styles.data3}>%{data.liquidity}</div>
                      <div className={styles.data4}>%{data.volume}</div>
                      <div className={styles.data5}>{data.veapr}%</div>
                      <div className={styles.data6}>{data.myTotalApr}%</div>
                    </div>
                  </div>
                );
              }
            })}
      </div>
      <div className={styles.footer}>
        The base emission rate is currently 1.5 CSM per second.
      </div>
      {whichPool
        ? PersonalData.length > bodyCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                onClick={() => setBodyCount(bodyCount + 10)}
                color={theme === "light" ? "black" : "neutral"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black
                )}
              >
                more
              </Button>{" "}
            </div>
          )
        : GlobalData.length > bodyCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                onClick={() => setBodyCount(bodyCount + 10)}
                color={theme === "light" ? "black" : "neutral"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black
                )}
              >
                more
              </Button>
            </div>
          )}
    </div>
  );
};

export { Pools };
