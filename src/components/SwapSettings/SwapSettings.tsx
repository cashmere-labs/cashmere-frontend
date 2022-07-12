import { InfoIcon } from "assets/icons";
import { Column } from "components/Column/Column";
import { Row } from "components/Row/Row";
import { SwapSettings as SwapSettingsType } from "components/SwapSettings/useSwapSettings";
import { ModalController } from "hooks/useModal";
import { Icon, Modal, Radio, Tooltip } from "ui";
import styles from "./SwapSettings.module.scss";

export const SwapSettings = ({
  modal,
  swapSettings,
}: {
  modal: ModalController;
  swapSettings: SwapSettingsType;
}) => {
  return (
    <Modal isOpen={modal.isOpen} close={modal.close}>
      <Column alignItems="flex-start">
        <span className={styles.label}>Swap</span>
        <Row alignItems="center" marginTop={4} marginBottom={12}>
          <span
            style={{
              marginRight: "10px",
              display: "block",
            }}
          >
            Slippage tolerance
          </span>
          <Tooltip placement="bottom" content="Content here">
            <Icon size={18}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </Row>
        <Row>
          <div>
            <Radio
              style={{ marginRight: "20px" }}
              label={<SwapSettingsBadge content="0.0%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              style={{ marginRight: "20px" }}
              label={<SwapSettingsBadge content="0.5%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              label={<SwapSettingsBadge content="1%" />}
              labelPlacement="right"
            />
          </div>
        </Row>
      </Column>
      <SwapSettingsDivider />
      <Column alignItems="flex-start">
        <span className={styles.label}>Withdrawal</span>
        <Row alignItems="center" marginTop={4} marginBottom={12}>
          <span
            style={{
              marginRight: "10px",
              display: "block",
            }}
          >
            Slippage tolerance
          </span>
          <Tooltip placement="bottom" content="Content here">
            <Icon size={18}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </Row>
        <Row marginBottom={12}>
          <div>
            <Radio
              style={{ marginRight: "20px" }}
              label={<SwapSettingsBadge content="0.0%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              style={{ marginRight: "20px" }}
              label={<SwapSettingsBadge content="0.5%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              label={<SwapSettingsBadge content="1%" />}
              labelPlacement="right"
            />
          </div>
        </Row>
      </Column>
      <Column alignItems="flex-start">
        <Row alignItems="center" marginTop={4} marginBottom={12}>
          <span
            style={{
              marginRight: "10px",
              display: "block",
            }}
          >
            Withdrawal In Other Tokens
          </span>
          <Tooltip placement="bottom" content="Content here">
            <Icon size={18}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </Row>
        <Row>
          <div>
            <Radio
              style={{ marginRight: "20px" }}
              label={<SwapSettingsBadge content="No" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              style={{ marginRight: "20px" }}
              label={<SwapSettingsBadge content="Yes" />}
              labelPlacement="right"
            />
          </div>
        </Row>
      </Column>
      <SwapSettingsDivider />
      <Column alignItems="flex-start">
        <span className={styles.label}>Transaction</span>
        <Row alignItems="center" marginTop={4} marginBottom={12}>
          <span
            style={{
              marginRight: "10px",
              display: "block",
            }}
          >
            Slippage Deadline
          </span>
          <Tooltip placement="bottom" content="Content here">
            <Icon size={18}>
              <InfoIcon />
            </Icon>
          </Tooltip>
        </Row>
      </Column>
    </Modal>
  );
};

const SwapSettingsDivider = () => {
  return <div className={styles.divider}></div>;
};

const SwapSettingsBadge = ({ content }: { content: string }) => {
  return <div className={styles.badge}>{content}</div>;
};
