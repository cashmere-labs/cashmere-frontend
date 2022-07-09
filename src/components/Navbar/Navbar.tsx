import styles from "./Navbar.module.scss";
import { useMemo, useRef, useState } from "react";
import { clsnm } from "utils/clsnm";
import { FaBars, FaCopy, FaTimes } from "react-icons/fa";
import { PATHS } from "constants/paths";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Icon, Modal } from "ui";
import {
  useAuth,
  useConnection,
  useRightNetwork,
  useAccount,
} from "ethylene/hooks";
import { formatAddress } from "utils/formatAddress";
import { useModal, useTheme } from "hooks";
import { toast } from "react-toastify";
import { AVAX_FUJI_C_CHAIN } from "ethylene/constants";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Logo, Row } from "components";

const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
  const { pathname } = useLocation();
  const auth = useAuth();
  const { connect, disconnect } = useConnection();
  const { address } = useAccount();
  const { theme, toggleTheme } = useTheme();
  const { switchTo, isRightNetwork } = useRightNetwork(AVAX_FUJI_C_CHAIN);

  const LINKS = useMemo(() => {
    return [
      {
        name: "Swap",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.swap),
      },
      {
        name: "Pool",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.pool),
      },
      {
        name: "veCSM",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.veCSM),
      },
      {
        name: "DAO",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.dao),
      },
      {
        name: "Swap",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.swap),
      },
      {
        name: "Pool",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.pool),
      },
      {
        name: "veCSM",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.veCSM),
      },
      {
        name: "DAO",
        url: PATHS.home,
        soon: false,
        active: pathname.startsWith(PATHS.dao),
      },
    ];
  }, [pathname]);

  const [show, setShow] = useState(false);
  const smallMenuRef = useRef<HTMLDivElement>(null);
  const modal = useModal();

  const navbarMenuHandler = () => {
    setShow(!show);
    if (!smallMenuRef.current) return;
    if (!show === true) {
      smallMenuRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
      });
    } else {
      smallMenuRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
      });
    }
  };

  const ConnectWalletButton = ({ mobile }: { mobile: boolean }) => {
    return (
      <Button
        height="40px"
        onClick={() => {
          if (!auth) connect();
          if (!isRightNetwork) {
            switchTo();
          } else {
            modal.open();
          }
        }}
        color={theme === "light" ? "black" : "black"}
        className={clsnm(
          !mobile ? styles.themeChanger : styles.themeChangerMobile,
          styles.accountButton
        )}
      >
        {!isRightNetwork && auth
          ? "Switch network"
          : auth && address
          ? `${formatAddress(address)}`
          : "Connect Wallet"}
      </Button>
    );
  };

  const ThemeChangerButton = ({ mobile }: { mobile: boolean }) => {
    return (
      <Icon
        onClick={toggleTheme}
        className={mobile ? styles.themeChangerMobile : styles.themeChanger}
        borderRadius="12px"
        hoverSize={36}
        hoverable
      >
        {theme === "dark" ? <IoMdMoon /> : <IoMdSunny />}
      </Icon>
    );
  };

  return (
    <header
      className={clsnm(styles.navbar, transparent && styles.transparent)}
      id="CashmereHeader"
    >
      <Modal isOpen={modal.isOpen} close={modal.close}>
        <div className={styles.modal}>
          <span>Ethereum Account</span>
          <div className={styles.inner}>
            <Row justifyContent="space-between">
              <span>Connected</span>
              <Button
                onClick={() => {
                  modal.close();
                  disconnect();
                }}
                color="pink"
              >
                Disconnect
              </Button>
            </Row>
            {address && (
              <div
                style={{ justifyContent: "space-between" }}
                className={styles.row}
              >
                <span className={styles.address}>{formatAddress(address)}</span>
              </div>
            )}
            {address && (
              <div
                style={{ justifyContent: "space-between" }}
                className={styles.row}
              >
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(address).then(() => {
                      toast("Address copied to clipboard", { autoClose: 1000 });
                    });
                  }}
                  className={styles.copy}
                >
                  <FaCopy />
                  <span>Copy to clipboard</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </Modal>
      <nav style={{ height: `var(--navbar-height)`, display: "flex" }}>
        <Container justifyContent="space-between" className={styles.container}>
          <div className={styles.left}>
            <Logo />
          </div>

          <div className={styles.links}>
            {LINKS.map((item) => (
              <div key={item.name} className={styles.linkWrapper}>
                <Link
                  className={clsnm(styles.link, item.active && styles.active)}
                  to={item.soon ? "#" : item.url}
                >
                  {item.name}
                </Link>
                {item.soon && <span className={styles.soon}>SOON</span>}
              </div>
            ))}
          </div>

          <div className={styles.buttons}>
            <ConnectWalletButton mobile={false} />
            <ThemeChangerButton mobile={false} />
            {!show && (
              <button onClick={navbarMenuHandler} className={styles.bar}>
                <Icon borderRadius="12px" hoverable hoverSize={40} size={20}>
                  <FaBars />
                </Icon>
              </button>
            )}
          </div>
        </Container>
      </nav>
      <div
        ref={smallMenuRef}
        className={clsnm(
          styles.smallMenu,
          !show && styles.hide,
          transparent && styles.transparent
        )}
      >
        <div className={styles.smallMenuHeader}>
          <Logo />
          <div className={styles.buttons}>
            <ThemeChangerButton mobile={true} />
            <Icon
              style={{ color: `var(--icon-dark)` }}
              onClick={navbarMenuHandler}
              borderRadius="12px"
              hoverable
              hoverSize={40}
            >
              <FaTimes />
            </Icon>
          </div>
        </div>
        <div className={styles.smallLinks}>
          {LINKS.map((item) => (
            <div key={item.name} className={styles.linkWrapper}>
              <Link
                className={clsnm(styles.link, item.active && styles.active)}
                to={item.soon ? "#" : item.url}
              >
                {item.name}
              </Link>
              {item.soon && <span className={styles.soon}>SOON</span>}
            </div>
          ))}
          <div className={styles.connectWalletMobileWrapper}>
            <ConnectWalletButton mobile={true} />
          </div>
        </div>
      </div>
      <div
        className={clsnm(styles.layer, !show && styles.hide)}
        onClick={navbarMenuHandler}
      ></div>
    </header>
  );
};

export { Navbar };
