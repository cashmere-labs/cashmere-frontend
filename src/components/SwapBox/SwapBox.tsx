import { RotateIcon, SettingsIcon } from "assets/icons";
import { Row } from "components";
import { SwapBoxDetails } from "components/SwapBox/SwapBoxDetails";
import { Icon, Select, Option, Input } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBox = () => {
  const options = [
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },

    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
    {
      name: "asfafs",
      label: "asfafs",
    },
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
        <Input
          placeholder="Enter amount"
          className={styles.input}
          extendLeft
          hideLeftBorder
        />
      </Row>
      {/* FROM ENDS */}

      {/* ROTATE CIRCLE */}
      <Row marginTop={20} marginBottom={8} justifyContent="center">
        <Icon
          borderRadius="8px"
          size={26}
          style={{ color: `var(--icon-dark)` }}
          hoverable
        >
          <RotateIcon />
        </Icon>
      </Row>
      {/* ROTATE CIRCLE ENDS */}

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
              {options.map((item, key) => (
                <Option key={key} value={item.name}>
                  {item.name}
                </Option>
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
              {options.map((item, key) => (
                <Option key={key} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </>
          )}
        />
        <Input
          placeholder="Enter amount"
          className={styles.input}
          extendLeft
          hideLeftBorder
        />
      </Row>
      {/* TO ENDS */}
      <SwapBoxDetails />
    </div>
  );
};

export { SwapBox };
