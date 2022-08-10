import styles from "./UpperBox.module.scss";
import { useMediaQuery } from "react-responsive";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";
import { useTheme, useModal } from "hooks";
import { Icon, Tooltip, Input, Button, Modal } from "ui";
import { useState } from "react";
import { clsnm } from "utils/clsnm";
import { InfoIcon } from "assets/icons";
import { FaChevronDown } from "react-icons/fa";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import { Waiting } from "components";

const UpperBox = () => {
  const { theme } = useTheme();

  const lockAndWithdrawModal = useModal();
  const [functionName, setFunctionName] = useState("");
  const [csmValue, setCSMValue] = useState("");
  const [veCSMValue, setveCSMValue] = useState("");
  const [whichValue, setWhichValue] = useState(0);

  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const [whichTime, setWhichTime] = useState(0);
  const durations = [
    "1 Week",
    "1 Month",
    "3 Month",
    "1 Year",
    "2 Years",
    "4 Years",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstRow}>
        <div className={styles.csm}>
          <div className={styles.title}>BALANCE 23689.905</div>
          <div className={styles.box}>
            <div className={styles.pattern}>
              <img
                className={styles.image}
                src={theme === "light" ? LOGOBLACK : LOGOWHITE}
              ></img>
              <div className={styles.text}>CSM</div>
            </div>
            <div className={styles.button}>
              <Button
                width={"45px"}
                height="25px"
                fontSize="fs12"
                fontWeight="fw600"
                color={theme === "light" ? "white" : "white"}
              >
                MAX
              </Button>
            </div>
            <div className={styles.input}>
              <Input
                extendLeft
                placeholder="Amount"
                height={isPhoneOrPC ? "55px" : "71px"}
                onChange={(e) => setCSMValue(e.target.value.toString())}
              />
            </div>
          </div>
        </div>
        <div className={styles.veCSM}>
          <div className={styles.title}>INITIAL VECSM </div>
          <div className={styles.box}>
            <div className={styles.pattern}>
              <img
                className={styles.image}
                src={theme === "light" ? LOGOBLACK : LOGOWHITE}
              ></img>
              <div className={styles.text}>veCSM</div>
            </div>
            <div className={styles.button}>
              <Button
                width={"45px"}
                height="25px"
                fontSize="fs12"
                fontWeight="fw600"
                color={theme === "light" ? "white" : "white"}
              >
                MAX
              </Button>
            </div>
            <div className={styles.input}>
              <Input
                extendLeft
                placeholder="Amount"
                height={isPhoneOrPC ? "55px" : "71px"}
                onChange={(e) => setveCSMValue(e.target.value.toString())}
              />
            </div>
          </div>
        </div>
        <div className={styles.result}>
          <div className={styles.title}>
            AVERAGE LOCK TIME: <span>3.63 YEARS</span>
          </div>
          <div className={styles.buttons}>
            <Button
              width={"100%"}
              height="40px"
              fontWeight="fw600"
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
              onClick={()=>{
                lockAndWithdrawModal.open()
                setWhichValue(0)
                setFunctionName("Lock")
              }}
            >
              Lock
            </Button>
            <Button
              width={"100%"}
              height="40px"
              fontWeight="fw600"
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
              onClick={()=>{
                lockAndWithdrawModal.open()
                setWhichValue(1)
                setFunctionName("Withdraw")
              }}
            >
              Withdraw
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.optionButtons}>
          {durations.map((duration: string, i: number) => {
            return (
              <div
                key={i}
                onClick={() => setWhichTime(i)}
                className={clsnm(
                  styles.option,
                  whichTime === i && styles.thisOne
                )}
              >
                {duration}
              </div>
            );
          })}
        </div>
        <div className={styles.customTime}>
          <div className={styles.time}>
            <div className={styles.textt}>
              <div>END DATE: </div>
              <Tooltip placement="top" content="Content coming here">
                <Icon size={16}>
                  <InfoIcon />
                </Icon>
              </Tooltip>
            </div>
            <div className={styles.set}>
              <Calender />
              <span className={styles.icon}>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <div className={styles.text}>Increase Lock</div>
        </div>
      </div>

      <Modal
        isOpen={lockAndWithdrawModal.isOpen}
        close={() => {
          lockAndWithdrawModal.close();
        }}
      >
        <Waiting
          value={whichValue === 0 ? csmValue : veCSMValue}
          iconName={whichValue === 0 ? "CSM" : "veCSM"}
          icon={null}
          functionName={functionName}
        />
      </Modal>
    </div>
  );
};

const Calender = () => {
  const [day, setDay] = useState<DayValue>(null);
  const date = new Date();
  const currentDate =
    date.getDay().toString() +
    "/" +
    date.getMonth().toString() +
    "/" +
    date.getFullYear().toString();
  const renderCustomInput = ({ ref }: any) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder={currentDate}
      value={day ? `${day.day}/${day.month}/${day.year}` : ""}
      className={styles.calender} // a styling class
    />
  );
  return (
    <>
      <DatePicker
        value={day}
        inputPlaceholder={currentDate}
        onChange={setDay}
        renderInput={renderCustomInput}
        calendarClassName={styles.calendarResponsive}
      />
    </>
  );
};

export { UpperBox };
