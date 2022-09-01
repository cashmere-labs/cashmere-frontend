import {
  VoteGaugeDesktopTable,
  VoteGaugeDesktopTitle,
  VoteGaugePhoneTable,
  VoteGaugePhoneTitle,
  VoteGaugeModal,
  Waiting,
} from "components";
import styles from "./VoteGauge.module.scss";
import { VOTEGAUGE } from "./datas";
import CALENDER from "assets/icons/calender.png";
import { useMediaQuery } from "react-responsive";
import { useModal } from "hooks";
import { useEffect, useState } from "react";
import { Modal } from "ui";

enum PAGE {
  "FORM",
  "SUCCESS",
}

const VoteGauge = () => {
  const [page, setPage] = useState<PAGE>(PAGE.FORM);
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 975px)",
  });
  const currentDate = new Date();
  const [whichNetwork, setWhichNetwork] = useState(1);
  const voteGaugeModal = useModal();

  useEffect(() => {
    if (page === PAGE.SUCCESS) {
      setPage(PAGE.FORM);
    }
  }, [voteGaugeModal.isOpen]);

  const onSuccess = () => {
    setPage(PAGE.SUCCESS);
  };
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
        <VoteGaugePhoneTable
          datas={VOTEGAUGE}
          open={voteGaugeModal.open}
          setWhichNetwork={setWhichNetwork}
        />
      ) : (
        <VoteGaugeDesktopTable
          datas={VOTEGAUGE}
          open={voteGaugeModal.open}
          setWhichNetwork={setWhichNetwork}
        />
      )}

      {page === PAGE.FORM ? (
        <VoteGaugeModal
          modal={voteGaugeModal}
          onSuccess={onSuccess}
          whichNetwork={whichNetwork}
        />
      ) : (
        <Modal isOpen={voteGaugeModal.isOpen} close={voteGaugeModal.close}>
          <Waiting
            value="24.689.123"
            iconName={"CSM"}
            icon={null}
            functionName="Proposal vote"
          />
        </Modal>
      )}
    </div>
  );
};

export { VoteGauge };
