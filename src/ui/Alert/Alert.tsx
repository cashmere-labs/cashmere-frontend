import { ComponentPropsWithoutRef } from "react";
import { MdWarning } from "react-icons/md";
import { Icon } from "ui";
import { clsnm } from "utils/clsnm";

import styles from "./Alert.module.scss";

interface AlertProps extends ComponentPropsWithoutRef<"div"> {
  label?: string;
}

const Alert = ({ children, label, ...props }: AlertProps) => {
  return (
    <div className={clsnm(styles.wrapper, props.className)} {...props}>
      <Icon className={styles.icon}>
        <MdWarning />
      </Icon>
      <span className={styles.text}>{label ?? children}</span>
    </div>
  );
};

export { Alert };
