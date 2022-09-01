import { BecomeValidator, Waiting } from "components";
import { useModal, useTheme, useVeCSMStates } from "hooks";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Button, Modal } from "ui";
import { clsnm } from "utils/clsnm";

import styles from "./ChooseValidator.module.scss";

enum PAGE {
  "FORM",
  "SUCCESS",
}

const ChooseValidator = () => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const miniPhone = useMediaQuery({
    query: "(max-width: 380px)",
  });
  const { resetValidatorCount, changeIsActive } = useVeCSMStates();
  const isActive = useSelector((state: any) => state.veCSM.isActive);
  const { theme } = useTheme();

  const [becomeValidatorPage, setBecomeValidatorPage] = useState<PAGE>(
    PAGE.FORM,
  );
  const becomeValidatorModal = useModal();

  return (
    <div className={styles.wrapper}>
      <div className={styles.whichValidatorWrapper}>
        <div className={styles.buttons}>
          <Button
            height={"46px"}
            width={miniPhone ? "120px" : "171px"}
            fontSize={isPhoneOrPC ? "fs14" : "fs18"}
            onClick={() => {
              changeIsActive(false);
              resetValidatorCount();
            }}
            color={theme === "light" ? "white" : "white"}
            className={clsnm(
              isActive ? styles.poolButtonOff : styles.poolButtonOn,
            )}
            fontWeight={isActive ? "fw500" : "fw600"}
            lineHeight="lhNormal"
          >
            Lockers
          </Button>
          <Button
            height={"46px"}
            width={miniPhone ? "120px" : "171px"}
            fontSize={isPhoneOrPC ? "fs14" : "fs18"}
            onClick={() => {
              changeIsActive(true);
              resetValidatorCount();
            }}
            color={theme === "light" ? "white" : "white"}
            className={clsnm(
              !isActive ? styles.poolButtonOff : styles.poolButtonOn,
            )}
            fontWeight={!isActive ? "fw500" : "fw600"}
            lineHeight="lhNormal"
          >
            My Locks
          </Button>
        </div>
        {becomeValidatorPage === PAGE.FORM ? (
          <BecomeValidator
            onSuccess={() => setBecomeValidatorPage(PAGE.SUCCESS)}
            modal={becomeValidatorModal}
          />
        ) : (
          <Modal
            isOpen={becomeValidatorModal.isOpen}
            close={() => {
              becomeValidatorModal.close();
              setBecomeValidatorPage(PAGE.FORM);
            }}
          >
            <Waiting
              value="24.689.124"
              iconName={"veCSM"}
              icon={null}
              functionName="Become a validator"
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export { ChooseValidator };
