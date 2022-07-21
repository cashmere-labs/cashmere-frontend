import { Footer, Navbar, Warning } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const DAO = () => {
  useTitle("DAO");


  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
          <Warning  />
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
