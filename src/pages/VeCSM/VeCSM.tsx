import { Footer, Navbar } from "components";
import styles from "./VeCSM.module.scss";
import DAI from "assets/pool/dai.png";
import { Layout } from "ui";
import { ClaimDashboard , ChooseValidator} from "components";

const VeCSM = () => {
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <ClaimDashboard/>
        <ChooseValidator/>
      </div>
      <Footer />
    </Layout>
  );
};

export { VeCSM };
