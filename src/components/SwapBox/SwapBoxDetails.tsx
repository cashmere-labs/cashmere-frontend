import { InfoIcon, RotateIcon } from "assets/icons";
import { Row } from "components/Row/Row";
import { ReactNode } from "react";
import { Icon, Tooltip } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBoxDetails = ({ ...props }) => {
  const SwapContentBox = ({
    left,
    right,
  }: {
    left: ReactNode;
    right: ReactNode;
  }) => {
    return (
      <Row
        justifyContent="space-between"
        marginTop={12}
        marginBottom={12}
        className={styles.swapContentBox}
      >
        {left}
        {right}
      </Row>
    );
  };

  return (
    <>
      <SwapContentBox
        left={
          <Row>
            <span style={{ marginRight: "6px" }}>Rate after fee</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={
          <Row
            style={{
              whiteSpace: "nowrap",
              marginLeft: "auto",
              justifyContent: "flex-end",
            }}
          >
            <span>1 UST = 1.017 USDT</span>
            <Icon
              style={{ color: `var(--icon-dark)`, marginLeft: "8px" }}
              hoverable
            >
              <RotateIcon />
            </Icon>
          </Row>
        }
      />
      <SwapContentBox
        left={
          <Row>
            <span style={{ marginRight: "6px" }}>Price Impact</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={<span style={{ whiteSpace: "nowrap" }}>1 UST = 1.017 USDT</span>}
      />
      <SwapContentBox
        left={
          <Row>
            <span style={{ marginRight: "6px" }}>Fee</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={<span style={{ whiteSpace: "nowrap" }}>1 UST = 1.017 USDT</span>}
      />
      <SwapContentBox
        left={
          <Row>
            <span style={{ marginRight: "6px" }}>Minimum received</span>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={<span style={{ whiteSpace: "nowrap" }}>24.169.287 USDT</span>}
      />
    </>
  );
};

export { SwapBoxDetails };
