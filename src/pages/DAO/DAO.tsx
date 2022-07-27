import { Footer, Navbar, LiquidityStakeReward, UpperPage, Gauge } from "components";
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
      <button onClick={()=> trialModal.open()}>ac
      </button>
      <div className={styles.wrapper}>
        <LiquidityStakeReward modal={trialModal} />
      </div>
      <Footer />
    </Layout>
  );
};

export { DAO };
