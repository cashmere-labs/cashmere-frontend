import { ModalController } from "hooks/useModal";
import { TransactionStep } from "types/app";
import { Icon, Modal, Spinner } from "ui";
import styles from "./TxProgressModal.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import { Row } from "components";
import { clsnm } from "utils/clsnm";
import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

type TxProgressModalProps = {
  modalController: ModalController;
  steps: TransactionStep[];
};

const TxProgressModal = ({ modalController, steps }: TxProgressModalProps) => {
  return (
    <Modal
      className={styles.modal}
      width="512px"
      paddingTop="2.5rem"
      isOpen={modalController.isOpen}
      close={modalController.close}
    >
      <div className={styles.header}>
        <span>Transaction in Progress</span>
      </div>
      <div className={styles.body}>
        {steps.map((item, key) => (
          <div key={key} className={styles.step}>
            <div className={styles.progress}>
              <RenderProgress progress={item.progress} />
            </div>
            <div className={styles.content}>
              <span className={styles.titleWrapper}>
                <Row>
                  <span className={styles.title}>{item.title}</span>
                  <Icon className={styles.link} size={20}>
                    <BiLinkExternal />
                  </Icon>
                </Row>
              </span>
              <div className={styles.label}>
                <img src={item.image} />
                <span>Powered by {item.poweredBy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        This usually takes ~4minutes
        <br /> but sometimes the wait is longer.
      </div>
    </Modal>
  );
};

const RenderProgress = ({
  progress,
}: {
  progress: TransactionStep["progress"];
}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div className={clsnm(styles.circle, progress)}>{children}</div>;
  };

  if (progress === "done") {
    return (
      <Wrapper>
        <Icon size={16}>
          <FaCheck />
        </Icon>
      </Wrapper>
    );
  } else if (progress === "in_progress") {
    return (
      <Wrapper>
        <Spinner className={styles.spinner} />
      </Wrapper>
    );
  } else {
    return <Wrapper>{null}</Wrapper>;
  }
};

export { TxProgressModal };
