import styles from "./Test.module.scss";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "css",
    label: "css",
    value: 118,
    color: "rbg(0,0,0,0.5)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 50,
    color: "yellow",
  },
  {
    id: "go",
    label: "go",
    value: 300,
    color: "blue",
  },
];

const Test = () => {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <ResponsivePie
        data={data}
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
  );
};

export { Test };
