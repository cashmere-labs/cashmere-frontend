import styles from "./Pool.module.scss";
import { DepositDashboard, Navbar, Pools } from "components";
const Pool = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <DepositDashboard />
        <Pools />
      </div>
    </div>
  );
};

export { Pool };
