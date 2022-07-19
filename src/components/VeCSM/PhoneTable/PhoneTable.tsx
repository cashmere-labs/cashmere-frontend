import styles from "./PhoneTable.module.scss";
import { useTheme } from "hooks";
import { ActiveValidators, InactiveValidators } from "../datas";
import { Button } from "ui";
import { Fragment } from "react";

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
                    <div>
                      <div>{i + 1}</div>
                      <div>{data.name}</div>
                      <div>{data.votingPower} veCSM</div>
                      <div>%{data.commission}</div>
                    </div>
                    <div>
                      <Button
                        height="40px"
                        width="156px"
                        color={
                          theme === "light"
                            ? "transparentWhite"
                            : "transparentBlack"
                        }
                        fontWeight="fw600"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return <Fragment key={i}></Fragment>;
            }
          })
        : ActiveValidators.map((data: any, i: number) => {
            if (i < validatorCount) {
              return (
                <div className={styles.tableBody} key={i}>
                  <div className={styles.line}></div>
                  <div className={styles.datas}>
                    <div>
                      <div>{i + 1}</div>
                      <div>{data.name}</div>
                      <div>{data.votingPower} veCSM</div>
                      <div>%{data.commission}</div>
                    </div>
                    <div>
                      <Button
                        height="40px"
                        width="156px"
                        color={
                          theme === "light"
                            ? "transparentWhite"
                            : "transparentBlack"
                        }
                        fontWeight="fw600"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return <Fragment key={i}></Fragment>;
            }
          })}
    </>
  );
};

export { VeCSMPhoneTable, VeCSMPhoneTitle };
