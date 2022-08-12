import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { useEffect, useState } from "react";
import { PersonalData, GlobalData } from "../datas";
import DOWNBLACK from "assets/pool/down-icon-black.png";
import DOWNWHITE from "assets/pool/down-icon-white.png";
import { Icon, Tooltip } from "ui";
import { InfoIcon } from "assets/icons";
import { setWhichGlobalModal, setWhichPersonalModal } from "store/slicers/pool";
import { useDispatch } from "react-redux";
import { ModalController } from "hooks/useModal";

interface Table {
  whichPool?: boolean;
  bodyCount: number;
  modal: ModalController;
}

const PoolPhoneTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div>Name</div>
    </div>
  );
};

const PoolPhoneTable = ({ whichPool, bodyCount, modal }: Table) => {
  const [bodyOpenGlobal, setBodyOpenGlobal] = useState<{
    [key: number]: boolean;
  }>({});
  const [bodyOpenPersonal, setBodyOpenPersonal] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    let firstArray = [];
    for (let i = 0; i < GlobalData.length; i++) {
      firstArray[i] = false;
    }
    setBodyOpenGlobal(firstArray);

    firstArray = [];
    for (let i = 0; i < PersonalData.length; i++) {
      firstArray[i] = false;
    }
    setBodyOpenPersonal(firstArray);
  }, []);

  const updateMyArray = (
    oldArray: any,
    setOldArray: any,
    whichIndex: number
  ) => {
    let x: boolean = oldArray[whichIndex];
    setOldArray((items: any) => {
      return items.map((item: any, i: number) => {
        return whichIndex === i ? !item : item;
      });
    });
  };
  const { theme } = useTheme();
  const dispatch = useDispatch();
  return (
    <>
      {!whichPool
        ? GlobalData.map((data, i) => {
            if (i < bodyCount) {
              return (
                <div
                  className={clsnm(
                    bodyOpenGlobal[i] === true
                      ? styles.openIt
                      : styles.phoneTableWrapper
                  )}
                  key={i}
                  onClick={() => {
                    if (bodyOpenGlobal[i] === true) {
                      dispatch(setWhichPersonalModal(-1));
                      dispatch(setWhichGlobalModal(i));
                      modal.open();
                    }
                  }}
                >
                  <div className={styles.line}></div>
                  <div className={styles.titles}>
                    <div className={styles.title}>
                      <div className={styles.logoAndName}>
                        {data.logo && (
                          <img
                            style={{ width: "25px", marginRight: "8.5px" }}
                            src={data.logo}
                            alt="Logo"
                          ></img>
                        )}
                        <span className={styles.name}>{data.name}</span>
                      </div>
                      <div className={styles.cRatio}>
                        <span>Compensation Ratio: %154.89</span>
                        <Tooltip placement="top" content="Content coming here">
                          <Icon size={16}>
                            <InfoIcon />
                          </Icon>
                        </Tooltip>
                      </div>
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
                      <div className={styles.openData}>
                        <div className={styles.text1}>Network</div>
                        <div>{data.network}</div>
                      </div>
                      <div className={styles.openData}>
                        <div className={styles.text1}>Liquidity</div>
                        <div>${data.liquidity}</div>
                      </div>
                      <div className={styles.openData}>
                        <div className={styles.text1}>Volume (24h)</div>
                        <div>${data.volume}</div>
                      </div>
                      <div className={styles.openData}>
                        <div className={styles.text1}>
                          VEAPR{" "}
                          <Tooltip
                            placement="top"
                            content="Content coming here"
                          >
                            <Icon size={16}>
                              <InfoIcon />
                            </Icon>
                          </Tooltip>
                        </div>
                        <div>{data.veapr}%</div>
                      </div>
                      <div className={styles.openData}>
                        <div className={styles.text1}>My Total APR</div>
                        <div>{data.myTotalApr}%</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          })
        : PersonalData.map((data, i) => {
            if (i < bodyCount) {
              if (bodyOpenPersonal[i]) {
                return (
                  <div
                    className={clsnm(
                      bodyOpenPersonal[i] === true
                        ? styles.openIt
                        : styles.phoneTableWrapper
                    )}
                    key={i}
                    onClick={() => {
                      if (bodyOpenPersonal[i] === true) {
                        dispatch(setWhichPersonalModal(-1));
                        dispatch(setWhichGlobalModal(i));
                        modal.open();
                      }
                    }}
                  >
                    <div className={styles.line}></div>
                    <div className={styles.titles}>
                      <div className={styles.title}>
                        <div className={styles.logoAndName}>
                          {data.logo && (
                            <img
                              style={{ width: "25px", marginRight: "8.5px" }}
                              src={data.logo}
                              alt="Logo"
                            ></img>
                          )}
                          <span>{data.name}</span>
                        </div>
                        <div className={styles.cRatio}>
                          <span>Compensation Ratio: %154.89</span>
                          <Tooltip
                            placement="top"
                            content="Content coming here"
                          >
                            <Icon size={16}>
                              <InfoIcon />
                            </Icon>
                          </Tooltip>
                        </div>
                      </div>
                      <img
                        onClick={() =>
                          updateMyArray(
                            bodyOpenPersonal,
                            setBodyOpenPersonal,
                            i
                          )
                        }
                        className={clsnm(
                          styles.modalKey,
                          bodyOpenPersonal[i] && styles.reverse
                        )}
                        src={theme === "light" ? DOWNBLACK : DOWNWHITE}
                        alt="down button"
                      ></img>
                    </div>
                    {bodyOpenPersonal[i] === true && (
                      <div className={styles.openDatas}>
                        <div className={styles.openData}>
                          <div className={styles.text1}>Network</div>
                          <div>{data.network}</div>
                        </div>
                        <div className={styles.openData}>
                          <div className={styles.text1}>Liquidity</div>
                          <div>${data.liquidity}</div>
                        </div>
                        <div className={styles.openData}>
                          <div className={styles.text1}>Volume (24h)</div>
                          <div>${data.volume}</div>
                        </div>
                        <div className={styles.openData}>
                          <div className={styles.text1}>
                            VEAPR{" "}
                            <Tooltip
                              placement="top"
                              content="Content coming here"
                            >
                              <Icon size={14}>
                                <InfoIcon />
                              </Icon>
                            </Tooltip>
                          </div>
                          <div>{data.veapr}%</div>
                        </div>
                        <div className={styles.openData}>
                          <div className={styles.text1}>My Total APR</div>
                          <div>{data.myTotalApr}%</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <div
                    className={clsnm(
                      styles.phoneTableWrapper,
                      bodyOpenPersonal[i] === true && styles.openIt
                    )}
                    key={i}
                  >
                    <div className={styles.line}></div>
                    <div className={styles.titles}>
                      <div className={styles.title}>
                        <div className={styles.logoAndName}>
                          {data.logo && (
                            <img
                              style={{ width: "25px", marginRight: "8.5px" }}
                              src={data.logo}
                              alt="Logo"
                            ></img>
                          )}
                          <span>{data.name}</span>
                        </div>
                        <div className={styles.cRatio}>
                          <span>Compensation Ratio: %154.89</span>
                          <Tooltip
                            placement="top"
                            content="Content coming here"
                          >
                            <Icon size={16}>
                              <InfoIcon />
                            </Icon>
                          </Tooltip>
                        </div>
                      </div>
                      <img
                        onClick={() =>
                          updateMyArray(
                            bodyOpenPersonal,
                            setBodyOpenPersonal,
                            i
                          )
                        }
                        className={clsnm(
                          styles.modalKey,
                          bodyOpenPersonal[i] && styles.reverse
                        )}
                        src={theme === "light" ? DOWNBLACK : DOWNWHITE}
                        alt="down button"
                      ></img>
                    </div>
                  </div>
                );
              }
            }
          })}
    </>
  );
};

export { PoolPhoneTitle, PoolPhoneTable };
