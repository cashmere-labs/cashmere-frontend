import {
  LiquidityStakeReward,
  PoolDesktopTable,
  PoolDesktopTitle,
  PoolPhoneTable,
  PoolPhoneTitle,
  Waiting,
} from "components";
import { useModal, useTheme } from "hooks";
import { usePoolStates } from "hooks";
import { FilterType, PoolTab } from "pages/Pool/Pool";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTypedSelector } from "store";
import { Button, Modal } from "ui";
import { clsnm } from "utils/clsnm";

import { GlobalData, PersonalData } from "../datas";
import styles from "./Pools.module.scss";

enum Page {
  "FORM",
  "SUCCESS",
}

type PoolsProps = {
  filter: FilterType;
  poolTab: PoolTab;
};

const Pools = ({ filter, poolTab }: PoolsProps) => {
  const poolCount = useTypedSelector((state) => state.pool.poolCount);
  const functionName = useTypedSelector((state) => state.pool.functionName);
  const value = useTypedSelector((state) => state.pool.value);

  const [whichModal, setWhichModal] = useState<Page>(Page.FORM);

  const stakeModal = useModal();
  const [whichNetwork, setWhichNetwork] = useState();
  const { increasePoolCount } = usePoolStates();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const { theme } = useTheme();
  const whichData = poolTab === PoolTab.MY ? PersonalData : GlobalData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
        {isPhoneOrLaptop ? (
          <PoolPhoneTitle />
        ) : (
          <PoolDesktopTitle whichPool={poolTab === PoolTab.MY} />
        )}
        {isPhoneOrLaptop ? (
          <PoolPhoneTable
            whichPool={poolTab === PoolTab.MY}
            bodyCount={poolCount}
            modal={stakeModal}
            datas={whichData}
            filter={filter}
            setWhichNetwork={setWhichNetwork}
          />
        ) : (
          <PoolDesktopTable
            whichPool={poolTab === PoolTab.MY}
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
      {poolTab === PoolTab.MY
        ? PersonalData.length > poolCount && (
            <div className={styles.more}>
              <Button
                height="40px"
                width="156px"
                onClick={() => increasePoolCount()}
                color={theme === "light" ? "black" : "white"}
                className={clsnm(
                  styles.moreButton,
                  theme === "light" ? styles.white : styles.black,
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
                  theme === "light" ? styles.white : styles.black,
                )}
              >
                more
              </Button>
            </div>
          )}
      {whichModal === Page.FORM ? (
        <LiquidityStakeReward
          modal={stakeModal}
          onSuccess={() => setWhichModal(Page.SUCCESS)}
          whichNetwork={whichNetwork}
        />
      ) : (
        <Modal
          isOpen={stakeModal.isOpen}
          close={() => {
            stakeModal.close();
            setWhichModal(Page.FORM);
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
