import styles from "./DesktopTable.module.scss";
import { useTheme } from "hooks";
import { Button, NetworkBadge } from "ui";
import { Link } from "react-router-dom";
import { PATHS } from "constants/paths";
import { useEffect } from "react";

import { Lockers, MyLocks } from "types/app";

interface Table {
  whichValidator: boolean;
  validatorCount: number;
  datas: any;
}

interface Title {
  whichLockers: boolean;
}

const VeCSMTitle = ({ whichLockers }: Title) => {
  useEffect(() => console.log(whichLockers), [whichLockers]);
  return (
    <div className={styles.tableTitle}>
      <div
        className={styles.locker}
        style={whichLockers ? { width: "13.7%" } : { width: "18.6%" }}
      >
        Locker
      </div>
      {!whichLockers ? (
        <div className={styles.lockers}>
          <div className={styles.network}>Network</div>
          <div className={styles.totalLCSM}>Total Locked CSM</div>
          <div className={styles.weeklyFees}>Weekly Fees</div>
        </div>
      ) : (
        <div className={styles.myLocks}>
          <div className={styles.network}>Network</div>
          <div className={styles.weekly}>Weekly Fees</div>
          <div className={styles.claimableFees}>Claimable Fees</div>
          <div className={styles.myVotePower}>My Vote Power</div>
          <div className={styles.myLockedCSM}>My Locked CSM</div>
        </div>
      )}
      <div
        className={styles.manage}
        style={whichLockers ? { width: "250px" } : { width: "285px" }}
      ></div>
    </div>
  );
};

const Row = ({
  whichOne,
  data,
  i,
}: {
  whichOne: boolean;
  data: any;
  i: number;
}) => {
  const { theme } = useTheme();

  return (
    <div className={styles.tableBody} key={i}>
      <div className={styles.line}></div>
      <div className={styles.datas}>
        <div
          className={styles.number}
          style={whichOne ? { width: "12%" } : { width: "17%" }}
        >
          {data.id}
        </div>
        {!whichOne ? (
          <div className={styles.lockers}>
            <div className={styles.network}>
              {
                <NetworkBadge
                  label={data.network}
                  size={30}
                  style={{ width: "130px" }}
                />
              }
            </div>
            <div className={styles.totalLCSM}>{data.totalLockedCSM} veCSM</div>
            <div className={styles.weekly}>${data.weeklyFees}</div>
          </div>
        ) : (
          <div className={styles.myLocks}>
            <div className={styles.network}>
              {
                <NetworkBadge
                  label={data.network}
                  size={30}
                  style={{ width: "130px" }}
                />
              }
            </div>
            <div className={styles.weekly}>${data.weeklyFees}</div>
            <div className={styles.claimableFees}>${data.claimableFees}</div>
            <div className={styles.myVotePower}>{data.myVotePower} veCSM</div>
            <div className={styles.myLockedCSM}>{data.myLockedCSM} CSM</div>
          </div>
        )}
        {/* <div>{data.network}</div>
        <div>{data.votingPower} veCSM</div>
        <div>%{data.commission}</div> */}
        <div className={styles.manageButton} style={
          whichOne ? {paddingLeft: "30px"} : {paddingLeft: "40px"}
        }>
          <Link to={`${PATHS.manage}/${data.id}`}>
            <Button
              height="40px"
              width="156px"
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
              fontWeight="fw600"
            >
              Manage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const VeCSMDesktopTable = ({
  whichValidator,
  validatorCount,
  datas,
}: Table) => {
  return (
    <>
      {datas.map((data: Lockers | MyLocks, i: number) => {
        return (
          i < validatorCount && (
            <Row whichOne={whichValidator} data={data} i={i} key={data.id} />
          )
        );
      })}
    </>
  );
};

export { VeCSMDesktopTable, VeCSMTitle };
