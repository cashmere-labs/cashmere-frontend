import { Footer, Navbar, BecomeValidatorError, Manage } from "components";
import styles from "./Test2.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const Test2 = () => {
  useTitle("Test2");

  const trialModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        {/* <button onClick={() => trialModal.open()}>acccc</button>
        <BecomeValidatorError modal={trialModal} /> */}
        <Manage/>
      </div>
      <Footer />
    </Layout>
  );
};

export { Test2 };
