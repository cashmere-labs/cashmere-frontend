import { clsnm } from "utils/clsnm";
import styles from "./ChooseValidator.module.scss";
import { useTheme, useVeCSMStates } from "hooks";
import { Button } from "ui";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const ChooseValidator = () => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 650px)",
  });
  const minWidth = useMediaQuery({
    query: "(max-width: 350px)",
  });
  const { resetValidatorCount, changeIsActive } =
    useVeCSMStates();
  const isActive = useSelector((state: any) => state.veCSM.isActive);
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.whichValidatorWrapper}>
        <div className={styles.buttons}>
          <Button
            height={isPhoneOrPC ? ("36px") : "46px"}
            width={isPhoneOrPC ? ("102px") : "204px"}
            fontSize={isPhoneOrPC ? ("fs14") : "fs18"}
            onClick={() => {
              changeIsActive(false);
              resetValidatorCount();
            }}
            color={theme === "light" ? "white" : "white"}
            className={clsnm(
              isActive ? styles.poolButtonOff : styles.poolButtonOn
            )}
            fontWeight={isActive ? "fw500" : "fw600"}
            lineHeight="lhNormal"
          >
            Active Validators
          </Button>
          <Button
            height={isPhoneOrPC ? ("36px") : "46px"}
            width={isPhoneOrPC ? ("102px") : "204px"}
            fontSize={isPhoneOrPC ? ("fs14") : "fs18"}
            onClick={() => {
              changeIsActive(true);
              resetValidatorCount();
            }}
            color={theme === "light" ? "white" : "white"}
            className={clsnm(
              !isActive ? styles.poolButtonOff : styles.poolButtonOn
            )}
            fontWeight={!isActive ? "fw500" : "fw600"}
            lineHeight="lhNormal"
          >
            Inactive Validators
          </Button>
        </div>
        <div
          className={styles.BecomeValidator}
          onClick={() => {
            console.log("Become a Validator!");
          }}
        >
          Become a Validator
        </div>
      </div>
    </div>
  );
};

export { ChooseValidator };
