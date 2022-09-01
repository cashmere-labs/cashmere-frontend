import { Balance, UpperBox } from "components";
import { FaChevronDown } from "react-icons/fa";
import { Container } from "ui";

import styles from "./Manage.module.scss";

const Manage = () => {
  return (
    <Container className={styles.wrapper} compact>
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
    </Container>
  );
};

export { Manage };
