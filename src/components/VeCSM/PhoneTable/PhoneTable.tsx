import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { ActiveValidators, InactiveValidators } from "../datas";
import { Button } from "ui";
import { Validator } from "types/app";
import { Link } from "react-router-dom";
import { PATHS } from "constants/paths";

interface Table {
  whichValidator: boolean;
  validatorCount: number;
}

const VeCSMPhoneTitle = () => {
  const titles = ["Rank", "Name", "Voting Power", "Comission"];

  return (
    <div className={styles.tableTitle}>
      {titles.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

const Row = ({ data, i }: { data: Validator; i: number }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.tableBody}>
      <div className={styles.line}></div>
      <div className={styles.datas}>
        <div>
          <div>{i + 1}</div>
          <div>{data.name}</div>
          <div>{data.votingPower} veCSM</div>
          <div>%{data.commission}</div>
        </div>
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

const VeCSMPhoneTable = ({ whichValidator, validatorCount }: Table) => {
  return (
    <>
      {whichValidator
        ? InactiveValidators.map((data, i) => {
            return (
              i < validatorCount && <Row key={data.id} i={i} data={data} />
            );
          })
        : ActiveValidators.map((data, i) => {
            return (
              i < validatorCount && <Row key={data.id} data={data} i={i} />
            );
          })}
    </>
  );
};

export { VeCSMPhoneTable, VeCSMPhoneTitle };
