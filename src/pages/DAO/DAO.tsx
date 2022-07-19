import { Footer, Navbar, ExecutingModal, ProposalModal } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const DAO = () => {
  useTitle("DAO");

  const proposalModal = useModal()

  return (
    <Layout>
      <Navbar />
        <button onClick={() => proposalModal.open()}>
          ac onu
        </button>
      <div className={styles.wrapper}>
          <ProposalModal modal={proposalModal} />
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
