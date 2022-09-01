import { ResponsivePie } from "@nivo/pie";
import { InfoIcon } from "assets/icons";
import { mockStatistics } from "constants/mockPollData";
import { useTheme } from "hooks";
import { useTabModal } from "hooks/useTabModal";
import { useMediaQuery } from "react-responsive";
import { Icon, Tab, Tooltip } from "ui";

import styles from "./Statistics.module.scss";
import { WEEKLYFEES } from "./WeeklyFeesDatas";

const Statistics = () => {
  const { theme } = useTheme();
  const isSmall = useMediaQuery({
    query: "(max-width: 540px)",
  });
  const tapModal = useTabModal();

  const CurrentDate = new Date();
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <div className={styles.options}>
          <Tab
            names={["Future Gauge Alloc", "Weekly Fees"]}
            maxWidth="1200px"
            tapModal={tapModal}
          />
        </div>
        {tapModal.whichTab === 0 ? (
          <div>
            <div className={styles.date}>
              {CurrentDate.getDate()}/{CurrentDate.getMonth()}/
              {CurrentDate.getFullYear()}
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
          </div>
        ) : (
          <div className={styles.weeklyFees}>
            <div className={styles.mainDates}>Weekly Fees 14/07/2022</div>
            <div className={styles.line}></div>
            <div className={styles.title}>Fees</div>
            <div className={styles.datas}>
              {WEEKLYFEES.map((data: any, i: number) => {
                return (
                  <div className={styles.data} key={i}>
                    <div className={styles.whichDate}>
                      {data.date}{" "}
                      {i === 0 && (
                        <span className={styles.progress}>(in progress)</span>
                      )}
                      <div className={styles.toolTip}>
                        <Tooltip placement="top" content="Content coming here">
                          <Icon size={16}>
                            <InfoIcon />
                          </Icon>
                        </Tooltip>
                      </div>
                    </div>
                    <div className={styles.value}>
                      {i < 3 && "$"}
                      {data.fees}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Statistics };
