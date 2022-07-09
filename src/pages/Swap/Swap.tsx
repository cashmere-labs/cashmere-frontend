import { Footer, Navbar, SwapBox } from "components";
import { useModal } from "hooks";
import { Layout, Modal } from "ui";
import styles from "./Swap.module.scss";

const Swap = () => {
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <SwapBox />
      </div>
      <Footer />
    </Layout>
  );
};

export { Swap };
