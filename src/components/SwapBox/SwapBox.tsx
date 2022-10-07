import { RotateIcon, SettingsIcon } from "assets/icons";
import { Row } from "components";
import { SwapConfirmation, TokenOrNetworkRenderer } from "components";
import { networkOptions } from "constants/networkOptions";
import { ETHEREUM, POLYGON } from "constants/networks";
import { tokenOptions } from "constants/tokenOptions";
import { useAccount, useConnection } from "ethylene/hooks";
import { useModal, useTheme } from "hooks";
import { SwapState } from "pages/Swap/Swap";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Network } from "types/network";
import { Token } from "types/token";
import { Button, Icon, Input, Select } from "ui";

import { SwapBoxDetails } from "components/SwapBox/SwapBoxDetails";
import { SwapNetworkSelector } from "components/SwapBox/SwapNetworkSelector";
import { SwapSettings } from "components/SwapSettings/SwapSettings";
import { SwapSettings as SwapSettingType } from "components/SwapSettings/useSwapSettings";

import styles from "./SwapBox.module.scss";

const SwapBox = ({
  state,
  swapSettings,
  setState,
}: {
  state: SwapState;
  setState: (to: SwapState) => void;
  swapSettings: SwapSettingType;
}) => {
  const { auth } = useAccount();
  const { connect } = useConnection();
  const [method, setMethod] = useState<"stable" | "aggregator">("stable");

  const swapSettingsModal = useModal();
  const swapConfirmationModal = useModal();
  const { theme } = useTheme();

  const onNetworkSelect = useRef<(item: Network | Token) => void>(
    () => undefined,
  );
  const onTokenSelect = useRef<(item: Network | Token) => void>(
    () => undefined,
  );
  const networkSelectorModal = useModal();
  const tokenSelectorModal = useModal();

  /**
   * @dev Reverse the from and to positions
   */
  const reverse = () => {
    const _state = { ...state };
    _state.fromfrom = state.tofrom;
    _state.fromto = state.toto;
    _state.tofrom = state.fromfrom;
    _state.toto = state.fromto;

    setState(_state);
  };

  /**
   * @dev Handles swap action
   */
  const handleSwap = () => {
    if (!auth) {
      connect();
      return;
    }
    swapConfirmationModal.open();
  };

  /**
   * @dev Formats the swap button content
   */
  const getSwapButtonContent = () => {
    if (!auth) return "Connect Wallet";
    return "Swap";
  };

  /**
   * @dev erc20Balance can be acquired a hook that is inside ethylene/hooks
   *
   * Check for docs:
   * https://ethylene.itublockchain.com/docs/hooks/useERC20Balance
   * const {balance} = useERC20Balance(props);
   */

  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!wrapperRef.current) return;
    if (networkSelectorModal.isOpen) {
      wrapperRef.current.style.boxShadow = "var(--shadow1)";
    } else {
      wrapperRef.current.style.boxShadow = "none";
    }
  }, [networkSelectorModal.isOpen]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {networkSelectorModal.isOpen && (
        <SwapNetworkSelector
          onSelect={onNetworkSelect.current}
          modalController={networkSelectorModal}
          options={{
            data: networkOptions,
            type: "network",
          }}
        />
      )}
      {tokenSelectorModal.isOpen && (
        <SwapNetworkSelector
          onSelect={onTokenSelect.current}
          modalController={tokenSelectorModal}
          options={{
            data: tokenOptions,
            type: "token",
          }}
        />
      )}
      <SwapSettings modal={swapSettingsModal} swapSettings={swapSettings} />
      <SwapConfirmation
        data={{
          fee: "24.169.287 USDT",
          minimumReceived: "15.6235 USDT",
          priceImpact: "0.05%",
          rataAfterFee: "1 UST = 1.017 USDT",
        }}
        modalController={swapConfirmationModal}
        swapSettings={swapSettings}
        from={{
          amount: "0",
          network: state.fromfrom,
          token: state.fromto,
        }}
        to={{
          amount: "0",
          network: state.tofrom,
          token: state.toto,
        }}
      />
      <div className={styles.header}>
        <div>
          <span
            className={styles.tab}
            onClick={() => setMethod("stable")}
            style={{
              color: method === "stable" ? "var(--text)" : "var(--subtext)",
            }}
          >
            Swap
          </span>
          <span
            className={styles.tab}
            onClick={() => setMethod("aggregator")}
            style={{
              color: method === "aggregator" ? "var(--text)" : "var(--subtext)",
              cursor: "pointer",
            }}
          >
            Aggregator
          </span>
        </div>

        <Icon
          onClick={swapSettingsModal.open}
          style={{ color: "var(--icon-dark)" }}
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
          disableDefaultMode
          onClick={() => {
            networkSelectorModal.open();
            onNetworkSelect.current = (item: Network | Token) => {
              if (item instanceof Token) {
                return;
              }
              setState({ ...state, fromfrom: item });
            };
          }}
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
        />
        <Select
          disableDefaultMode
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
          onClick={() => {
            tokenSelectorModal.open();
            onTokenSelect.current = (item: Network | Token) => {
              if (item instanceof Token) {
                setState({ ...state, fromto: item });
              }
            };
          }}
        />
        <Input
          placeholder="Enter amount"
          className={styles.input}
          extendLeft
          hideLeftBorder
          rightEl={
            <Button width="18px" color="white">
              Max
            </Button>
          }
        />
      </Row>
      {/* FROM ENDS */}
      {/* ROTATE CIRCLE */}
      <Row marginTop={20} marginBottom={8} justifyContent="center">
        <Icon
          onClick={reverse}
          borderRadius="8px"
          size={26}
          style={{ color: "var(--icon-dark)" }}
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
          disableDefaultMode
          containerClassName={styles.select}
          extendRight
          isFullWidth
          menuRenderer={() => (
            <TokenOrNetworkRenderer tokenOrNetwork={state.tofrom} />
          )}
          value={state.tofrom}
          options={networkOptions}
          hideRightBorder
          onClick={() => {
            networkSelectorModal.open();
            onNetworkSelect.current = (item: Network | Token) => {
              if (item instanceof Token) {
                return;
              }
              setState({ ...state, tofrom: item });
            };
          }}
        />
        <Select
          disableDefaultMode
          containerClassName={styles.select}
          extendRight
          extendLeft
          isFullWidth
          value={state.toto}
          menuRenderer={() => (
            <TokenOrNetworkRenderer tokenOrNetwork={state.toto} />
          )}
          options={tokenOptions}
          onClick={() => {
            tokenSelectorModal.open();
            onTokenSelect.current = (item: Network | Token) => {
              if (item instanceof Token) {
                setState({ ...state, toto: item });
              }
            };
          }}
        />
        <Input
          placeholder="Enter amount"
          className={styles.input}
          extendLeft
          hideLeftBorder
          rightEl={
            <Button width="18px" color="white">
              Max
            </Button>
          }
        />
      </Row>
      {/* TO ENDS */}
      <SwapBoxDetails
        data={{
          fee: "24.169.287 USDT",
          minimumReceived: "15.6235 USDT",
          priceImpact: "0.05%",
          rataAfterFee: "1 UST = 1.017 USDT",
        }}
      />
      <Button
        onClick={handleSwap}
        style={{ marginBottom: "1.5rem", marginTop: "2rem" }}
        height="56px"
        width="100%"
        color={theme === "dark" ? "white" : "black"}
      >
        {getSwapButtonContent()}
      </Button>
      <PathRenderer path={[ETHEREUM, POLYGON]} />
    </div>
  );
};

const PathRenderer = ({ path }: { path: Network[] }): ReactElement => {
  return (
    <Row
      marginBottom={8}
      style={{ marginLeft: "auto", marginRight: "auto", width: "max-content" }}
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
            <Icon style={{ color: "var(--text)", marginLeft: "16px" }}>
              <FaChevronRight />
            </Icon>
          )}
        </Row>
      ))}
    </Row>
  );
};

export { SwapBox };
