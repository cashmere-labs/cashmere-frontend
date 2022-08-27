import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { useEffect, useState } from "react";
import DOWNBLACK from "assets/pool/down-icon-black.png";
import DOWNWHITE from "assets/pool/down-icon-white.png";
import { Icon, Tooltip, NetworkBadge, Button } from "ui";
import { InfoIcon } from "assets/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "constants/paths";
import { useMediaQuery } from "react-responsive";

interface Table {
  whichLocker?: boolean;
  bodyCount: number;
  datas: any;
}

const VeCSMPhoneTitle = ({ whichLockers }: { whichLockers: boolean }) => {
  return (
    <div className={styles.tableTitle}>
      <div className={styles.locker}>Locker</div>
      <div className={styles.network}>Network</div>
      {!whichLockers ? (
        <div className={styles.totalLockedCSM}>Total Locked CSM</div>
      ) : (
        <div className={styles.weeklyFees}>Weekly Fees</div>
      )}
    </div>
  );
};

const VeCSMPhoneTable = ({ whichLocker, bodyCount, datas }: Table) => {
  const miniPhone = useMediaQuery({
    query: "(max-width: 340px)",
  });

  const [bodyOpenGlobal, setBodyOpenGlobal] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    let firstArray = [];
    for (let i = 0; i < datas.length; i++) {
      firstArray[i] = false;
    }
    setBodyOpenGlobal(firstArray);
  }, [whichLocker]);

  const updateMyArray = (
    oldArray: any,
    setOldArray: any,
    whichIndex: number
  ) => {
    let x: boolean = oldArray[whichIndex];
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
        if (i < bodyCount) {
          return (
            <div
              className={clsnm(
                bodyOpenGlobal[i] === true
                  ? styles.openIt
                  : styles.phoneTableWrapper
              )}
              style={
                bodyOpenGlobal[i] === true
                  ? whichLocker
                    ? { height: "231px" }
                    : { height: "180px" }
                  : {}
              }
              key={i}
              onClick={() => {}}
            >
              <div className={styles.line}></div>
              <div className={styles.titles}>
                <div className={styles.title}>
                  <div className={styles.logoAndName}>
                    <span className={styles.name}>{data.id}</span>
                  </div>
                  <div className={styles.network}>
                    <NetworkBadge
                      label={data.network}
                      className={styles.network}
                      size={miniPhone ? 22 : 26}
                      fontSize={miniPhone ? "14px" : "16px"}
                      style={
                        miniPhone ? { width: "106px" } : { width: "126px" }
                      }
                    />
                  </div>
                  {!whichLocker ? (
                    <div className={styles.totalLockedCSM}>
                      {data.totalLockedCSM} veCSM
                    </div>
                  ) : (
                    <div className={styles.weeklyFees}>${data.weeklyFees}</div>
                  )}
                </div>
                <img
                  onClick={() =>
                    updateMyArray(bodyOpenGlobal, setBodyOpenGlobal, i)
                  }
                  className={clsnm(
                    styles.modalKey,
                    bodyOpenGlobal[i] && styles.reverse
                  )}
                  src={theme === "light" ? DOWNBLACK : DOWNWHITE}
                  alt="Down button"
                ></img>
              </div>
              {bodyOpenGlobal[i] === true && (
                <div className={styles.openDatas}>
                  {!whichLocker ? (
                    <div className={styles.lockers}>
                      <div className={styles.openData}>
                        <div className={styles.text1}>Weekly Fees</div>
                        <div>${data.weeklyFees}</div>
                      </div>
                      <div className={styles.manageButton}>
                        <Link to={`${PATHS.manage}/${data.id}`}>
                          <Button
                            height="36px"
                            width="100%"
                            color={
                              theme === "light"
                                ? "transparentWhite"
                                : "transparentBlack"
                            }
                            fontWeight="fw600"
                          >
                            Manage
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.myLocks}>
                      <div className={styles.openData}>
                        <div className={styles.text1}>Claimable Fees</div>
                        <div>${data.claimableFees}</div>
                      </div>

                      <div className={styles.openData}>
                        <div className={styles.text1}>My Vote Power</div>
                        <div>{data.myVotePower} veCSM</div>
                      </div>
                      <div className={styles.openData}>
                        <div className={styles.text1}>My Locked CSM</div>
                        <div>{data.myLockedCSM} CSM</div>
                      </div>
                      <div className={styles.manageButton}>
                        <Link to={`${PATHS.manage}/${data.id}`}>
                          <Button
                            height="36px"
                            width="100%"
                            color={
                              theme === "light"
                                ? "transparentWhite"
                                : "transparentBlack"
                            }
                            fontWeight="fw600"
                          >
                            Manage
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export { VeCSMPhoneTitle, VeCSMPhoneTable };
