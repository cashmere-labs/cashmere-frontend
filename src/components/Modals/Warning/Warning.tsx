import WARNING from "assets/icons/warning.png";
import { useTheme } from "hooks";
import { useMediaQuery } from "react-responsive";

import styles from "./Warning.module.scss";

const Warning = () => {
  const { theme } = useTheme();

  const isPhoneOrLaptop = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.icon}>
          <img
            src={WARNING}
            style={
              isPhoneOrLaptop
                ? { width: "13.5px", height: "12.1px" }
                : { width: "16.8px", height: "15px" }
            }
          ></img>
        </div>
        <span className={styles.warning}>Warning</span>
      </div>
      <div>
        You will lose all of your accumulated veCSM (240 veCSM) and pending
        veCSM (24 veCSM) after unstaking CSM.
      </div>
    </div>
  );
};

export { Warning };
