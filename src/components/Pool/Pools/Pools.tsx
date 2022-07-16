import styles from "./Pools.module.scss";
import { useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { PersonalData, GlobalData } from "../datas";
import { useMediaQuery } from "react-responsive";
import { Button } from "ui";
import { useSelector } from "react-redux";
import { usePoolStates } from "hooks";
import { PoolPhoneTable, PoolPhoneTitle, PoolDesktopTable, PoolDesktopTitle } from "components";

const Pools = () => {
  const whichPool = useSelector((state: any) => state.pool.whichPool);
  const poolCount = useSelector((state: any) => state.pool.poolCount);

  const { increasePoolCount } = usePoolStates();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const { theme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
        {isPhoneOrLaptop ? <PoolPhoneTitle /> : <PoolDesktopTitle />}
        {isPhoneOrLaptop ? (
          <PoolPhoneTable whichPool={whichPool} bodyCount={poolCount} />
        ) : (
          <PoolDesktopTable whichPool={whichPool} bodyCount={poolCount} />
        )}
      </div>
      <div className={styles.footer}>
        The base emission rate is currently 1.5 CSM per second.
      </div>
      {whichPool
        ? PersonalData.length > poolCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                onClick={() => increasePoolCount()}
                color={theme === "light" ? "black" : "white"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black
                )}
              >
                more
              </Button>
            </div>
          )
        : GlobalData.length > poolCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                fontSize="fs16"
                onClick={() => increasePoolCount()}
                color={theme === "light" ? "black" : "white"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black
                )}
              >
                more
              </Button>
            </div>
          )}
    </div>
  );
};

export { Pools };
