import { clsnm } from "utils/clsnm";
import styles from "./Poll.module.scss";
import { ResponsivePie } from "@nivo/pie";

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
  return (
    <div className={clsnm(styles.wrapper)}>
      <div className={styles.text}></div>
      <div className={styles.text}></div>

      <div style={{ width: "350px", height: "350px" }}>
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
          animate={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextOffset={5}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsOffset={-24}
          arcLinkLabelsDiagonalLength={32}
          arcLinkLabelsStraightLength={23}
          enableArcLabels={false}
          arcLabelsRadiusOffset={0}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 1.1]],
          }}
          legends={[]}
        />
      </div>
    </div>
  );
};

export { Poll };
