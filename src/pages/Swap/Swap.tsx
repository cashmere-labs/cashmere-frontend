import { Footer, Navbar, SwapBox } from "components";
import { useSwapSettings } from "components/SwapSettings/useSwapSettings";
import { ARBITRUM, POLYGON } from "constants/networks";
import { Dai, Tetherus } from "constants/tokens";
import { useTitle } from "hooks/useTitle";
import { useState } from "react";
import { Network } from "types/network";
import { Token } from "types/token";
import { Layout } from "ui";
import styles from "./Swap.module.scss";
import { getMockEstimations } from "constants/mockEstimateData";
import { GasEstimatorModal } from "components";
import { useModal } from "hooks";

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
