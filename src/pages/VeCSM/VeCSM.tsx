import { Footer, Navbar } from "components";
import styles from "./VeCSM.module.scss";
import { Waiting, Done } from "ui";
import DAI from "assets/pool/dai.png";

const VeCSM = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Waiting
          icon={DAI}
          iconName="DAI"
          functionName="Proposal Vote"
          value="24.689.905"
        />
        <Done />
      </div>
      <Footer />
    </>
  );
};

export { VeCSM };
