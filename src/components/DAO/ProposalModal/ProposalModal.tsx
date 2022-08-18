import styles from "./ProposalModal.module.scss";
import { Button, Modal, Input, Select, Option } from "ui";
import { ModalController } from "hooks/useModal";
import { useTheme } from "hooks";
import LOGO from "assets/images/cashmere.png";
import TICK from "assets/images/tick.png";
import { useState } from "react";
import { Row } from "components/Row/Row";
import { useMediaQuery } from "react-responsive";
import { NUMBER_REGEX } from "constants/utils";
import { isValidNumberInput } from "utils/isValidNumberInput";
import { ethers } from "ethers";
import { useFormValidator } from "hooks/useFormValidator";
import { useNetwork } from "store/hooks/networkHooks";

const ProposalModal = ({
  modal,
  onSuccess,
}: {
  modal: ModalController;
  onSuccess: () => void;
}) => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const [state, setState] = useState({
    from: "Yes Voters",
    fromto: "No Voters",
  });

  const tokenOptions = ["Yes Voters", "No Voters"];

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const { validator, errors, setErrors } = useFormValidator();
  const network = useNetwork();

  const isDisabled = () => {
    if (
      text.trim() === "" ||
      depositAmount.trim() === "" ||
      amount.trim() === ""
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = () => {
    if (title.trim() === "") {
      validator.setError("title", "Title is required");
    }
    if (!ethers.utils.isAddress(tokenAddress)) {
      validator.setError("tokenAddress", "Invalid address");
    }
    if (tokenAddress.trim() === "") {
      validator.setError("tokenAddress", "Address is required");
    }
    // TODO: Replace 100 with real balance
    if (Number(amount) > 100) {
      validator.setError("amount", "Insufficient balance");
    }
    // TODO: Replace 100 with real balance
    if (Number(depositAmount) > 100) {
      validator.setError("depositAmount", "Insufficient balance");
    }

    if (validator.hasError()) {
      setErrors(validator.errors);
      validator.clearErrors();
      return;
    } else {
      validator.clearErrors();
      setErrors({});
      onSuccess?.();
    }
  };

  return (
    <Modal
      network={network}
      isOpen={modal.isOpen}
      close={modal.close}
      className={styles.wrapper}
    >
      <div className={styles.body}>
        <div className={styles.title}>DAO Proposal</div>
        <div className={styles.titleInput}>
          <div className={styles.daoTitle}>Title</div>
          <Input
            error={errors.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            height="60px"
          />
        </div>
        <div className={styles.proposalInput}>
          <div className={styles.proposalTitle}> Proposal Text</div>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Proposal Text"
            height="60px"
          />
        </div>
        <div className={styles.inputTitle}>
          <div>
            Deposit veCSM (these vecsms will be used for YES vote from owner)
          </div>
          <div className={styles.balance}>Balance 24689.905</div>
        </div>
        <div className={styles.input}>
          <Input
            error={errors.depositAmount}
            value={depositAmount}
            onChange={(e) => {
              if (!isValidNumberInput(e.target.value)) {
                return;
              }
              setDepositAmount(e.target.value);
            }}
            placeholder="Enter Amount"
            height="60px"
          />
          <Button
            width="45px"
            height="25px"
            color={theme === "light" ? "white" : "black"}
          >
            Max
          </Button>
          <img src={LOGO}></img>
          <div className={styles.logo}>CSM</div>
        </div>
        <div className={styles.rewardTitle}>Extra Rewards</div>
        <div className={styles.rewardBodyFirst}>
          <div className={styles.status}>
            <div>Status</div>
            <div>
              <img
                src={TICK}
                style={{ width: "31.2px", height: "21.7px" }}
              ></img>
            </div>
          </div>
          <div className={styles.contractAddress}>
            <div>Reward Token Contract Address</div>
            <Input
              error={errors.tokenAddress}
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              placeholder="Reward Token Contract Address"
              height="60px"
            />
          </div>
        </div>
        <div className={styles.rewardBodySecond}>
          <div className={styles.rewardsTo}>
            <div>Rewards to:</div>
            <div>
              <Select
                containerClassName={styles.select}
                isFullWidth
                height="60px"
                value={state.from}
                setValue={() => undefined}
                options={tokenOptions}
                optionRenderer={(close) => (
                  <>
                    {tokenOptions.map((item, key) => (
                      <Option
                        style={{ marginRight: "8px" }}
                        key={key}
                        value={"item.name"}
                        onClick={() => {
                          setState({ ...state, from: item });
                          close?.();
                        }}
                      >
                        <Row
                          style={{ width: "max-content" }}
                          alignItems="center"
                        >
                          <span style={{ color: `var(--text)` }}>{item}</span>
                        </Row>
                      </Option>
                    ))}
                  </>
                )}
              />
            </div>
          </div>
          <div className={styles.amount}>
            <div>Amount</div>
            <Input
              error={errors.amount}
              value={amount}
              onChange={(e) => {
                if (!isValidNumberInput(e.target.value)) {
                  return;
                }
                setAmount(e.target.value);
              }}
              placeholder="Amount"
              height="60px"
            />
          </div>
        </div>
      </div>

      <div className={styles.submitButton}>
        <Button
          onClick={onSubmit}
          disabled={isDisabled()}
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

export { ProposalModal };
