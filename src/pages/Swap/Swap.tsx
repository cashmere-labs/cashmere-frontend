import { Footer, Navbar, SwapBox } from "components";
import { Layout } from "ui";
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
