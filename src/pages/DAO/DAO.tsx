import {
  Footer,
  Navbar,
  Polls,
  UpperPage,
  Statistics,
  VoteGauge,
} from "components";
import styles from "./DAO.module.scss";
import { Container, Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { NetworkSelector } from "components/DAO/NetworkSelector/NetworkSelector";

const DAO = () => {
  useTitle("DAO");

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
