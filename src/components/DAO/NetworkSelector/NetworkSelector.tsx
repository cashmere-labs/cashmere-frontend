import { useNetwork } from "store/hooks/networkHooks";
import { SelectNetwork } from "ui";
import styles from "./NetworkSelector.module.scss";

const NetworkSelector = () => {
  const network = useNetwork();

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Select Network</h1>
      </div>
      <div>
        <SelectNetwork />
      </div>
    </div>
  );
};

export { NetworkSelector };
