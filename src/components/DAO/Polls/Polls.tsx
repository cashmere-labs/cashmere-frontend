import { Poll } from "components/Poll/Poll";
import { Row } from "components/Row/Row";
import { mockPollData } from "constants/mockPollData";
import { useTheme } from "hooks";
import { Button, Container } from "ui";
import styles from "./Polls.module.scss";

const Polls = () => {
  const { theme } = useTheme();

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
    </Container>
  );
};

export { Polls };
