import { RotateIcon, SettingsIcon } from "assets/icons";
import { Row } from "components";
import React, { ReactNode } from "react";
import { Icon, Select, Option, Input } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBox = () => {
  const options = [
    {
      name: "asfafs",
      label: "asfafs",
    },
  ];

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
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span style={{ color: `var(--text)`, fontSize: "16px" }}>Swap</span>
        <Icon
          style={{ color: `var(--icon-dark)` }}
          hoverPadding="6px"
          size={16}
          hoverable
        >
          <SettingsIcon />
        </Icon>
      </div>

      {/* FROM */}
      <Row
        className={styles.inputLabel}
        marginTop={24}
        marginBottom={6}
        justifyContent="space-between"
      >
        <span>From</span>
        <span>BALANCE: 124124</span>
      </Row>
      <Row>
        <Select
          containerClassName={styles.select}
          extendRight
          isFullWidth
          menuRenderer={() => "asfa"}
          value={"asfas"}
          setValue={() => undefined}
          options={options}
          hideRightBorder
          optionRenderer={() => (
            <>
              {options.map((item) => (
                <Option value={item.name}>{item.name}</Option>
              ))}
            </>
          )}
        />
        <Select
          containerClassName={styles.select}
          extendRight
          extendLeft
          isFullWidth
          menuRenderer={() => "asfa"}
          value={"asfas"}
          setValue={() => undefined}
          options={options}
          optionRenderer={() => (
            <>
              {options.map((item) => (
                <Option value={item.name}>{item.name}</Option>
              ))}
            </>
          )}
        />
        <Input className={styles.input} extendLeft hideLeftBorder />
      </Row>

      {/* ROTATE CIRCLE */}
      <Row marginTop={10} justifyContent="center">
        <Icon size={26} style={{ color: `var(--icon-dark)` }} hoverable>
          <RotateIcon />
        </Icon>
      </Row>

      {/* TO */}
      <Row
        className={styles.inputLabel}
        marginBottom={6}
        justifyContent="space-between"
      >
        <span>To</span>
        <span>BALANCE: 124124</span>
      </Row>
      <Row marginBottom={12}>
        <Select
          extendRight
          isFullWidth
          menuRenderer={() => "asfa"}
          value={"asfas"}
          setValue={() => undefined}
          options={options}
          hideRightBorder
          optionRenderer={() => (
            <>
              {options.map((item) => (
                <Option value={item.name}>{item.name}</Option>
              ))}
            </>
          )}
        />
        <Select
          extendRight
          extendLeft
          isFullWidth
          menuRenderer={() => "asfa"}
          value={"asfas"}
          setValue={() => undefined}
          options={options}
          optionRenderer={() => (
            <>
              {options.map((item) => (
                <Option value={item.name}>{item.name}</Option>
              ))}
            </>
          )}
        />
      </Row>
      <SwapContentBox
        left={<span>Rate after fee</span>}
        right={<span>1 UST = 1.017 USDT</span>}
      />
      <SwapContentBox
        left={<span>Rate after fee</span>}
        right={<span>1 UST = 1.017 USDT</span>}
      />
      <SwapContentBox
        left={<span>Rate after fee</span>}
        right={<span>1 UST = 1.017 USDT</span>}
      />
      <SwapContentBox
        left={<span>Rate after fee</span>}
        right={<span>1 UST = 1.017 USDT</span>}
      />
    </div>
  );
};

export { SwapBox };
