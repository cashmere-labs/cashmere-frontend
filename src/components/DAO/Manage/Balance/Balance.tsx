import CALENDER from "assets/icons/calender.png";
import CLOCK from "assets/icons/clock.png";
import LOGO from "assets/images/cashmereGray.png";
import useDimensions from "react-cool-dimensions";

import styles from "./Balance.module.scss";

const Balance = () => {
  const value = 0.65;
  const { observe, width } = useDimensions({
    onResize: ({ observe }) => {
      observe(); // To re-start observing the current target element
    },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>My Balance</div>
        <div>
          562.93 <span className={styles.token}>veCSM</span>
        </div>
      </div>
      <div ref={observe} className={styles.bar}>
        <div
          className={styles.value}
          style={{ width: `${width * value}px` }}
        ></div>
      </div>
      <div className={styles.subTitle}>
        <div>Total veCSM supply: 358.47 M</div>
        <div>Max veCSM to Earn: 1000</div>
      </div>
      <div className={styles.components}>
        <div className={styles.component}>
          <div className={styles.text}>
            <div>End Date</div>
            <div className={styles.date}>25/02/2024</div>
          </div>
          <img src={CALENDER}></img>
        </div>
        <div className={styles.component}>
          <div className={styles.text}>
            <div>Locked CSM</div>
            <div className={styles.date}>209.23</div>
          </div>
          <img src={LOGO}></img>
        </div>
        <div className={styles.component}>
          <div className={styles.text}>
            <div>DAO Pool Share</div>
            <div className={styles.date}>0.045%</div>
          </div>
          <img src={CLOCK}></img>
        </div>
      </div>
    </div>
  );
};

export { Balance };
