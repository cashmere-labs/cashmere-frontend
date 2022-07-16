import { Footer, Navbar } from "components";
import styles from "./VeCSM.module.scss";
import { Layout } from "ui";
import { ClaimDashboard, ChooseValidator, Validators } from "components";

const VeCSM = () => {
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <ClaimDashboard />
        <ChooseValidator />
        <Validators />
      </div>
      <Footer />
    </Layout>
  );
};

export { VeCSM };
