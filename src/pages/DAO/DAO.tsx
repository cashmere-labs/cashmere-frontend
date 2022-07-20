import { Footer, Navbar, BecomeValidator } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const DAO = () => {
  useTitle("DAO");

  const becomeValidatorModal = useModal()

  return (
    <Layout>
      <Navbar />
        <button onClick={() => becomeValidatorModal.open()}>
          ac onu
        </button>
      <div className={styles.wrapper}>
          <BecomeValidator modal={becomeValidatorModal} />
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
