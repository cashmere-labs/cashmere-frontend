import styles from "./Balance.module.scss";
import CLOCK from "assets/icons/clock.png";
import CALENDER from "assets/icons/calender.png";
import LOGO from "assets/images/cashmereGray.png";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
const Balance = () => {
  const value = 0.65;
  const divRef = useRef<HTMLDivElement>(null);
  const [currentWidth, setCurrentWidth] = useState(0);

  useLayoutEffect(() => {
    if (divRef.current === null) return;
    setCurrentWidth(divRef.current.clientWidth);
  }, []);

  useEffect(() =>{
    if(currentWidth<1000)  console.log(currentWidth)
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>My Balance</div>
        <div>
          562.93 <span className={styles.token}>veCSM</span>
        </div>
      </div>
      <div ref={divRef} className={styles.bar}>
        <div
          className={styles.value}
          style={{ width: `${1217 * value}px` }}
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
