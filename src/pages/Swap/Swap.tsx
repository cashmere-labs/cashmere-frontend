import { Footer, Navbar, SwapBox } from "components";
import { GasEstimatorModal } from "components";
import { getMockEstimations } from "constants/mockEstimateData";
import { ARBITRUM, POLYGON } from "constants/networks";
import { Dai, Tetherus } from "constants/tokens";
import { useModal } from "hooks";
import { useTitle } from "hooks/useTitle";
import { useState } from "react";
import { Network } from "types/network";
import { Token } from "types/token";
import { Layout } from "ui";

import { useSwapSettings } from "components/SwapSettings/useSwapSettings";

import styles from "./Swap.module.scss";

export type SwapState = {
  fromfrom: Network;
  fromto: Token;
  tofrom: Network;
  toto: Token;
};

const Swap = () => {
  useTitle("Swap");
  console.log("Coded by Ethylene Blockchain Studio!");

  const swapSettings = useSwapSettings();
  const [state, setState] = useState({
    fromfrom: ARBITRUM,
    fromto: Tetherus,
    tofrom: POLYGON,
    toto: Dai,
  });

  const estimateModal = useModal();

  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <SwapBox
          state={state}
          setState={setState}
          swapSettings={swapSettings}
        />
      </div>
      <div onClick={estimateModal.open} className={styles.estimator}>
        Estimate transfer gas fees
      </div>
      <GasEstimatorModal
        modalController={estimateModal}
        estimates={getMockEstimations()}
      />
      <Footer />
    </Layout>
  );
};

export { Swap };
