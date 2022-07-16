import { Footer, Navbar } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { ExecutingModal } from "components";

const DAO = () => {
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <div>
          <ExecutingModal />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
