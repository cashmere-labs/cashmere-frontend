import styles from "./DesktopTable.module.scss";
import { Icon, Tooltip, NetworkBadge } from "ui";
import { InfoIcon } from "assets/icons";
import { setWhichGlobalModal, setWhichPersonalModal } from "store/slicers/pool";
import { useDispatch, useSelector } from "react-redux";
import { NetworkTypes } from "ui/NetworkBadge/utils";
import { ModalController } from "hooks/useModal";

interface Table {
  whichPool?: boolean;
  bodyCount: number;
  modal: ModalController;
  datas: any;
}

interface Title {
  whichPool?: boolean;
}

const PoolDesktopTitle = ({ whichPool }: Title) => {
  return (
    <div className={styles.tableTitle}>
      <div className={styles.title1}>Name</div>
      <div className={styles.title2}>Network</div>
      <div className={styles.title3}>
        Co. Ratio{" "}
        <Tooltip placement="top" content="Content coming here">
          <Icon size={16}>
            <InfoIcon />
          </Icon>
        </Tooltip>
      </div>
      <div className={styles.title4}>Staked LP</div>
      <div className={styles.title5}>
        veAPR{" "}
        <Tooltip placement="top" content="Content coming here">
          <Icon size={16}>
            <InfoIcon />
          </Icon>
        </Tooltip>
      </div>
      <div className={styles.title6}>My APR</div>
      {whichPool === true && <div className={styles.title7}>Rewards</div>}
    </div>
  );
};

const PoolDesktopTable = ({ whichPool, bodyCount, modal, datas }: Table) => {
  const dispatch = useDispatch();
  const trial: any = useSelector((state: any) => state.pool.whichGlobalModal);
  return (
    <>
      {datas.map((data: any, i: number) => {
        if (i < bodyCount) {
          return (
            <div
              className={styles.tableBody}
              key={i}
              onClick={() => {
                modal.open();
                dispatch(setWhichPersonalModal(-1));
                dispatch(setWhichGlobalModal(i));
              }}
            >
              <div className={styles.line}></div>
              <div className={styles.datas}>
                <div className={styles.data1}>
                  <span className={styles.logoAndName}>
                    {data.logo && (
                      <img
                        style={{ width: "25px", marginRight: "14.5px" }}
                        src={data.logo}
                        alt="Logo"
                      ></img>
                    )}
                    <span>{data.name}</span>
                  </span>
                </div>
                <div className={styles.data2}>
                  <NetworkBadge
                    label={NetworkTypes.ETHEREUM}
                    className={styles.network}
                  />
                </div>
                <div className={styles.data3}>%{data.CR}</div>
                <div className={styles.data4}>%{data.stakedLP}</div>
                <div className={styles.data5}>{data.veAPR}%</div>
                <div className={styles.data6}>{data.myAPR}%</div>
                {whichPool === true && (
                  <div className={styles.data7}>
                    {data.rewards}%{" "}
                    {i === 0 && (
                      <Tooltip placement="top" content="Content coming here">
                        <Icon size={20} style={{ color: "#d3b200" }}>
                          <InfoIcon />
                        </Icon>
                      </Tooltip>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export { PoolDesktopTable, PoolDesktopTitle };
