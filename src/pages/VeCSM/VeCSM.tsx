import { Footer, Navbar } from "components";
import { ChooseValidator, ClaimDashboard, Validators } from "components";
import { useTitle } from "hooks/useTitle";
import { Layout } from "ui";

import styles from "./VeCSM.module.scss";

const VeCSM = () => {
  useTitle("veCSM");

  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <ClaimDashboard />
        <ChooseValidator />
        <div className={styles.tvl}>
          <div className={styles.title}>TVL: </div>
          <div className={styles.value}>10,234,654 CSM</div>
        </div>
        <Validators />
      </div>
      <Footer />
    </Layout>
  );
};

export { VeCSM };
