import { Footer, Navbar, LockModal } from "components";
import styles from "./DAO.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const DAO = () => {
  useTitle("DAO");

  const unlockModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div>
        <button onClick={unlockModal.open}> acil susam acil</button>
      </div>
      <div className={styles.wrapper}>
        <LockModal modal={unlockModal} />
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
