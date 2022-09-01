import { Row } from "components";
import { useAccount } from "ethylene/hooks";
import { useTheme } from "hooks";
import { ModalController } from "hooks/useModal";
import React, { useMemo, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { AccountBalance } from "types/app";
import { Button, Icon, Modal } from "ui";
import { NetworkTypes, getBadgeProps } from "ui/NetworkBadge/utils";
import { formatAddress } from "utils/formatAddress";

import styles from "./AccountModal.module.scss";

type AccountModalProps = {
  modalContoller: ModalController;
};

enum Page {
  "ACCOUNT",
  "TRANSACTIONS",
}

const AccountModal: React.FC<AccountModalProps> = ({
  modalContoller,
}: AccountModalProps) => {
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

  const balances: AccountBalance[] = useMemo(
    () => [
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
    ],
    [],
  );

  const accountModalItems = useMemo(() => {
    if (page === Page.ACCOUNT) {
      return balances.map((item: any, i: number) => (
        <AccountModalItem item={item} key={i} />
      ));
    } else {
      return balances.map((item: any, i: number) => (
        <AccountModalItem item={item} key={i} />
      ));
    }
  }, [page, balances]);

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
        <div className={styles.items}>{accountModalItems}</div>
      </div>
      <div className={styles.footer}>
        <span>Click the icon to add the token to your wallet</span>
      </div>
    </Modal>
  );
};

type AccountModalItemProps = {
  item: AccountBalance;
};

const AccountModalItem: React.FC<AccountModalItemProps> = ({
  item,
}: AccountModalItemProps) => {
  return (
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
  );
};

export { AccountModal };
