import styles from "./Validators.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { LockersDatas, MyLocksDatas } from "../datas";
import { useMediaQuery } from "react-responsive";
import { Button } from "ui";
import { useSelector } from "react-redux";
import { useVeCSMStates } from "hooks";
import {
  VeCSMDesktopTable,
  VeCSMTitle,
  // VeCSMPhoneTable,
  // VeCSMPhoneTitle,
} from "components";
import { useEffect } from "react";
import { VeCSMPhoneTable, VeCSMPhoneTitle } from "components/VeCSM/PhoneTable/PhoneTable";

const Validators = () => {
  const whichValidator = useSelector((state: any) => state.veCSM.isActive);
  useEffect(() => console.log(whichValidator), [whichValidator]);
  const validatorCount = useSelector(
    (state: any) => state.veCSM.validatorCount
  );

  const { increaseValidatorCount } = useVeCSMStates();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 950px)",
  });
  const { theme } = useTheme();

  var datas = !whichValidator ? LockersDatas : MyLocksDatas;
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
        {isPhoneOrLaptop ?
         <VeCSMPhoneTitle whichLockers={whichValidator}/> :
        <VeCSMTitle whichLockers={whichValidator} />
      }
        {isPhoneOrLaptop ? (
          <VeCSMPhoneTable
            whichLocker={whichValidator}
            datas={datas}
            bodyCount={validatorCount}
          />
        ) : (
          <VeCSMDesktopTable
            whichValidator={whichValidator}
            validatorCount={validatorCount}
            datas={datas}
          />
        )}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export { Validators };
