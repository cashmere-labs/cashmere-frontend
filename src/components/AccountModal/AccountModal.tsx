import { Row } from "components/Row/Row";
import { ModalController } from "hooks/useModal";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Button, Icon, Modal } from "ui";
import styles from "./AccountModal.module.scss";
import { useAccount } from "ethylene/hooks";
import { formatAddress } from "utils/formatAddress";
import { useTheme } from "hooks";
import { AccountBalance } from "types/app";
import { getBadgeProps, NetworkTypes } from "ui/NetworkBadge/utils";

type AccountModalProps = {
  modalContoller: ModalController;
};

enum Page {
  "ACCOUNT",
  "TRANSACTIONS",
}

const AccountModal = ({ modalContoller }: AccountModalProps) => {
  const [page, setPage] = useState<Page>(Page.ACCOUNT);
  const { address } = useAccount();
  const { theme } = useTheme();

  const getTabColor = (type: Page) => {
    if (type === Page.ACCOUNT) {
      if (page === Page.ACCOUNT) {
        return "black";
      }
      return "neutral";
    } else {
      if (page === Page.TRANSACTIONS) {
        return "black";
      }
      return "neutral";
    }
  };

  const balances: AccountBalance[] = [
    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },
    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },
    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },
    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },
    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },
    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },

    {
      token: "CSM",
      usd: "$0.00",
      native: "0 CSM",
      image: getBadgeProps(NetworkTypes.ETHEREUM).icon,
    },
  ];

  return (
    <Modal
      width="512px"
      className={styles.modalWrapper}
      paddingTop="0rem"
      isOpen={modalContoller.isOpen}
      close={modalContoller.close}
    >
      <div className={styles.header}>
        <span>{page === Page.ACCOUNT ? "Account" : "Transactions"}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.tabs}>
          <div className={styles.tabsWrapper}>
            <Button
              color={getTabColor(Page.ACCOUNT)}
              onClick={() => setPage(Page.ACCOUNT)}
            >
              Account
            </Button>
            <div className={styles.space}></div>
            <Button
              onClick={() => setPage(Page.TRANSACTIONS)}
              color={getTabColor(Page.TRANSACTIONS)}
            >
              Transactions
            </Button>
          </div>
        </div>
        <div className={styles.account}>
          <Row>
            <Icon className={styles.avatar}>
              <FiUser />
            </Icon>
            <div className={styles.content}>
              <span className={styles.title}>Connected with Metamask</span>
              <Row>
                <span className={styles.address}>
                  {address && formatAddress(address)}
                </span>
                <Icon size={16} className={styles.link}>
                  <BiLinkExternal />
                </Icon>
              </Row>
            </div>
            <Button color="neutral" className={styles.button}>
              Change
            </Button>
          </Row>
        </div>
        <div className={styles.items}>
          {page === Page.ACCOUNT
            ? balances.map((item:any, i:number) => (
                <div className={styles.item} key={i}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.token} />
                  </div>
                  <div className={styles.balanceWrapper}>
                    <span className={styles.balanceItemHeader}>Balance</span>
                    <span className={styles.tokenName}>{item.token}</span>
                  </div>
                  <div className={styles.amounts}>
                    <span className={styles.usd}>{item.usd}</span>
                    <span>{item.native}</span>
                  </div>
                </div>
              ))
            : balances.map((item) => (
                <div className={styles.item}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.token} />
                  </div>
                  <div className={styles.balanceWrapper}>
                    <span className={styles.balanceItemHeader}>Balance</span>
                    <span className={styles.tokenName}>{item.token}</span>
                  </div>
                  <div className={styles.amounts}>
                    <span className={styles.usd}>{item.usd}</span>
                    <span>{item.native}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span>Click the icon to add the token to your wallet</span>
      </div>
    </Modal>
  );
};

export { AccountModal };
