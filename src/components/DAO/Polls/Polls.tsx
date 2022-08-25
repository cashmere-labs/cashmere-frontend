import { ProposalModal } from "components/DAO/ProposalModal/ProposalModal";
import { Waiting } from "components/Modals/Waiting/Waiting";
import { Poll } from "components/Poll/Poll";
import { Row } from "components/Row/Row";
import { mockPollData } from "constants/mockPollData";
import { useModal, useTheme } from "hooks";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Container, Icon, Input, Modal, Select } from "ui";
import styles from "./Polls.module.scss";

enum PAGE {
  "FORM",
  "SUCCESS",
}

const Polls = () => {
  const { theme } = useTheme();
  const proposalModal = useModal();
  const [page, setPage] = useState<PAGE>(PAGE.FORM);
  const [search, setSearch] = useState("");

  return (
    <Container className={styles.wrapper} compact>
      <Row
        className={styles.headline}
        style={{ marginBottom: "1rem" }}
        justifyContent="space-between"
      >
        <span className={styles.title}>Polls</span>
        <Row justifyContent="flex-end">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            height="40px"
            placeholder="Search"
            rightEl={
              <Icon size={14}>
                <FaSearch />
              </Icon>
            }
            className={styles.search}
          />
          <Select
            height="36px"
            menuRenderer={() => "In progress"}
            value={""}
            style={{ width: "max-content", whiteSpace: "nowrap" }}
            options={[]}
          />
          <Button
            onClick={proposalModal.open}
            height="40px"
            color={theme === "dark" ? "white" : "black"}
            style={{ marginLeft: "8px", whiteSpace: "nowrap" }}
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
