import styles from "./ExecutingModal.module.scss";
import ExitBlack from "assets/icons/exit-black.png";
import ExitWhite from "assets/icons/exit-white.png";
import { useTheme } from "hooks";

const ExecutingModal = () => {
  const { theme } = useTheme();
  const barRate = 0.48;
  return (
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
            <div style={{width: `${barRate * 401}px`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExecutingModal };
