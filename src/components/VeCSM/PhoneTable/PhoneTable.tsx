import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { ActiveValidators, InactiveValidators } from "../datas";
import { Icon, Tooltip, Button } from "ui";

interface Table {
  whichValidator: boolean;
  validatorCount: number;
}

const VeCSMPhoneTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div>Rank</div>
      <div>Name</div>
      <div>Voting Power</div>
      <div>Commission</div>
    </div>
  );
};

const VeCSMPhoneTable = ({ whichValidator, validatorCount }: Table) => {
  const { theme } = useTheme();
  return (
    <>
      {whichValidator
        ? InactiveValidators.map((data: any, i: number) => {
            if (i < validatorCount) {
              return (
                <div className={styles.tableBody} key={i}>
                  <div className={styles.line}></div>
                  <div className={styles.datas}>
                    <div>{i + 1}</div>
                    <div>{data.name}</div>
                    <div>{data.votingPower} veCSM</div>
                    <div>%{data.commission}</div>
                    <div>
                      <Button
                        height="40px"
                        width="156px"
                        color={theme === "light" ? "transparentWhite" : "transparentBlack"}
                        fontWeight="fw600"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }
          })
        : ActiveValidators.map((data: any, i: number) => {
            if (i < validatorCount) {
              return (
                <div className={styles.tableBody} key={i}>
                  <div className={styles.line}></div>
                  <div className={styles.datas}>
                    <div>{i + 1}</div>
                    <div>{data.name}</div>
                    <div>{data.votingPower} veCSM</div>
                    <div>%{data.commission}</div>
                    <div>
                      <Button
                        height="40px"
                        width="156px"
                        color={theme === "light" ? "transparentWhite" : "transparentBlack"}
                        fontWeight="fw600"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
    </>
  );
};

export { VeCSMPhoneTable, VeCSMPhoneTitle };
