import { Footer, Navbar, Manage, Polls } from "components";
import styles from "./ManagePage.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";

const ManagePage = () => {
  useTitle("Manage");

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

export { ManagePage };
