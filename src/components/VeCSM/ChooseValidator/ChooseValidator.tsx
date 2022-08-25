import { clsnm } from "utils/clsnm";
import styles from "./ChooseValidator.module.scss";
import { useModal, useTheme, useVeCSMStates } from "hooks";
import { Button, Modal } from "ui";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { BecomeValidator } from "components/DAO/BecomeValidator/BecomeValidator";
import { useState } from "react";
import { Waiting } from "components/Modals/Waiting/Waiting";

enum PAGE {
  "FORM",
  "SUCCESS",
}

const ChooseValidator = () => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 650px)",
  });
  const { resetValidatorCount, changeIsActive } = useVeCSMStates();
  const isActive = useSelector((state: any) => state.veCSM.isActive);
  const { theme } = useTheme();

  const [becomeValidatorPage, setBecomeValidatorPage] = useState<PAGE>(
    PAGE.FORM
  );
  const becomeValidatorModal = useModal();

  return (
    <div className={styles.wrapper}>
      <div className={styles.whichValidatorWrapper}>
        <div className={styles.buttons}>
          <Button
            height={isPhoneOrPC ? "36px" : "46px"}
            width={isPhoneOrPC ? "102px" : "162px"}
            fontSize={isPhoneOrPC ? "fs14" : "fs18"}
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
            Lockers
          </Button>
          <Button
            height={isPhoneOrPC ? "36px" : "46px"}
            width={isPhoneOrPC ? "102px" : "162px"}
            fontSize={isPhoneOrPC ? "fs14" : "fs18"}
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
