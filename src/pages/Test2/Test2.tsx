import { Footer, Navbar, BecomeValidatorError, Manage } from "components";
import styles from "./Test2.module.scss";
import { Tab, Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const Test2 = () => {
  useTitle("Test2");

  const trialModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <Tab names={["empty", "empty2", "dolu"]} height="56px" maxWidth="300px" padding="5px" />
      </div>
      <Footer />
    </Layout>
  );
};

export { Test2 };
