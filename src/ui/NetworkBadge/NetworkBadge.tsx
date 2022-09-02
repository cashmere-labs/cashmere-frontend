import { CSSProperties, ComponentPropsWithoutRef, useRef } from "react";
import { NetworkTypes, getBadgeProps } from "ui/NetworkBadge/utils";
import { clsnm } from "utils/clsnm";

import styles from "./NetworkBadge.module.scss";

export interface NetworkBadgeProps extends ComponentPropsWithoutRef<"div"> {
  label: NetworkTypes | string;
  size?: number;
  className?: string;
  style?: CSSProperties;
  fontSize?: string;
  hoverable?: boolean;
}

const NetworkBadge = ({
  label,
  size = 30,
  style = {},
  className,
  fontSize,
  hoverable = false,
  ...props
}: NetworkBadgeProps) => {
  const { name, icon, bg, text, hoverBg } = getBadgeProps(label);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => {
        if (!hoverable) return;
        const el = wrapperRef.current;
        if (el != null) {
          el.style.background = hoverBg;
        }
      }}
      onMouseLeave={() => {
        if (!hoverable) return;
        const el = wrapperRef.current;
        if (el != null) {
          el.style.background = bg;
        }
      }}
      style={{ background: bg, ...style }}
      className={clsnm(styles.wrapper, className)}
      {...props}
    >
      <div
        style={{ height: `${size}px`, width: `${size}px` }}
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
