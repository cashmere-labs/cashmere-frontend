import { CSSProperties, ComponentPropsWithoutRef } from "react";
import { NetworkTypes, getBadgeProps } from "ui/NetworkBadge/utils";
import { clsnm } from "utils/clsnm";

import styles from "./NetworkBadge.module.scss";

export interface NetworkBadgeProps extends ComponentPropsWithoutRef<"div"> {
  label: NetworkTypes | string;
  size?: number;
  className?: string;
  style?: CSSProperties;
  fontSize?: string;
}

const NetworkBadge = ({
  label,
  size = 30,
  style = {},
  className,
  fontSize,
  ...props
}: NetworkBadgeProps) => {
  const { name, icon, bg, text } = getBadgeProps(label);

  return (
    <div
      style={{ background: bg, ...style }}
      className={clsnm(styles.wrapper, className)}
      {...props}
    >
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={styles.iconWrapper}
      >
        <img className={styles.icon} src={icon} />
      </div>
      <span
        className={styles.text}
        style={{ color: text, fontSize: fontSize ?? "16px" }}
      >
        {name}
      </span>
    </div>
  );
};

export { NetworkBadge };
