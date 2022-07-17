import styles from "./Pool.module.scss";
import {
  DepositDashboard,
  Navbar,
  Pools,
  Footer,
  ChoosePool,
} from "components";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";

const Pool = () => {
  useTitle("Pools");

  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <DepositDashboard />
          <ChoosePool />
          <Pools />
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export { Pool };
