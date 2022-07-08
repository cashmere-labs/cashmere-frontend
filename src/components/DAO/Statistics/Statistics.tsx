import styles from "./Statistics.module.scss";
import { Button } from "ui";
import { useTheme } from "hooks";
import STATISTICS from "assets/images/statistics.png";
import { useState } from "react";

const Statistics = () => {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Statistics</div>
      <div className={styles.boxWrapper}>
        <div className={styles.options}>
          <div
            className={selected ? styles.selected : styles.not}
            onClick={() => setSelected(true)}
          >
            <span style={{ color: `var(--text)` }}>Gauge alloc.</span>
          </div>
          <div
            className={!selected ? styles.selected : styles.not}
            onClick={() => setSelected(false)}
          >
            <span style={{ color: `var(--text)` }}>Dao Share</span>
          </div>
        </div>
        <div className={styles.graph}>
          <img src={STATISTICS}></img>
        </div>
        <div className={styles.claim}>
          <Button
            width="100%"
            height="40px"
            color={theme === "light" ? "black" : "white"}
          >
            Claim
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Statistics };
