import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { useEffect, useState } from "react";
import DOWNBLACK from "assets/pool/down-icon-black.png";
import DOWNWHITE from "assets/pool/down-icon-white.png";
import { Icon, Tooltip, NetworkBadge } from "ui";
import { InfoIcon } from "assets/icons";
import { setWhichGlobalModal, setWhichPersonalModal } from "store/slicers/pool";
import { useDispatch } from "react-redux";
import { ModalController } from "hooks/useModal";
import { getBadgeProps } from "ui/NetworkBadge/utils";
interface Table {
  whichPool?: boolean;
  bodyCount: number;
  modal: ModalController;
  datas: any;
  filter: any;
  setWhichNetwork: any;
}

const PoolPhoneTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div>Name</div>
      <div>Network</div>
      <div className={styles.coRatio}>
        Co. Ratio
        <Tooltip placement="top" content="Content coming here">
          <Icon size={16}>
            <InfoIcon />
          </Icon>
        </Tooltip>
      </div>
    </div>
  );
};

const PoolPhoneTable = ({
  whichPool,
  bodyCount,
  modal,
  datas,
  filter,
  setWhichNetwork,
}: Table) => {
  const [bodyOpenGlobal, setBodyOpenGlobal] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    let firstArray = [];
    for (let i = 0; i < datas.length; i++) {
      firstArray[i] = false;
    }
    setBodyOpenGlobal(firstArray);
  }, [whichPool]);

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
      {datas.map((data: any, i: number) => {
        if (
          i < bodyCount &&
          filter.token === "All Tokens" &&
          filter.chain === "All Chains"
        ) {
          return (
            <div
              className={clsnm(
                bodyOpenGlobal[i] === true
                  ? styles.openIt
                  : styles.phoneTableWrapper
              )}
              style={
                bodyOpenGlobal[i] === true
                  ? whichPool
                    ? { height: "231px" }
                    : { height: "190px" }
                  : {}
              }
              key={i}
              onClick={() => {
                if (bodyOpenGlobal[i] === true) {
                  setWhichNetwork(data.network);
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
                  <div className={styles.network}>
                    <NetworkBadge
                      label={data.network}
                      className={styles.network}
                      size={26}
                    />
                  </div>
                  <div className={styles.cRatio}>
                    <span>{datas[i].CR} %</span>
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
                    <div className={styles.text1}>Staked LP</div>
                    <div>${data.stakedLP}</div>
                  </div>
                  <div className={styles.openData}>
                    <div className={styles.text1}>
                      VEAPR{" "}
                      <Tooltip placement="top" content="Content coming here">
                        <Icon size={12}>
                          <InfoIcon />
                        </Icon>
                      </Tooltip>
                    </div>
                    <div>${data.veAPR}</div>
                  </div>
                  <div className={styles.openData}>
                    <div className={styles.text1}>My APR</div>
                    <div>{data.myAPR}%</div>
                  </div>
                  {whichPool && (
                    <div className={styles.openData}>
                      <div className={styles.text1}>Rewards</div>
                      <div className={styles.toolTip}>
                        {data.rewards} CSM{" "}
                        <Tooltip placement="top" content="Content coming here">
                          <Icon size={16}>
                            <InfoIcon />
                          </Icon>
                        </Tooltip>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        } else if (
          (data.name === filter.token || filter.token === "All Tokens") &&
          (filter.chain === "All Chains" ||
            getBadgeProps(data.network).name === filter.chain)
        ) {
          return (
            <div
              className={clsnm(
                bodyOpenGlobal[i] === true
                  ? styles.openIt
                  : styles.phoneTableWrapper
              )}
              style={
                bodyOpenGlobal[i] === true
                  ? whichPool
                    ? { height: "231px" }
                    : { height: "190px" }
                  : {}
              }
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
                  <div className={styles.network}>
                    <NetworkBadge
                      label={data.network}
                      className={styles.network}
                      size={26}
                    />
                  </div>
                  <div className={styles.cRatio}>
                    <span>{datas[i].CR} %</span>
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
                    <div className={styles.text1}>Staked LP</div>
                    <div>${data.stakedLP}</div>
                  </div>
                  <div className={styles.openData}>
                    <div className={styles.text1}>
                      VEAPR{" "}
                      <Tooltip placement="top" content="Content coming here">
                        <Icon size={12}>
                          <InfoIcon />
                        </Icon>
                      </Tooltip>
                    </div>
                    <div>${data.veAPR}</div>
                  </div>
                  <div className={styles.openData}>
                    <div className={styles.text1}>My APR</div>
                    <div>{data.myAPR}%</div>
                  </div>
                  {whichPool && (
                    <div className={styles.openData}>
                      <div className={styles.text1}>Rewards</div>
                      <div className={styles.toolTip}>
                        {data.rewards} CSM{" "}
                        <Tooltip placement="top" content="Content coming here">
                          <Icon size={16}>
                            <InfoIcon />
                          </Icon>
                        </Tooltip>
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

interface Row {
  whichPool?: boolean;
  modal: ModalController;
  data: any;
  index: number;
  bodyOpenGlobal: any;
  setBodyOpenGlobal: any;
  updateMyArray: any;
}

const Row = ({
  whichPool,
  modal,
  data,
  index,
  bodyOpenGlobal,
  setBodyOpenGlobal,
  updateMyArray,
}: Row) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  return (
    <div
      className={clsnm(
        bodyOpenGlobal[index] === true
          ? styles.openIt
          : styles.phoneTableWrapper
      )}
      style={
        bodyOpenGlobal[index] === true
          ? whichPool
            ? { height: "231px" }
            : { height: "190px" }
          : {}
      }
      key={index}
      onClick={() => {
        if (bodyOpenGlobal[index] === true) {
          dispatch(setWhichPersonalModal(-1));
          dispatch(setWhichGlobalModal(index));
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
          <div className={styles.network}>
            <NetworkBadge
              label={data.network}
              className={styles.network}
              size={26}
            />
          </div>
          <div className={styles.cRatio}>
            <span>{data[index].CR} %</span>
          </div>
        </div>
        <img
          onClick={() =>
            updateMyArray(bodyOpenGlobal, setBodyOpenGlobal, index)
          }
          className={clsnm(
            styles.modalKey,
            bodyOpenGlobal[index] && styles.reverse
          )}
          src={theme === "light" ? DOWNBLACK : DOWNWHITE}
          alt="Down button"
        ></img>
      </div>
      {bodyOpenGlobal[index] === true && (
        <div className={styles.openDatas}>
          <div className={styles.openData}>
            <div className={styles.text1}>Staked LP</div>
            <div>${data.stakedLP}</div>
          </div>
          <div className={styles.openData}>
            <div className={styles.text1}>
              VEAPR{" "}
              <Tooltip placement="top" content="Content coming here">
                <Icon size={12}>
                  <InfoIcon />
                </Icon>
              </Tooltip>
            </div>
            <div>${data.veAPR}</div>
          </div>
          <div className={styles.openData}>
            <div className={styles.text1}>My APR</div>
            <div>{data.myAPR}%</div>
          </div>
          {whichPool && (
            <div className={styles.openData}>
              <div className={styles.text1}>Rewards</div>
              <div className={styles.toolTip}>
                {data.rewards} CSM{" "}
                <Tooltip placement="top" content="Content coming here">
                  <Icon size={16}>
                    <InfoIcon />
                  </Icon>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export { PoolPhoneTitle, PoolPhoneTable };
{
  /* <Row
              whichPool={whichPool}
              modal={modal}
              data={data}
              index={i}
              bodyOpenGlobal={bodyOpenGlobal}
              setBodyOpenGlobal={setBodyOpenGlobal}
            /> */
}
