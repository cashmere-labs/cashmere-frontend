import {
  Footer,
  Navbar,
  Polls,
  Statistics,
  UpperPage,
  VoteGauge,
} from "components";
import { useTitle } from "hooks/useTitle";
import { Container, Layout } from "ui";

import { NetworkSelector } from "components/DAO/NetworkSelector/NetworkSelector";

import styles from "./DAO.module.scss";

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
