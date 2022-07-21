import styles from "./BecomeValidator.module.scss";
import { Button, Modal, Input, Select, Option, Tooltip, Icon } from "ui";
import { ModalController } from "hooks/useModal";
import { useTheme } from "hooks";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";
import { InfoIcon } from "assets/icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const BecomeValidator = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const durations = [
    "1 Week",
    "1 Month",
    "3 Month",
    "1 Year",
    "2 Year",
    "4 Year",
    "5 Year",
    "6 Year",
    "7 Year",
  ];

  const [whichDuration, setWhichDuration] = useState<number>(0);

  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Become Validator</div>
      <div className={styles.from}>
        <div>
          <span>From</span>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <Input placeholder="From" height={isPhoneOrLaptop ? "59px" : "71px"} />
      </div>
      <div className={styles.commissionRate}>
        <div>
          <span>Commission Rate</span>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <Input
          placeholder="Commission Rate"
          height={isPhoneOrLaptop ? "59px" : "71px"}
        />
      </div>
      <div className={styles.body}>
        <div>
          <div className={styles.csmInput}>
            <span className={styles.balance}>BALANCE 24689.905</span>
            <div className={styles.insideBox}>
              <div className={styles.logo}>
                <img
                  src={theme === "light" ? LOGOBLACK : LOGOWHITE}
                  style={{ width: "24px", height: "24px" }}
                ></img>{" "}
                <span style={{ marginLeft: "9px", marginRight: "5px" }}>
                  CSM
                </span>
              </div>
              <div className={styles.input}>
                <Input
                  placeholder="Amount"
                  height={isPhoneOrLaptop ? "22px" : "71px"}
                  style={{ maxWidth: "217px", width: "100%" }}
                />
              </div>
              <div className={styles.maxButton}>
                <Button
                  width="45px"
                  height="25px"
                  color={theme === "light" ? "transparentWhite" : "white"}
                >
                  Max
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.vecsmInput}>
            <span className={styles.balance}>INITIAL VECSM</span>
            <div className={styles.insideBox}>
              <div className={styles.logo}>
                <img
                  src={theme === "light" ? LOGOBLACK : LOGOWHITE}
                  style={{ width: "24px", height: "24px" }}
                ></img>{" "}
                <span style={{ marginLeft: "9px", marginRight: "5px" }}>
                  veCSM
                </span>
              </div>
              <div className={styles.input}>
                <Input
                  placeholder="Amount"
                  height={isPhoneOrLaptop ? "22px" : "71px"}
                  style={{ maxWidth: "217px", width: "100%" }}
                />
              </div>
              <div className={styles.maxButton}>
                <Button
                  width="45px"
                  height="25px"
                  color={theme === "light" ? "transparentWhite" : "white"}
                >
                  Max
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.lockButton}>
            <Button
              width={isPhoneOrLaptop ? "136px" : "100%"}
              style={{maxWidth: "355px", minWidth: "250px"}}
              height={isPhoneOrLaptop ? "34px" : "48px"}
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
            >
              LOCK {"&"} BECOME VALIDATOR
            </Button>
          </div>
        </div>
        <div className={styles.duration}>
          {durations.map((duration: string, i: number) => {
            return (
              <Button
                key={i}
                width="110px"
                height="46px"
                color={
                  theme === "light" ? "transparentWhite" : "transparentBlack"
                }
                onClick={() => setWhichDuration(i)}
                className={i === whichDuration ? styles.active : styles.none}
              >
                <span> {duration}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export { BecomeValidator };
