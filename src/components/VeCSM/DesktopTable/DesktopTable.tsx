import styles from "./DesktopTable.module.scss";
import { useTheme } from "hooks";
import { ActiveValidators, InactiveValidators } from "../datas";
import { Button } from "ui";
import { Link } from "react-router-dom";
import { PATHS } from "constants/paths";
import { Validator } from "types/app";

interface Table {
  whichValidator: boolean;
  validatorCount: number;
}

const VeCSMDesktopTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div>Rank</div>
      <div>Name</div>
      <div>Voting Power</div>
      <div>Commission</div>
      <div></div>
    </div>
  );
};

const Row = ({ data, i }: { data: Validator; i: number }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.tableBody} key={i}>
      <div className={styles.line}></div>
      <div className={styles.datas}>
        <div>{i + 1}</div>
        <div>{data.name}</div>
        <div>{data.votingPower} veCSM</div>
        <div>%{data.commission}</div>
        <div>
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

const VeCSMDesktopTable = ({ whichValidator, validatorCount }: Table) => {
  return (
    <>
      {whichValidator
        ? InactiveValidators.map((data, i) => {
            return (
              i < validatorCount && <Row data={data} i={i} key={data.id} />
            );
          })
        : ActiveValidators.map((data: any, i: number) => {
            return (
              i < validatorCount && <Row data={data} i={i} key={data.id} />
            );
          })}
    </>
  );
};

export { VeCSMDesktopTable, VeCSMDesktopTitle };
