import { RotateIcon, SettingsIcon } from "assets/icons";
import { Row } from "components";
import { SwapBoxDetails } from "components/SwapBox/SwapBoxDetails";
import { SwapSettings } from "components/SwapSettings/SwapSettings";
import { useSwapSettings } from "components/SwapSettings/useSwapSettings";
import { Aurora, Polygon } from "constants/networks";
import { Dai, Tetherus } from "constants/tokens";
import { useModal, useTheme } from "hooks";
import React, { ReactElement, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Network } from "types/network";
import { Token } from "types/token";
import { Icon, Select, Option, Input, Button } from "ui";
import styles from "./SwapBox.module.scss";

const SwapBox = () => {
  const tokenOptions = [Tetherus, Dai];
  const networkOptions = [Polygon, Aurora];

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
    _state.tofrom = state.fromfrom;
    _state.toto = state.fromto;

    setState(_state);
  };

  const swapSettingsModal = useModal();
  const swapSettings = useSwapSettings();

  return (
    <div className={styles.wrapper}>
      <SwapSettings modal={swapSettingsModal} swapSettings={swapSettings} />
      <div className={styles.header}>
        <span style={{ color: `var(--text)`, fontSize: "16px" }}>Swap</span>
        <Icon
          onClick={swapSettingsModal.open}
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
          menuRenderer={() => (
            <TokenOrNetworkRenderer tokenOrNetwork={state.fromfrom} />
          )}
          value={state.fromfrom}
          setValue={() => undefined}
          options={networkOptions}
          hideRightBorder
          optionRenderer={(close) => (
            <>
              {networkOptions.map((item, key) => (
                <Option
                  onClick={() => {
                    setState({ ...state, fromfrom: item });
                    close?.();
                  }}
                  style={{ marginRight: "8px" }}
                  key={key}
                  value={item.name}
                >
                  <TokenOrNetworkRenderer tokenOrNetwork={item} />
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
          menuRenderer={() => (
            <TokenOrNetworkRenderer tokenOrNetwork={state.fromto} />
          )}
          value={state.fromto}
          setValue={() => undefined}
          options={tokenOptions}
          optionRenderer={(close) => (
            <>
              {tokenOptions.map((item, key) => (
                <Option
                  style={{ marginRight: "8px" }}
                  key={key}
                  value={item.name}
                  onClick={() => {
                    setState({ ...state, fromto: item });
                    close?.();
                  }}
                >
                  <TokenOrNetworkRenderer tokenOrNetwork={item} />
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
          menuRenderer={() => (
            <TokenOrNetworkRenderer tokenOrNetwork={state.tofrom} />
          )}
          value={state.tofrom}
          options={networkOptions}
          hideRightBorder
          optionRenderer={(close) => (
            <>
              {networkOptions.map((item, key) => (
                <Option
                  style={{ marginRight: "8px" }}
                  key={key}
                  onClick={() => {
                    setState({ ...state, tofrom: item });
                    close?.();
                  }}
                  value={item.name}
                >
                  <TokenOrNetworkRenderer tokenOrNetwork={item} />
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
          menuRenderer={() => (
            <TokenOrNetworkRenderer tokenOrNetwork={state.toto} />
          )}
          options={tokenOptions}
          optionRenderer={(close) => (
            <>
              {tokenOptions.map((item, key) => (
                <Option
                  onClick={() => {
                    setState({ ...state, toto: item });
                    close?.();
                  }}
                  key={key}
                  value={item.name}
                >
                  <TokenOrNetworkRenderer tokenOrNetwork={item} />
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
      <PathRenderer path={[Aurora, Polygon]} />
    </div>
  );
};

const TokenOrNetworkRenderer = ({
  tokenOrNetwork,
  imgSize = 24,
}: {
  tokenOrNetwork: Token | Network;
  imgSize?: number;
}) => {
  return (
    <Row style={{ width: "max-content" }} alignItems="center">
      <img
        style={{ marginRight: "8px" }}
        width={imgSize}
        src={tokenOrNetwork.imageUrl}
      />
      <span style={{ color: `var(--text)` }}>{tokenOrNetwork.name}</span>
    </Row>
  );
};

const PathRenderer = ({ path }: { path: Network[] }): ReactElement => {
  return (
    <Row
      marginBottom={8}
      style={{ width: "max-content", marginLeft: "auto", marginRight: "auto" }}
      justifyContent="center"
    >
      {path.map((item, key) => (
        <Row
          style={{ marginRight: key !== path.length - 1 ? "24px" : "0px" }}
          justifyContent="center"
          key={key}
        >
          <TokenOrNetworkRenderer tokenOrNetwork={item} imgSize={20} />
          {key !== path.length - 1 && (
            <Icon style={{ marginLeft: "16px", color: `var(--text)` }}>
              <FaChevronRight />
            </Icon>
          )}
        </Row>
      ))}
    </Row>
  );
};

export { SwapBox };
