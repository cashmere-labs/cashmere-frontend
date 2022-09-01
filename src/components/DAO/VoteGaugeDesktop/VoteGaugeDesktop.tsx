import styles from "./VoteGaugeDesktop.module.scss";
import { useTheme } from "hooks";
import { Button, NetworkBadge } from "ui";
import { Link } from "react-router-dom";
import { PATHS } from "constants/paths";
import { VOTEGAUGE } from "../VoteGauge/datas";

interface Table {
  datas: any;
  open: () => void;
  setWhichNetwork: any;
}

const VoteGaugeDesktopTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div className={styles.gauge}>Gauge</div>
      <div className={styles.network}>Network</div>
      <div className={styles.totalVotedveCSM}>Total Voted veCSM</div>
      <div className={styles.currentAPY}>Current APY</div>
      <div className={styles.futureAPY}>Future APY</div>
      <div className={styles.usedPower}>Used Power</div>
      <div className={styles.manage}></div>
    </div>
  );
};

const Row = ({
  data,
  i,
  open,
  setWhichNetwork,
}: {
  data: any;
  i: number;
  open: () => void;
  setWhichNetwork: any;
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={styles.tableBody}
      key={i}
      style={
        VOTEGAUGE.length - 1 === i
          ? { borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px" }
          : {}
      }
    >
      <div className={styles.line}></div>
      <div className={styles.datas}>
        <div className={styles.logo}>
          <img src={data.logo}></img>
          <div className={styles.name}>{data.name}</div>
        </div>
        <div className={styles.network}>
          {<NetworkBadge label={data.network} size={30} />}
        </div>
        <div className={styles.totalVotedveCSM}>
          {data.totalVotedveCSM} veCSM
        </div>
        <div className={styles.currentAPY}>{data.currentAPY}%</div>
        <div className={styles.futureAPY}>{data.futureAPY}%</div>
        <div className={styles.usedPower}>
          <div>{data.usedPower}%</div>
        </div>
        <div className={styles.voteButton}>
          <Button
            height="40px"
            width="156px"
            color={theme === "light" ? "transparentWhite" : "transparentBlack"}
            fontWeight="fw600"
            onClick={() => {
              open();
              setWhichNetwork(data.network);
            }}
          >
            Vote / Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

const VoteGaugeDesktopTable = ({ datas, open, setWhichNetwork }: Table) => {
  return (
    <div className={styles.table}>
      {datas.map((data: any, i: number) => {
        return (
          <Row
            data={data}
            i={i}
            open={open}
            setWhichNetwork={setWhichNetwork}
          />
        );
      })}
    </div>
  );
};

export { VoteGaugeDesktopTitle, VoteGaugeDesktopTable };
