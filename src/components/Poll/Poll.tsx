import { clsnm } from "utils/clsnm";
import styles from "./Poll.module.scss";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "hooks";
import { Column } from "components/Column/Column";

type PollData = {
  id: string;
  label: string;
  value: number;
  color: string;
}[];

type PollProps = Readonly<{
  id: number | string;
  title: string;
  isExecuted: boolean;
  estimatedEndTime: string;
  votes: PollData;
}>;

const Poll = ({
  id,
  title,
  isExecuted,
  estimatedEndTime,
  votes,
}: PollProps) => {
  const { theme } = useTheme();

  return (
    <div className={clsnm(styles.wrapper)}>
      <div className={styles.text}></div>
      <div className={styles.text}></div>

      <div className={styles.pollWrapper}>
        <ResponsivePie
          data={votes}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.96}
          padAngle={11}
          cornerRadius={20}
          activeOuterRadiusOffset={4}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.1]],
          }}
          colors={{ datum: "data.color" }}
          animate={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextOffset={5}
          arcLinkLabelsTextColor={theme === "dark" ? "white" : "black"}
          arcLinkLabelsOffset={10}
          arcLinkLabelsDiagonalLength={12}
          arcLinkLabelsStraightLength={24}
          enableArcLabels={false}
          arcLabelsRadiusOffset={0}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 1.1]],
          }}
          legends={[]}
        />
        <div className={styles.pollCenter}>
          <Column>
            <span className={styles.voted}>Voted</span>
            <span className={styles.percent}>48.4%</span>
          </Column>
        </div>
      </div>
    </div>
  );
};

export { Poll };
