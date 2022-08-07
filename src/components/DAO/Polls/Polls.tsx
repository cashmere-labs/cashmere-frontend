import { ProposalModal } from "components/DAO/ProposalModal/ProposalModal";
import { Waiting } from "components/Modals/Waiting/Waiting";
import { Poll } from "components/Poll/Poll";
import { Row } from "components/Row/Row";
import { mockPollData } from "constants/mockPollData";
import { useModal, useTheme } from "hooks";
import { useState } from "react";
import { Button, Container, Modal } from "ui";
import styles from "./Polls.module.scss";

enum PAGE {
  "FORM",
  "SUCCESS",
}

const Polls = () => {
  const { theme } = useTheme();
  const proposalModal = useModal();
  const [page, setPage] = useState<PAGE>(PAGE.FORM);

  return (
    <Container className={styles.wrapper} compact>
      <Row
        className={styles.headline}
        style={{ marginBottom: "1rem" }}
        justifyContent="space-between"
      >
        <span className={styles.title}>Private polls</span>
        <Row justifyContent="flex-end">
          <Button height="40px" color={theme === "dark" ? "black" : "neutral"}>
            In Progress
          </Button>
          <Button
            onClick={proposalModal.open}
            height="40px"
            color={theme === "dark" ? "white" : "black"}
            style={{ marginLeft: "8px" }}
          >
            Create Poll
          </Button>
        </Row>
      </Row>

      <div className={styles.polls}>
        <div className={styles.poll}>
          <Poll
            id="6"
            title="Register Liquidation Queue Contract"
            isExecuted={true}
            estimatedEndTime="Wed, Nov 10, 2021"
            votes={mockPollData}
          />
        </div>
        <div className={styles.poll}>
          <Poll
            id="6"
            title="Register Liquidation Queue Contract"
            isExecuted={true}
            estimatedEndTime="Wed, Nov 10, 2021"
            votes={mockPollData}
          />
        </div>
      </div>
      {page === PAGE.FORM ? (
        <ProposalModal
          onSuccess={() => {
            setPage(PAGE.SUCCESS);
          }}
          modal={proposalModal}
        />
      ) : (
        <Modal isOpen={proposalModal.isOpen} close={proposalModal.close}>
          <Waiting
            value="24.689.123"
            iconName={"CSM"}
            icon={null}
            functionName="Proposal vote"
          />
        </Modal>
      )}
    </Container>
  );
};

export { Polls };
