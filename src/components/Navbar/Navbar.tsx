import styles from "./Navbar.module.scss";
import { useMemo, useRef, useState } from "react";
import { clsnm } from "utils/clsnm";
import { FaBars, FaCopy, FaTimes } from "react-icons/fa";
import { PATHS } from "constants/paths";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Modal } from "ui";
import {
  useAuth,
  useConnection,
  useRightNetwork,
  useAccount,
} from "ethylene/hooks";
import { formatAddress } from "utils/formatAddress";
import { useModal, useTheme } from "hooks";
import { toast } from "react-toastify";
import WhiteLogo from "assets/images/testlogo.png";
import { AVAX_FUJI_C_CHAIN } from "ethylene/constants";

const Navbar = ({
  transparent = false,
  neutralButton = false,
}: {
  transparent?: boolean;
  neutralButton?: boolean;
  isSwap?: boolean;
}) => {
  const { pathname } = useLocation();
  const auth = useAuth();
  const { connect, disconnect } = useConnection();
  const { address } = useAccount();
  const { theme } = useTheme();
  const { switchTo, isRightNetwork } = useRightNetwork(AVAX_FUJI_C_CHAIN);

  const LINKS = useMemo(() => {
    return [
      {
        name: "Home",
        url: PATHS.home,
        soon: false,
        active: pathname === PATHS.home,
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

  return (
    <header
      className={clsnm(styles.navbar, transparent && styles.transparent)}
      id="CashmereHeader"
    >
      <Modal isOpen={modal.isOpen} close={modal.close}>
        <div className={styles.modal}>
          <span>Ethereum Account</span>
          <div className={styles.inner}>
            <div
              style={{ justifyContent: "space-between" }}
              className={styles.row}
            >
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
            </div>
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
      <nav>
        <Container justifyContent="space-between" className={styles.container}>
          <div className={styles.left}>
            <div className={styles.logoWrapper}>
              <Link className="link" to="/">
                {/* <img alt="logo" src={WhiteLogo} /> */}
                <span>Cashmere</span>
              </Link>
            </div>
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
            <Button
              textPosition="right"
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
              className={clsnm(styles.themeChanger, styles.accountButton)}
            >
              {!isRightNetwork && auth
                ? "Switch network"
                : auth && address
                ? `${formatAddress(address)}`
                : "Connect Wallet"}
            </Button>
            <button
              onClick={() => {
                setShow(!show);
                if (!smallMenuRef.current) return;
                if (!show === true) {
                  smallMenuRef.current.animate(
                    [{ opacity: 0 }, { opacity: 1 }],
                    {
                      duration: 200,
                      fill: "forwards",
                    }
                  );
                } else {
                  smallMenuRef.current.animate(
                    [{ opacity: 1 }, { opacity: 0 }],
                    {
                      duration: 200,
                      fill: "forwards",
                    }
                  );
                }
              }}
              className={styles.bar}
            >
              {show ? <FaTimes /> : <FaBars />}
            </button>
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
        {/* <Button
          style={{ marginTop: "1rem", height: "48px" }}
          onClick={toggleTheme}
          color="neutral"
          className={styles.themeChangerSm}
        >
          {theme === "dark" ? <BsMoonFill /> : <BsSunFill />}
        </Button> */}
      </div>
    </header>
  );
};

export { Navbar };
