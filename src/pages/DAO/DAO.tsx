import { Footer, Navbar, Manage, Polls } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const DAO = () => {
  useTitle("DAO");

  const trialModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <Manage />
        <Polls />
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
