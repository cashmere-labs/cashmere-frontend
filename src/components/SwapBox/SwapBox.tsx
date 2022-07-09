import { SettingsIcon } from "assets/icons";
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
        <span>Swap</span>
        <Icon
          style={{ color: `var(--icon-dark)` }}
          hoverPadding="6px"
          size={16}
          hoverable
        >
          <SettingsIcon />
        </Icon>
      </div>
      <div className={styles.row}>
        <Select
          extendRight
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
        <Select
          extendRight
          extendLeft
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
