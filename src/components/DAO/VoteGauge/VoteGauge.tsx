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
import { useEffect, useMemo, useState } from "react";
import { Modal } from "ui";
import { useNetwork } from "store/hooks/networkHooks";

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
  const [whichToken, setWhichToken] = useState(1);
  const voteGaugeModal = useModal();
  const network = useNetwork();

  useEffect(() => {
    if (page === PAGE.SUCCESS) {
      setPage(PAGE.FORM);
    }
  }, [voteGaugeModal.isOpen]);

  const onSuccess = () => {
    setPage(PAGE.SUCCESS);
  };

  const voteData = useMemo(() => {
    return VOTEGAUGE.filter((item) => item.network === network);
  }, [network]);

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
          datas={voteData}
          open={voteGaugeModal.open}
          setWhichNetwork={setWhichNetwork}
          setWhichToken={setWhichToken}
        />
      ) : (
        <VoteGaugeDesktopTable
          datas={voteData}
          open={voteGaugeModal.open}
          setWhichNetwork={setWhichNetwork}
          setWhichToken={setWhichToken}
        />
      )}

      {page === PAGE.FORM ? (
        <VoteGaugeModal
          modal={voteGaugeModal}
          onSuccess={onSuccess}
          whichNetwork={whichNetwork}
          whichToken={whichToken}
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
