import DOWNBLACK from "assets/pool/down-icon-black.png";
import DOWNWHITE from "assets/pool/down-icon-white.png";
import { useTheme } from "hooks";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, NetworkBadge } from "ui";
import { clsnm } from "utils/clsnm";

import styles from "./VoteGaugePhone.module.scss";

interface Table {
  datas: any;
  open: () => void;
  setWhichNetwork: any;
  setWhichToken: any;
}

const VoteGaugePhoneTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div className={styles.gauge}>Gauge</div>
      <div className={styles.network}>Network</div>
    </div>
  );
};

const VoteGaugePhoneTable = ({
  datas,
  open,
  setWhichNetwork,
  setWhichToken,
}: Table) => {
  const miniPhone = useMediaQuery({
    query: "(max-width: 340px)",
  });

  const [bodyOpenGlobal, setBodyOpenGlobal] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const firstArray = [];
    for (let i = 0; i < datas.length; i++) {
      firstArray[i] = false;
    }
    setBodyOpenGlobal(firstArray);
  }, []);

  const updateMyArray = (
    oldArray: any,
    setOldArray: any,
    whichIndex: number,
  ) => {
    setOldArray((items: any) => {
      return items.map((item: any, i: number): boolean => {
        return whichIndex === i ? !item : item;
      });
    });
  };

  const { theme } = useTheme();
  return (
    <>
      {datas.map((data: any, i: number) => {
        return (
          <div
            className={clsnm(
              bodyOpenGlobal[i] === true
                ? styles.openIt
                : styles.phoneTableWrapper,
            )}
            style={bodyOpenGlobal[i] === true ? { height: "250px" } : {}}
            key={i}
            onClick={() => undefined}
          >
            <div className={styles.line}></div>
            <div className={styles.titles}>
              <div className={styles.title}>
                <div className={styles.logoAndName}>
                  <img src={data.logo}></img>
                  <span className={styles.name}>{data.name}</span>
                </div>
                <div className={styles.networkDiv}>
                  <NetworkBadge
                    label={data.network}
                    className={styles.network}
                    size={miniPhone ? 22 : 26}
                    fontSize={miniPhone ? "14px" : "16px"}
                    style={miniPhone ? { width: "106px" } : { width: "126px" }}
                  />
                </div>
              </div>
              <img
                onClick={() =>
                  updateMyArray(bodyOpenGlobal, setBodyOpenGlobal, i)
                }
                className={clsnm(
                  styles.modalKey,
                  bodyOpenGlobal[i] && styles.reverse,
                )}
                src={theme === "light" ? DOWNBLACK : DOWNWHITE}
                alt="Down button"
              ></img>
            </div>
            {bodyOpenGlobal[i] === true && (
              <div className={styles.openDatas}>
                <div className={styles.myLocks}>
                  <div className={styles.openData}>
                    <div className={styles.text1}>Total Voted veCSM</div>
                    <div>{data.totalVotedveCSM} veCSM</div>
                  </div>
                  <div className={styles.openData}>
                    <div className={styles.text1}>Current APY</div>
                    <div>{data.currentAPY}%</div>
                  </div>

                  <div className={styles.openData}>
                    <div className={styles.text1}>Future APY</div>
                    <div>{data.futureAPY}%</div>
                  </div>
                  <div className={styles.openData}>
                    <div className={styles.text1}>Used Power</div>
                    <div>{data.usedPower}%</div>
                  </div>
                  <div className={styles.manageButton}>
                    <Button
                      height="36px"
                      width="100%"
                      color={
                        theme === "light"
                          ? "transparentWhite"
                          : "transparentBlack"
                      }
                      fontWeight="fw600"
                      onClick={() => {
                        open();
                        setWhichNetwork(data.network);
                        setWhichToken(data.token);
                      }}
                    >
                      Vote / Reset
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export { VoteGaugePhoneTitle, VoteGaugePhoneTable };
