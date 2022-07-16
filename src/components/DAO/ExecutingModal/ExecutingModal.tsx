import styles from "./ExecutingModal.module.scss";
import ExitBlack from "assets/icons/exit-black.png";
import ExitWhite from "assets/icons/exit-white.png";
import { useTheme } from "hooks";
import { Button, Input, Tooltip, Icon } from "ui";
import { useMediaQuery } from "react-responsive";
import { InfoIcon } from "assets/icons";

const ExecutingModal = () => {
  const { theme } = useTheme();

  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 750px)",
  });

  const minWidth = useMediaQuery({
    query: "(max-width: 375px)",
  });

  const barRate = 0.48;
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <img
          className={styles.exit}
          src={theme === "light" ? ExitBlack : ExitWhite}
        ></img>
        <div>
          <div className={styles.title}>
            <div>ID: 6</div>
            <div>Executing</div>
            <div>Register Liquidation Queue Contract</div>
            <div>Wed, Nov 10, 2021</div>
          </div>
          <div className={styles.voteInfos}>
            <div className={styles.votes}>
              <div>
                <span>Voted</span>
                <span>48.3%</span>
              </div>
              <div>
                <span>Yes</span>
                <span>48.3%</span>
              </div>
              <div>
                <span>No</span>
                <span>00.0%</span>
              </div>
            </div>
            <div>Pass Threshold</div>
            <div>
              <div
                style={{
                  width: `${
                    isPhoneOrLaptop
                      ? minWidth
                        ? barRate * 290 // !
                        : barRate * 337
                      : barRate * 401
                  }px`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.infoRow}>
            <div>
              <div>Creator</div>
              <div>Jump Crypto</div>
            </div>
            <div>
              <div>Total Amount</div>
              <div>1,000 veCSM</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div>
              <div>Start time</div>
              <div>Wed, Nov 10, 2021&nbsp; 9:08:36 PM</div>
            </div>
            <div>
              <div>Estimated end time</div>
              <div>Wed, Nov 10, 2021 &nbsp;9:08:36 PM</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div>
              <div>Description</div>
              <div>Change the liquidation contract address on Overseer...</div>
            </div>
            <div>
              <div className={styles.tip}>
                <span>Extra Rewards</span>
                <Tooltip placement="top" content="Content coming here">
                  <Icon size={16}>
                    <InfoIcon />
                  </Icon>
                </Tooltip>
              </div>
              <div>100,000 USDD to Yes supporters in Jump Crypto</div>
            </div>
          </div>
        </div>
        <div>BALANCE 24,689.905</div>
        <div>
          <Input
            placeholder="Amount"
            className={styles.input}
            extendLeft
            hideBorder
          />
          <Button
            height="25px"
            width="45px"
            fontSize={"fs12"}
            fontWeight="fw600"
            onClick={() => {}}
            color={theme === "light" ? "white" : "white"}
          >
            Max
          </Button>
          <div>VeCSM</div>
        </div>
        <div>
          <Button
            height="34px"
            width="300px"
            fontSize={"fs16"}
            fontWeight="fw600"
            onClick={() => {}}
            color={theme === "light" ? "black" : "white"}
          >
            Yes
          </Button>
          <Button
            height="34px"
            width="300px"
            fontSize={"fs16"}
            fontWeight="fw600"
            onClick={() => {}}
            color={theme === "light" ? "transparentWhite" : "transparentBlack"}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ExecutingModal };
