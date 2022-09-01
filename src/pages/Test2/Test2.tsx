import { BecomeValidatorError, Footer, Manage, Navbar } from "components";
import { useModal } from "hooks";
import { useTitle } from "hooks/useTitle";
import { Layout, Tab } from "ui";

import styles from "./Test2.module.scss";

const Test2 = () => {
  useTitle("Test2");

  const trialModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <Tab
          names={["empty", "empty2", "dolu"]}
          height="56px"
          maxWidth="300px"
          padding="5px"
        />
      </div>
      <Footer />
    </Layout>
  );
};

export { Test2 };
