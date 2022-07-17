import { Footer, Navbar, SwapBox } from "components";
import { useTitle } from "hooks/useTitle";
import { useEffect } from "react";
import { Layout } from "ui";
import styles from "./Swap.module.scss";

const Swap = () => {
  useTitle("Swap");

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
