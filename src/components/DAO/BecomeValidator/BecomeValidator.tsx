import { InfoIcon } from "assets/icons";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";
import { ethers } from "ethers";
import { useTheme } from "hooks";
import { useFormValidator } from "hooks/useFormValidator";
import { ModalController } from "hooks/useModal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Icon, Input, Modal, Tooltip } from "ui";
import { isValidNumberInput } from "utils/isValidNumberInput";

import styles from "./BecomeValidator.module.scss";

const BecomeValidator = ({
  modal,
  onSuccess,
}: {
  modal: ModalController;
  onSuccess: () => void;
}) => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 950px)",
  });
  const { validator, setErrors, errors } = useFormValidator();

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

  const [from, setFrom] = useState("");
  const [rate, setRate] = useState("");
  const [leftAmount, setLeftAmount] = useState<string>("");
  const [rightAmount, setRightAmount] = useState<string>("");

  const onSubmit = () => {
    if (from.trim() === "" || !ethers.utils.isAddress(from)) {
      validator.setError("from", "Invalid address");
    }
    if (rate.trim() === "") {
      validator.setError("rate", "Please enter a valid rate");
    }
    if (leftAmount.trim() === "") {
      validator.setError("leftAmount", "Enter amount");
    }
    // TODO: Replace 100 with real balance
    if (Number(leftAmount) > 100) {
      validator.setError("leftAmount", "Insufficient balance");
    }
    if (rightAmount.trim() === "") {
      validator.setError("rightAmount", "Enter amount");
    }
    // TODO: Replace 100 with real balance
    if (Number(rightAmount) > 100) {
      validator.setError("rightAmount", "Insufficient balance");
    }

    if (validator.hasError()) {
      setErrors(validator.errors);
      validator.clearErrors();
    } else {
      onSuccess?.();
      setErrors({});
    }
  };

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
        <Input
          error={errors.from}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          height={"60px"}
        />
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
          error={errors.rate}
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Commission Rate"
          height={"60px"}
        />
      </div>
      {!isPhoneOrLaptop ? (
        <div className={styles.body}>
          <div>
            <div className={styles.csmInput}>
              <span className={styles.balance}>BALANCE 24689.905</span>
              <div className={styles.insideBox}>
                <div className={styles.logo}>
                  <img
                    src={theme === "light" ? LOGOBLACK : LOGOWHITE}
                    style={{ width: "24px", height: "24px" }}
                  ></img>
                  <span style={{ marginLeft: "9px", marginRight: "5px" }}>
                    CSM
                  </span>
                </div>
                <div className={styles.input}>
                  <Input
                    absoluteError
                    value={leftAmount}
                    error={errors.leftAmount}
                    onChange={(e) => {
                      if (!isValidNumberInput(e.target.value)) {
                        return;
                      }
                      setLeftAmount(e.target.value);
                    }}
                    placeholder="Amount"
                    height={"56px"}
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
                    value={rightAmount}
                    onChange={(e) => {
                      if (!isValidNumberInput(e.target.value)) {
                        return;
                      }
                      setRightAmount(e.target.value);
                    }}
                    absoluteError
                    error={errors.rightAmount}
                    placeholder="Amount"
                    height={"56px"}
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
                width={"100%"}
                style={{ maxWidth: "355px", minWidth: "250px" }}
                height={"40px"}
                color={theme === "light" ? "gray" : "transparentBlack"}
              >
                LOCK {"&"} BECOME VALIDATOR
              </Button>
            </div>
          </div>
          <div
            className={styles.duration}
            style={{
              marginTop:
                errors.leftAmount != null || errors.rightAmount != null
                  ? "40px"
                  : undefined,
            }}
          >
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
      ) : (
        <div className={styles.phoneBody}>
          <div className={styles.csmInput}>
            <div className={styles.balance}> BALANCE 24689.905</div>
            <div className={styles.inputBox}>
              <div className={styles.logo}>
                <img
                  src={theme === "light" ? LOGOBLACK : LOGOWHITE}
                  style={{ width: "22px", height: "22px" }}
                ></img>
                <span>CSM</span>
              </div>
              <div className={styles.input}>
                <Input
                  absoluteError
                  value={leftAmount}
                  error={errors.leftAmount}
                  onChange={(e) => {
                    if (!isValidNumberInput(e.target.value)) {
                      return;
                    }
                    setLeftAmount(e.target.value);
                  }}
                  placeholder="Amount"
                  height={"59px"}
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
            <div className={styles.initialVeCSM}>INITIAL VECSM</div>
            <div className={styles.inputBox}>
              <div className={styles.logo}>
                <img
                  src={theme === "light" ? LOGOBLACK : LOGOWHITE}
                  style={{ width: "24px", height: "24px" }}
                ></img>
                <span>veCSM</span>
              </div>
              <div className={styles.input}>
                <Input
                  absoluteError
                  value={rightAmount}
                  error={errors.rightAmount}
                  onChange={(e) => {
                    if (!isValidNumberInput(e.target.value)) {
                      return;
                    }
                    setRightAmount(e.target.value);
                  }}
                  placeholder="Amount"
                  height={"71px"}
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

          <div
            className={styles.lockButton}
            style={{
              marginTop: errors.rightAmount != null ? "40px" : undefined,
            }}
          >
            <Button
              width={"100%"}
              style={{ maxWidth: "885px" }}
              height={"48px"}
              color={theme === "light" ? "gray" : "transparentBlack"}
            >
              LOCK {"&"} BECOME VALIDATOR
            </Button>
          </div>

          <div className={styles.duration}>
            {durations.map((duration: string, i: number) => {
              return (
                <Button
                  key={i}
                  width="86px"
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
      )}
      <div className={styles.submit}>
        <Button
          onClick={onSubmit}
          width={"100%"}
          height={isPhoneOrLaptop ? "34px" : "56px"}
          color={theme === "light" ? "black" : "white"}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export { BecomeValidator };
