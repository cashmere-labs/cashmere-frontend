import styles from "./Manage.module.scss";
import { Balance, UpperBox } from "components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Manage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>DAO POOLS</div>
        <FaChevronDown />
        <div>Jump Crypto</div>
      </div>
      <div className={styles.upperBox}>
        <UpperBox />
      </div>
      <div className={styles.balance}>
        <Balance />
      </div>
    </div>
  );
};

export { Manage };
