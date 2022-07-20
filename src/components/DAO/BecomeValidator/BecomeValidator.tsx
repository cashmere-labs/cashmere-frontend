import styles from "./BecomeValidator.module.scss";
import { Button, Modal, Input, Select, Option, Tooltip, Icon } from "ui";
import { ModalController } from "hooks/useModal";
import { useTheme } from "hooks";
import LOGO from "assets/images/cashmere.png";
import { InfoIcon } from "assets/icons";
import { useMediaQuery } from "react-responsive";

const BecomeValidator = ({ modal }: { modal: ModalController }) => {
  const { theme } = useTheme();
  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Become Validator</div>
      <div className={styles.from}>
        <div>
          <span>From</span>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <Input placeholder="From" height={isPhoneOrLaptop ? "59px" : "71px"} />
      </div>
      <div className={styles.commissionRate}>
        <div>
          <span>Commission Rate</span>
          <Tooltip placement="top" content="Content coming here">
            <Icon size={16}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </div>
        <Input
          placeholder="Commission Rate"
          height={isPhoneOrLaptop ? "59px" : "71px"}
        />
      </div>
    </Modal>
  );
};

export { BecomeValidator };
