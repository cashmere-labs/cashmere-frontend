import { Footer, Navbar } from "components";
import styles from "./VeCSM.module.scss";
import { Submitted } from "ui";

const VeCSM = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Submitted/>
      </div>
      <Footer/>
    </>
  );
};

export { VeCSM };
