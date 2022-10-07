import {
  ChoosePool,
  DepositDashboard,
  Footer,
  Navbar,
  Pools,
} from "components";
import { networkOptions } from "constants/networkOptions";
import { tokenOptions } from "constants/tokenOptions";
import { useTitle } from "hooks/useTitle";
import { useState } from "react";
import { Network } from "types/network";
import { Token } from "types/token";
import { Layout } from "ui";

import styles from "./Pool.module.scss";

export type FilterType = {
  network: null | Network;
  token: null | Token;
};

export enum PoolTab {
  "ALL",
  "MY",
}

const Pool = () => {
  useTitle("Pools");

  const [filter, setFilter] = useState<FilterType>({
    network: null,
    token: null,
  });

  const [poolTab, setPoolTab] = useState<PoolTab>(PoolTab.ALL);

  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <DepositDashboard />
          <ChoosePool
            poolTab={poolTab}
            setPoolTab={setPoolTab}
            filter={filter}
            setFilter={setFilter}
            tokenOptions={tokenOptions}
            networkOptions={networkOptions}
          />
          <Pools filter={filter} poolTab={poolTab} />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export { Pool };
