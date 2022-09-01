import styles from "./VoteGaugeModal.module.scss";
import { ModalController } from "hooks/useModal";
import { Token, Modal, Input, Button, Tooltip, Icon } from "ui";
import { useSelector } from "react-redux";
import CALENDER from "assets/icons/calender.png";
import { TokenTypes } from "ui/Token/utils";
import { useTheme } from "hooks";
import LOGOBLACK from "assets/images/cashmere.png";
import LOGOWHITE from "assets/images/cashmereWhite.png";
import { useMediaQuery } from "react-responsive";
import { InfoIcon } from "assets/icons";

const VoteGaugeModal = ({
  modal,
  onSuccess,
  whichNetwork,
  whichToken
}: {
  modal: ModalController;
  onSuccess: () => void;
  whichNetwork: any;
  whichToken: any;
}) => {
  const isPhoneOrPC = useMediaQuery({
    query: "(max-width: 500px)",
  });
  const { theme } = useTheme();
  const currentDate = new Date();
  return (
    <Modal
      isOpen={modal.isOpen}
      close={modal.close}
      className={styles.wrapper}
      network={whichNetwork}
    >
      <div className={styles.line}></div>
      <div className={styles.firstTitle}>
        <div>Future Gauge Date</div>
        <div>Voting Pool</div>
      </div>
      <div className={styles.firstTitleValue}>
        <div className={styles.date}>
          <img className={styles.image} src={CALENDER}></img>
          {currentDate.getDate()}/{currentDate.getMonth()}/
          {currentDate.getFullYear()}
        </div>
        <div className={styles.token}>
          <Token label={whichToken} />
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.secondTitle}>
        <div>Select Amount</div>
        <div>%50 vote power left</div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.pattern}>
          <img
            className={styles.image}
            src={theme === "light" ? LOGOBLACK : LOGOWHITE}
          ></img>
          <div className={styles.text}>CSM</div>
        </div>
        <Input
          extendLeft
          placeholder="Amount"
          height={"71px"}
          // onChange={(e) => dispatch(setValue(e.target.value.toString()))}
        />
        <Button
          width="65px"
          height="34px"
          color={theme === "light" ? "gray" : "white"}
        >
          Max
        </Button>
      </div>
      <div className={styles.rest}>% of your voting power</div>
      <div className={styles.line}></div>
      <div className={styles.info}>
        2500.06 veCSM (50%) of your voting power will be allocated to this gauge
        <Tooltip placement="bottom" content="Content here">
          <Icon size={16} className={styles.infoToolTip}>
            <InfoIcon />
          </Icon>
        </Tooltip>
      </div>
      <div className={styles.line2}></div>
      <div className={styles.data}>
        <div className={styles.title}>
          <span>Gauge’s Current CSM APY</span>
          <span>
            <Tooltip placement="bottom" content="Content here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </span>
        </div>
        <div className={styles.value}>3.14 -{">"} 7.2</div>
      </div>
      <div className={styles.line2}></div>
      <div className={styles.data}>
        <div className={styles.title}>
          Gauge’s Future CSM APY
          <Tooltip placement="bottom" content="Content here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <div className={styles.value}>4.2 -{">"} 8.3</div>
      </div>
      <div className={styles.line2}></div>
      <div className={styles.data}>
        <div className={styles.title}>
          Gauge’s Future Weight
          <Tooltip placement="bottom" content="Content here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <div className={styles.value}>0.54%</div>
      </div>
      <Button
        height={isPhoneOrPC ? "34px" : "56px"}
        width={"100%"}
        color={theme === "light" ? "black" : "white"}
        className={styles.button}
        onClick={() => onSuccess()}
      >
        Vote Gauge
      </Button>
    </Modal>
  );
};

export { VoteGaugeModal };
