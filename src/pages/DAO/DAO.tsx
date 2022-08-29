import {
  Footer,
  Navbar,
  Manage,
  Polls,
  UpperPage,
  Statistics,
  Gauge,
  VoteGauge,
} from "components";
import styles from "./DAO.module.scss";
import { Container, Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";
import { NetworkSelector } from "components/DAO/NetworkSelector/NetworkSelector";

const DAO = () => {
  useTitle("DAO");

  const trialModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <Container compact>
          <NetworkSelector />
          <UpperPage />
          <VoteGauge />
          <Polls />
          <Statistics />
        </Container>
      </div>

      <Footer />
    </Layout>
  );
};

export { DAO };
