import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { Button } from "ui";
import { Link } from "react-router-dom";
import { PATHS } from "constants/paths";

interface Table {
  whichValidator: boolean;
  validatorCount: number;
  datas: any;
}

const VeCSMPhoneTitle = () => {
  const titles = ["Rank", "Name", "Voting Power", "Comission"];

  return (
    <div className={styles.tableTitle}>
      {/* {titles.map((item, i) => (
        <div key={i}>{item}</div>
      ))} */}
    </div>
  );
};

const Row = ({ data, i }: { data: any; i: number }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.tableBody}>
      <div className={styles.line}></div>
      <div className={styles.datas}>
        <div>
          <div>{data.id}</div>
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

const VeCSMPhoneTable = ({ whichValidator, validatorCount, datas }: Table) => {
  return (
    <>
      {datas.map((data: any, i: number) => {
        return i < validatorCount && <Row key={data.id} data={data} i={i} />;
      })}
    </>
  );
};

export { VeCSMPhoneTable, VeCSMPhoneTitle };
