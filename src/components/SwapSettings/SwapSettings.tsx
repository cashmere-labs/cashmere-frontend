import { InfoIcon } from "assets/icons";
import { Column } from "components/Column/Column";
import { Row } from "components/Row/Row";
import { SwapSettings as SwapSettingsType } from "components/SwapSettings/useSwapSettings";
import { ModalController } from "hooks/useModal";
import { Icon, Modal, Radio, Tooltip } from "ui";
import styles from "./SwapSettings.module.scss";

const regexp = /^-?\d*\.?\d*$/;

export const SwapSettings = ({
  modal,
  swapSettings,
}: {
  modal: ModalController;
  swapSettings: SwapSettingsType;
}) => {
  return (
    <Modal className={styles.modal} isOpen={modal.isOpen} close={modal.close}>
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
              isChecked={swapSettings.swapSlippage === "0.0"}
              onClick={() => swapSettings.setSwapSlippage("0.0")}
              className={styles.radio}
              label={<SwapSettingsBadge content="0.0%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              isChecked={swapSettings.swapSlippage === "0.5"}
              onClick={() => swapSettings.setSwapSlippage("0.5")}
              className={styles.radio}
              label={<SwapSettingsBadge content="0.5%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              isChecked={swapSettings.swapSlippage === "1"}
              onClick={() => swapSettings.setSwapSlippage("1")}
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
              onClick={() => swapSettings.setWithdrawSlippage("0.0")}
              className={styles.radio}
              label={<SwapSettingsBadge content="0.0%" />}
              labelPlacement="right"
              isChecked={swapSettings.withdrawSlippage === "0.0"}
            />
          </div>
          <div>
            <Radio
              isChecked={swapSettings.withdrawSlippage === "0.5"}
              onClick={() => swapSettings.setWithdrawSlippage("0.5")}
              className={styles.radio}
              label={<SwapSettingsBadge content="0.5%" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              isChecked={swapSettings.withdrawSlippage === "1"}
              onClick={() => swapSettings.setWithdrawSlippage("1")}
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
              onClick={() => swapSettings.setWithDrawInOtherTokens(false)}
              isChecked={!swapSettings.withDrawInOtherTokens}
              className={styles.radio}
              label={<SwapSettingsBadge content="No" />}
              labelPlacement="right"
            />
          </div>
          <div>
            <Radio
              onClick={() => swapSettings.setWithDrawInOtherTokens(true)}
              isChecked={swapSettings.withDrawInOtherTokens}
              className={styles.radio}
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
      <Row>
        <input
          value={swapSettings.deadline}
          onChange={(e) => {
            if (
              !regexp.test(e.target.value) ||
              e.target.value.includes("-") ||
              e.target.value.length > 2
            ) {
              return;
            }
            swapSettings.setDeadline(e.target.value);
          }}
          className={styles.input}
        />
        <span>Seconds</span>
      </Row>
    </Modal>
  );
};

const SwapSettingsDivider = () => {
  return <div className={styles.divider}></div>;
};

const SwapSettingsBadge = ({ content }: { content: string }) => {
  return <div className={styles.badge}>{content}</div>;
};
