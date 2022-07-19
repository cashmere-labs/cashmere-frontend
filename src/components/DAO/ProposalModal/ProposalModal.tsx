import styles from "./ProposalModal.module.scss";
import { Button, Modal, Input, Select, Option } from "ui";
import { ModalController } from "hooks/useModal";
import { useTheme } from "hooks";
import LOGO from "assets/images/cashmere.png";
import TICK from "assets/images/tick.png";
import { useState } from "react";
import { Row } from "components/Row/Row";
import { useMediaQuery } from "react-responsive";

const ProposalModal = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const [state, setState] = useState({
    from: "Yes Voters",
    fromto: "No Voters",
  });

  const tokenOptions = ["Yes Voters", "No Voters"];

  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>DAO Proposal</div>
      <div className={styles.titleInput}>
        <div className={styles.daoTitle}>Title</div>
        <Input placeholder="Title" height={isPhoneOrLaptop ? "59px" : "71px"} />
      </div>
      <div className={styles.proposalInput}>
        <div className={styles.proposalTitle}> Proposal Text</div>

        <Input
          placeholder="Proposal Text"
          height={isPhoneOrLaptop ? "59px" : "71px"}
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
          placeholder="Enter Amount"
          height={isPhoneOrLaptop ? "59px" : "71px"}
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
            <img src={TICK} style={{ width: "31.2px", height: "21.7px" }}></img>
          </div>
        </div>
        <div className={styles.contractAddress}>
          <div>Reward Token Contract Address</div>
          <Input
            placeholder="Reward Token Contract Address"
            height={isPhoneOrLaptop ? "59px" : "71px"}
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
              height={isPhoneOrLaptop ? "59px" : "71px"}
              value={state.from}
              setValue={() => undefined}
              options={tokenOptions}
              optionRenderer={(close) => (
                <>
                  {tokenOptions.map((item, key) => (
                    <Option
                      style={{ marginRight: "8px"}}
                      key={key}
                      value={"item.name"}
                      onClick={() => {
                        setState({ ...state, from: item });
                        close?.();
                      }}
                    >
                      <Row style={{ width: "max-content" }} alignItems="center">
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
            placeholder="Amount"
            height={isPhoneOrLaptop ? "59px" : "71px"}
          />
        </div>
      </div>
      <div className={styles.submitButton}>
        <Button
          width={isPhoneOrLaptop ? "336px" : "687px"}
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
