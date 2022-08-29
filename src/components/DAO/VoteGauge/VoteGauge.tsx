import {
  VoteGaugeDesktopTable,
  VoteGaugeDesktopTitle,
  VoteGaugePhoneTable,
  VoteGaugePhoneTitle,
} from "components";
import styles from "./VoteGauge.module.scss";
import { VOTEGAUGE } from "./datas";
import CALENDER from "assets/icons/calender.png";
import { useMediaQuery } from "react-responsive";

const VoteGauge = () => {
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 975px)",
  });
  const currentDate = new Date();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.text}>Vote Gauge</div>
        <div className={styles.date}>
          {currentDate.getDate()}/{currentDate.getMonth()}/
          {currentDate.getFullYear()}
          <img className={styles.image} src={CALENDER}></img>
        </div>
      </div>
      {isPhoneOrLaptop ? <VoteGaugePhoneTitle /> : <VoteGaugeDesktopTitle />}
      {isPhoneOrLaptop ? (
        <VoteGaugePhoneTable datas={VOTEGAUGE} />
      ) : (
        <VoteGaugeDesktopTable datas={VOTEGAUGE} />
      )}
    </div>
  );
};

export { VoteGauge };
