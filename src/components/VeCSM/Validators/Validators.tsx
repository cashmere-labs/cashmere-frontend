import styles from "./Validators.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { ActiveValidators, InactiveValidators } from "../datas";
import { useMediaQuery } from "react-responsive";
import { Button } from "ui";
import { useSelector } from "react-redux";
import { useVeCSMStates } from "hooks";
import {
  VeCSMDesktopTable,
  VeCSMDesktopTitle,
  VeCSMPhoneTable,
  VeCSMPhoneTitle,
} from "components";

const Validators = () => {
  const whichValidator = useSelector(
    (state: any) => state.veCSM.isActive
  );
  const validatorCount = useSelector(
    (state: any) => state.veCSM.validatorCount
  );

  const { increaseValidatorCount } = useVeCSMStates();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
        {isPhoneOrLaptop ? <VeCSMPhoneTitle /> : <VeCSMDesktopTitle />}
        {isPhoneOrLaptop ? (
          <VeCSMPhoneTable
            whichValidator={whichValidator}
            validatorCount={validatorCount}
          />
        ) : (
          <VeCSMDesktopTable
            whichValidator={whichValidator}
            validatorCount={validatorCount}
          />
        )}
      </div>
      <div className={styles.footer}>
        The base emission rate is currently 1.5 CSM per second.
      </div>
      {whichValidator
        ? InactiveValidators.length > validatorCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                onClick={() => increaseValidatorCount()}
                color={theme === "light" ? "black" : "white"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black
                )}
              >
                more
              </Button>
            </div>
          )
        : ActiveValidators.length > validatorCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                fontSize="fs16"
                onClick={() => increaseValidatorCount()}
                color={theme === "light" ? "black" : "white"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black
                )}
              >
                more
              </Button>
            </div>
          )}
    </div>
  );
};

export { Validators };
