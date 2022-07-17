import { Footer, Navbar } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { ExecutedModal } from "components";
import { useTitle } from "hooks/useTitle";

const DAO = () => {
  useTitle("DAO");

  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <div>
          <ExecutedModal />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
