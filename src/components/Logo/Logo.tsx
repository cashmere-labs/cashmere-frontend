import BlackLogo from "assets/images/logos/black.svg";
import WhiteLogo from "assets/images/logos/white.svg";
import { useTheme } from "hooks";
import { Link } from "react-router-dom";
import { clsnm } from "utils/clsnm";

import styles from "./Logo.module.scss";

const Logo = ({
  disableLink = false,
  hideLabel = false,
}: {
  disableLink?: boolean;
  hideLabel?: boolean;
}) => {
  const { theme } = useTheme();

  return (
    <div className={styles.logoWrapper}>
      <Link
        className={clsnm("link", disableLink && styles.disabled)}
        to={disableLink ? "#" : "/"}
      >
        <img alt="logo" src={theme === "dark" ? WhiteLogo : BlackLogo} />
        {!hideLabel && <span>Cashmere</span>}
      </Link>
    </div>
  );
};

export { Logo };
