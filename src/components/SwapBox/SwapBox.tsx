import { SettingsIcon } from "assets/icons";
import { Row } from "components";
import { Icon, Select, Option } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBox = () => {
  const options = [
    {
      name: "asfafs",
      label: "asfafs",
    },
  ];

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
      <Row
        className={styles.inputLabel}
        marginTop={24}
        marginBottom={6}
        justifyContent="space-between"
      >
        <span>From</span>
        <span>BALANCE: 124124</span>
      </Row>
      <div className={styles.row}>
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
      </div>
    </div>
  );
};

export { SwapBox };
