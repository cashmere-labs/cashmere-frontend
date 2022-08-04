import styles from "./ExecutingModal.module.scss";

import { useTheme, useModal } from "hooks";
import { Button, Input, Tooltip, Icon, Modal, Alert } from "ui";
import { useMediaQuery } from "react-responsive";
import { InfoIcon } from "assets/icons";
import { ModalController } from "hooks/useModal";
import { useState } from "react";
import { useFormValidator } from "hooks/useFormValidator";
import { isValidNumberInput } from "utils/isValidNumberInput";

const ExecutingModal = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();
  // const {ref} = useRef();

  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 750px)",
  });

  const minWidth = useMediaQuery({
    query: "(max-width: 375px)",
  });
  const barRate = 0.78;

  const [amount, setAmount] = useState<string>("");
  const { validator, errors, setErrors } = useFormValidator();

  const onSubmit = () => {
    if (amount.trim() === "") {
      validator.setError("amount", "Enter amount");
    }

    // TODO: Change 100 with real balance
    if (Number(amount) > 100) {
      validator.setError("amount", "Insufficient balance");
    }

    if (validator.hasError()) {
      setErrors(validator.errors);
      validator.clearErrors();
    } else {
      setErrors({});
      validator.clearErrors();
    }
  };

  return (
    <Modal isOpen={modal.isOpen} close={modal.close}>
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <div></div>
          <div>
            <div className={styles.title}>
              <div>ID: 6</div>
              <div>Executing</div>
              <div>Register Liquidation Queue Contract</div>
              <div>Wed, Nov 10, 2021</div>
            </div>
            <div className={styles.voteInfos}>
              <div className={styles.votes}>
                <div>
                  <span>Voted</span>
                  <span>48.3%</span>
                </div>
                <div>
                  <span>Yes</span>
                  <span>48.3%</span>
                </div>
                <div>
                  <span>No</span>
                  <span>00.0%</span>
                </div>
              </div>
              <div>Pass Threshold</div>
              <div>
                <div
                  style={{
                    width: `${
                      isPhoneOrLaptop
                        ? minWidth
                          ? barRate * 290 // !
                          : barRate * 337
                        : barRate * 401
                    }px`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.infoRow}>
              <div>
                <div>Creator</div>
                <div>Jump Crypto</div>
              </div>
              <div>
                <div>Total Amount</div>
                <div>1,000 veCSM</div>
              </div>
            </div>
            <div className={styles.infoRow}>
              <div>
                <div>Start time</div>
                <div>Wed, Nov 10, 2021&nbsp; 9:08:36 PM</div>
              </div>
              <div>
                <div>Estimated end time</div>
                <div>Wed, Nov 10, 2021 &nbsp;9:08:36 PM</div>
              </div>
            </div>
            <div className={styles.infoRow}>
              <div>
                <div>Description</div>
                <div>
                  Change the liquidation contract address on Overseer...
                </div>
              </div>
              <div>
                <div className={styles.tip}>
                  <span>Extra Rewards</span>
                  <Tooltip placement="top" content="Content coming here">
                    <Icon size={16}>
                      <InfoIcon />
                    </Icon>
                  </Tooltip>
                </div>
                <div>100,000 USDD to Yes supporters in Jump Crypto</div>
              </div>
            </div>
          </div>
          <div>BALANCE 24,689.905</div>
          <div>
            <Input
              value={amount}
              onChange={(e) => {
                if (!isValidNumberInput(e.target.value)) {
                  return;
                }
                setAmount(e.target.value);
              }}
              placeholder="Amount"
              className={styles.input}
              extendLeft
              hideBorder={true}
            />
            <Button
              height="25px"
              width="45px"
              fontSize={"fs12"}
              fontWeight="fw600"
              onClick={() => {}}
              color={theme === "light" ? "white" : "white"}
            >
              Max
            </Button>
            <div>VeCSM</div>
          </div>
          {errors.amount ? (
            <Alert style={{ marginTop: "8px" }} label={errors.amount} />
          ) : (
            <div></div>
          )}
          <div>
            <Button
              height={isPhoneOrLaptop ? "34px" : "56px"}
              width={isPhoneOrLaptop ? "300px" : "514px"}
              fontSize={"fs16"}
              fontWeight="fw600"
              onClick={onSubmit}
              color={theme === "light" ? "black" : "white"}
            >
              Yes
            </Button>
            <Button
              height={isPhoneOrLaptop ? "34px" : "56px"}
              width={isPhoneOrLaptop ? "300px" : "514px"}
              fontSize={"fs16"}
              fontWeight="fw600"
              onClick={() => {}}
              color={
                theme === "light" ? "transparentWhite" : "transparentBlack"
              }
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { ExecutingModal };
