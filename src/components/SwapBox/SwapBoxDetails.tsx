import { InfoIcon, RotateIcon } from "assets/icons";
import { Row } from "components/Row/Row";
import { ReactNode } from "react";
import { SwapDetailsData } from "types/swap";
import { Icon, Tooltip } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBoxDetails = ({ data }: { data: SwapDetailsData }) => {
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
            <Tooltip
              padding="24px 36px"
              placement="top"
              content="Content coming here"
            >
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
            <span>{data.rataAfterFee}</span>
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
            <Tooltip
              padding="24px 36px"
              placement="top"
              content="Content coming here"
            >
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={<span style={{ whiteSpace: "nowrap" }}>{data.priceImpact}</span>}
      />
      <SwapContentBox
        left={
          <Row>
            <span style={{ marginRight: "6px" }}>Fee</span>
            <Tooltip
              padding="24px 36px"
              placement="top"
              content="Content coming here"
            >
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={<span style={{ whiteSpace: "nowrap" }}>{data.fee}</span>}
      />
      <SwapContentBox
        left={
          <Row>
            <span style={{ marginRight: "6px" }}>Minimum received</span>
            <Tooltip
              padding="24px 36px"
              placement="top"
              content="Content coming here"
            >
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </Row>
        }
        right={
          <span style={{ whiteSpace: "nowrap" }}>{data.minimumReceived}</span>
        }
      />
    </>
  );
};

export { SwapBoxDetails };
