import { Balance, UpperBox } from "components";
import { useManageParams } from "hooks/useManageParams";
import { useMemo } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useNetwork } from "store/hooks/networkHooks";
import { Container, NetworkBadge } from "ui";
import { NetworkTypes } from "ui/NetworkBadge/utils";

import { LockersDatas, MyLocksDatas } from "components/VeCSM/datas";

import styles from "./Manage.module.scss";

const Manage = () => {
  const network = useNetwork();
  const { id } = useManageParams();

  const data = useMemo(() => {
    const myLockCheck = MyLocksDatas.find((item) => item.id === Number(id));
    const allLockCheck = LockersDatas.find((item) => item.id === Number(id));

    return myLockCheck ?? allLockCheck ?? null;
  }, [id]);

  const shortenNetworkName = (network?: NetworkTypes | string) => {
    if (network == null) {
      return "";
    }
    const name = String(NetworkTypes[network as NetworkTypes]);
    if (name === "ETHEREUM") {
      return "ETH";
    }
    return name;
  };

  return (
    <Container className={styles.wrapper} compact>
      <div className={styles.title}>
        <div className={styles.left}>
          <div>DAO POOLS</div>
          <FaChevronRight />
          <div className={styles.poolName}>
            CSM<sub>{shortenNetworkName(data?.network)}</sub>
          </div>
        </div>
        {data?.network != null && <NetworkBadge label={data?.network} />}
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
