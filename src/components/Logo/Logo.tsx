import { useTheme } from "hooks";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

import WhiteLogo from "assets/images/logos/white.svg";
import BlackLogo from "assets/images/logos/black.svg";

const Logo = ({ disableLink = false }: { disableLink?: boolean }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.logoWrapper}>
      <Link className="link" to={disableLink ? "#" : "/"}>
        <img alt="logo" src={theme === "dark" ? WhiteLogo : BlackLogo} />
        <span>Cashmere</span>
      </Link>
    </div>
  );
};

export { Logo };
