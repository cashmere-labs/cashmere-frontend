import { Balance, UpperBox } from "components";
import { FaChevronRight } from "react-icons/fa";
import { useNetwork } from "store/hooks/networkHooks";
import { Container, NetworkBadge } from "ui";

import styles from "./Manage.module.scss";

const Manage = () => {
  const network = useNetwork();

  return (
    <Container className={styles.wrapper} compact>
      <div className={styles.title}>
        <div className={styles.left}>
          <div>DAO POOLS</div>
          <FaChevronRight />
          <div className={styles.poolName}>
            CSM<sub>ETH</sub>
          </div>
        </div>
        <NetworkBadge label={network} />
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
