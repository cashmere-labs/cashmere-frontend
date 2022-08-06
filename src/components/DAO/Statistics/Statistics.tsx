import styles from "./Statistics.module.scss";
import { Button } from "ui";
import { useTheme } from "hooks";
import { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { mockPollData, mockStatistics } from "constants/mockPollData";
import { useMediaQuery } from "react-responsive";

const Statistics = () => {
  const { theme } = useTheme();
  const isSmall = useMediaQuery({
    query: "(max-width: 540px)",
  });
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
          <ResponsivePie
            data={mockStatistics}
            margin={{ top: 40, right: 20, bottom: 40, left: 20 }}
            innerRadius={0.2}
            padAngle={1}
            cornerRadius={4}
            activeOuterRadiusOffset={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.1]],
            }}
            colors={{ datum: "data.color" }}
            animate={false}
            arcLinkLabelsSkipAngle={1}
            arcLinkLabelsTextOffset={5}
            arcLinkLabelsTextColor={theme === "dark" ? "white" : "black"}
            arcLinkLabelsOffset={isSmall ? 2 : 10}
            arcLinkLabelsDiagonalLength={12}
            arcLinkLabelsStraightLength={isSmall ? 5 : 24}
            enableArcLabels={false}
            arcLabelsRadiusOffset={0}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 1.1]],
            }}
            legends={[]}
          />
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
