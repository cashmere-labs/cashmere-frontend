import { InfoIcon } from "assets/icons";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";
import { Waiting } from "components";
import { useModal, useTheme } from "hooks";
import { useState } from "react";
import { Button, Icon, Modal, Tooltip } from "ui";

import styles from "./UpperPage.module.scss";

const UpperPage = () => {
  const { theme } = useTheme();

  const waitingModal = useModal();

  const [functionName, setFunctionName] = useState("");
  const [whichModal, setWhichModal] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.infos}>
        <div className={styles.apr}>
          <div>
            <span>APR</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </div>
          <div>23.2%</div>
          <div>
            <span>Est. Yearly Revenue</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </div>
          <div>$2,145,239.67</div>
        </div>
        <div className={styles.totalStaked}>
          <div>
            <span>Total Staked</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </div>
          <div>73.59M</div>
          <div>
            <div>CSM</div>
            <div>(23.24%)</div>
          </div>
        </div>
      </div>
      <div className={styles.yourProfit}>
        <div className={styles.title}>
          <div>Your Profit</div>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <div className={styles.value}>$2149.78</div>
        <div className={styles.line}></div>
        <div className={styles.poolShare}>
          <div>
            <div>Pool Share</div>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </div>
          <div> 1.2%</div>
        </div>
        <div className={styles.date}>
          <div>
            <div>Premium Date</div>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </div>
          <div>25 / 09 / 2022</div>
        </div>
        <div className={styles.claim}>
          <Button
            width="45px"
            height="40px"
            color={theme === "light" ? "black" : "white"}
            onClick={() => {
              setWhichModal(0);
              setFunctionName("Claim");
              waitingModal.open();
            }}
          >
            Claim
          </Button>
        </div>
      </div>
      <div className={styles.farm}>
        <div className={styles.logo}>
          <img src={theme === "light" ? LOGOBLACK : LOGOWHITE}></img>
        </div>
        <div className={styles.lp}>
          <div> CSM-USN LP</div>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <div className={styles.apr}>APR</div>
        <div className={styles.value}>53.12%</div>
        <div className={styles.farmButton}>
          <Button
            width="45px"
            height="40px"
            color={theme === "light" ? "black" : "white"}
            onClick={() => {
              setWhichModal(1);
              setFunctionName("Farm");
              waitingModal.open();
            }}
          >
            Farm
          </Button>
        </div>
      </div>
      <Modal
        isOpen={waitingModal.isOpen}
        close={() => {
          waitingModal.close();
        }}
      >
        <Waiting
          value={whichModal === 0 ? "2149$" : "2423"}
          iconName={whichModal === 0 ? "Dolar" : "veCSM"}
          icon={null}
          functionName={functionName}
        />
      </Modal>
    </div>
  );
};

export { UpperPage };
