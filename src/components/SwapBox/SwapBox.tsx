import { RotateIcon, SettingsIcon } from "assets/icons";
import { Row } from "components";
import { SwapBoxDetails } from "components/SwapBox/SwapBoxDetails";
import { SwapSettings as SwapSettingType } from "components/SwapSettings/useSwapSettings";
import { ARBITRUM, AURORA, POLYGON } from "constants/networks";
import { Dai, Tetherus } from "constants/tokens";
import { useModal, useTheme } from "hooks";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Network } from "types/network";
import { SwapConfirmation, TokenOrNetworkRenderer } from "components";
import { Icon, Select, Option, Input, Button } from "ui";
import styles from "./SwapBox.module.scss";
import { useAccount, useConnection } from "ethylene/hooks";
import { SwapState } from "pages/Swap/Swap";
import { SwapSettings } from "components/SwapSettings/SwapSettings";
import { SwapNetworkSelector } from "components/SwapBox/SwapNetworkSelector";
import { Token } from "types/token";

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

  const tokenOptions = [Tetherus, Dai];
  const networkOptions = [POLYGON, ARBITRUM];

  const swapSettingsModal = useModal();
  const swapConfirmationModal = useModal();
  const { theme } = useTheme();

  const onNetworkSelect = useRef<(item: Network | Token) => void>(
    () => undefined
  );
  const onTokenSelect = useRef<(item: Network | Token) => void>(
    () => undefined
  );
  const networkSelectorModal = useModal();
  const tokenSelectorModal = useModal();

  /**
   * @dev Reverse the from and to positions
   */
  const reverse = () => {
    let _state = { ...state };
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
          rataAfterFee: "1 UST = 1.017 USDT",
          priceImpact: "0.05%",
          fee: "24.169.287 USDT",
          minimumReceived: "15.6235 USDT",
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
            onClick={() => setMethod("stable")}
            style={{
              cursor: "pointer",
              color: method === "stable" ? `var(--text)` : `var(--subtext)`,
              fontSize: "16px",
            }}
          >
            Swap
          </span>
          <span
            onClick={() => setMethod("aggregator")}
            style={{
              cursor: "pointer",
              marginLeft: "12px",
              color: method === "aggregator" ? `var(--text)` : `var(--subtext)`,
              fontSize: "16px",
            }}
          >
            Aggregator
          </span>
        </div>

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
          rataAfterFee: "1 UST = 1.017 USDT",
          priceImpact: "0.05%",
          fee: "24.169.287 USDT",
          minimumReceived: "15.6235 USDT",
        }}
      />
      <Button
        onClick={handleSwap}
        style={{ marginTop: "2rem", marginBottom: "1.5rem" }}
        height="56px"
        width="100%"
        color={theme === "dark" ? "white" : "black"}
      >
        {getSwapButtonContent()}
      </Button>
      <PathRenderer path={[AURORA, POLYGON]} />
    </div>
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
