import { RotateIcon, SettingsIcon } from "assets/icons";
import { Row } from "components";
import { SwapBoxDetails } from "components/SwapBox/SwapBoxDetails";
import { Aurora, Dai, Polygon, Tetherus } from "constants/tokens";
import { useTheme } from "hooks";
import { useState } from "react";
import { Token } from "types/token";
import { Icon, Select, Option, Input, Button } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBox = () => {
  const options = [Aurora, Tetherus, Dai, Polygon];

  const { theme } = useTheme();
  const [state, setState] = useState({
    fromfrom: Aurora,
    fromto: Tetherus,
    tofrom: Polygon,
    toto: Dai,
  });

  const reverse = () => {
    let _state = { ...state };
    _state.fromfrom = state.tofrom;
    _state.fromto = state.toto;
    _state.tofrom = state.fromto;
    _state.toto = state.fromfrom;

    setState(_state);
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
          menuRenderer={() => <TokenRenderer token={state.fromfrom} />}
          value={state.fromfrom}
          setValue={() => undefined}
          options={options}
          hideRightBorder
          optionRenderer={(close) => (
            <>
              {options.map((item, key) => (
                <Option
                  onClick={() => {
                    setState({ ...state, fromfrom: item });
                    close?.();
                  }}
                  style={{ marginRight: "8px" }}
                  key={key}
                  value={item.name}
                >
                  <TokenRenderer token={item} />
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
          menuRenderer={() => <TokenRenderer token={state.fromto} />}
          value={state.fromto}
          setValue={() => undefined}
          options={options}
          optionRenderer={(close) => (
            <>
              {options.map((item, key) => (
                <Option
                  style={{ marginRight: "8px" }}
                  key={key}
                  value={item.name}
                  onClick={() => {
                    setState({ ...state, fromto: item });
                    close?.();
                  }}
                >
                  <TokenRenderer token={item} />
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
      {/* FROM ENDS */}

      {/* ROTATE CIRCLE */}
      <Row marginTop={20} marginBottom={8} justifyContent="center">
        <Icon
          onClick={reverse}
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
          menuRenderer={() => <TokenRenderer token={state.tofrom} />}
          value={state.tofrom}
          options={options}
          hideRightBorder
          optionRenderer={(close) => (
            <>
              {options.map((item, key) => (
                <Option
                  style={{ marginRight: "8px" }}
                  key={key}
                  onClick={() => {
                    setState({ ...state, tofrom: item });
                    close?.();
                  }}
                  value={item.name}
                >
                  <TokenRenderer token={item} />
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
          value={state.toto}
          menuRenderer={() => <TokenRenderer token={state.toto} />}
          options={options}
          optionRenderer={(close) => (
            <>
              {options.map((item, key) => (
                <Option
                  onClick={() => {
                    setState({ ...state, toto: item });
                    close?.();
                  }}
                  key={key}
                  value={item.name}
                >
                  <TokenRenderer token={item} />
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
      <Button
        style={{ marginTop: "2rem", marginBottom: "1.5rem" }}
        height="56px"
        width="100%"
        color={theme === "dark" ? "white" : "black"}
      >
        Swap
      </Button>
    </div>
  );
};

const TokenRenderer = ({ token }: { token: Token }) => {
  return (
    <Row alignItems="center">
      <img style={{ marginRight: "8px" }} width={24} src={token.imageUrl} />
      <span>{token.name}</span>
    </Row>
  );
};

export { SwapBox };
