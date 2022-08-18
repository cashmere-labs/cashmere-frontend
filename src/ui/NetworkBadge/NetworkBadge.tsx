import styles from "./NetworkBadge.module.scss";
import { getBadgeProps, NetworkTypes } from "ui/NetworkBadge/utils";
import { ComponentPropsWithoutRef, CSSProperties } from "react";
import { clsnm } from "utils/clsnm";

interface NetworkBadgeProps extends ComponentPropsWithoutRef<"div"> {
  label: NetworkTypes | string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

const NetworkBadge = ({
  label,
  size = 30,
  style = {},
  className,
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
      <span className={styles.text} style={{ color: text }}>
        {name}
      </span>
    </div>
  );
};

export { NetworkBadge };
