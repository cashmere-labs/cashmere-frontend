import styles from "./Pools.module.scss";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { PersonalData, GlobalData } from "../datas";
import { useMediaQuery } from "react-responsive";
import { Button, Modal } from "ui";
import { useSelector } from "react-redux";
import { usePoolStates } from "hooks";
import {
  PoolPhoneTable,
  PoolPhoneTitle,
  PoolDesktopTable,
  PoolDesktopTitle,
  LiquidityStakeReward,
  Waiting,
} from "components";
import { useEffect, useState } from "react";

enum PAGE {
  "FORM",
  "SUCCESS",
}

const Pools = ({ filter }: any) => {
  const whichPool = useSelector((state: any) => state.pool.whichPool);
  const poolCount = useSelector((state: any) => state.pool.poolCount);
  const functionName = useSelector((state: any) => state.pool.functionName);
  const value = useSelector((state: any) => state.pool.value);

  const [whichModal, setWhichModal] = useState<PAGE>(PAGE.FORM);

  const stakeModal = useModal();
  const [whichNetwork, setWhichNetwork] = useState();

  const { increasePoolCount } = usePoolStates();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const { theme } = useTheme();
  const whichData = whichPool ? PersonalData : GlobalData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
        {isPhoneOrLaptop ? (
          <PoolPhoneTitle />
        ) : (
          <PoolDesktopTitle whichPool={whichPool} />
        )}
        {isPhoneOrLaptop ? (
          <PoolPhoneTable
            whichPool={whichPool}
            bodyCount={poolCount}
            modal={stakeModal}
            datas={whichData}
            filter={filter}
            setWhichNetwork={setWhichNetwork}
          />
        ) : (
          <PoolDesktopTable
            whichPool={whichPool}
            bodyCount={poolCount}
            modal={stakeModal}
            datas={whichData}
            filter={filter}
            setWhichNetwork={setWhichNetwork}
          />
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
      {whichModal === PAGE.FORM ? (
        <LiquidityStakeReward
          modal={stakeModal}
          onSuccess={() => setWhichModal(PAGE.SUCCESS)}
          whichNetwork={whichNetwork}
        />
      ) : (
        <Modal
          isOpen={stakeModal.isOpen}
          close={() => {
            stakeModal.close();
            setWhichModal(PAGE.FORM);
          }}
        >
          <Waiting
            value={value}
            iconName={"veCSM"}
            icon={null}
            functionName={functionName}
          />
        </Modal>
      )}
    </div>
  );
};

export { Pools };
