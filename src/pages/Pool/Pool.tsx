import {
  ChoosePool,
  DepositDashboard,
  Footer,
  Navbar,
  Pools,
} from "components";
import { useTitle } from "hooks/useTitle";
import { useState } from "react";
import { Layout } from "ui";

import styles from "./Pool.module.scss";

const Pool = () => {
  useTitle("Pools");

  const [filter, setFilter] = useState({
    token: "All Tokens",
    chain: "All Chains",
  });

  const tokenOptions = ["All Tokens", "DAI", "USDC", "USDT"];
  const chainOptions = [
    "All Chains",
    "Ethereum",
    "Avalanche",
    "Arbitrum",
    "Optimism",
    "Polygon",
    "BNBChain",
    "Fantom",
  ];

  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <DepositDashboard />
          <ChoosePool
            filter={filter}
            setFilter={setFilter}
            tokenOptions={tokenOptions}
            chainOptions={chainOptions}
          />
          <Pools filter={filter} />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export { Pool };
