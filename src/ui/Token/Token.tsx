import styles from "./Token.module.scss";
import { getBadgeProps, TokenTypes } from "ui/Token/utils";
import { ComponentPropsWithoutRef, CSSProperties } from "react";
import { clsnm } from "utils/clsnm";

export interface TokenProps extends ComponentPropsWithoutRef<"div"> {
  label: TokenTypes | string;
  className?: string;
  style?: CSSProperties;
  fontSize?: string;
}

const Token = ({
  label,
  style = {},
  className,
  fontSize,
  ...props
}: TokenProps) => {
  const { name, icon, bg, text } = getBadgeProps(label);

  return (
    <div
      style={{ background: bg, ...style }}
      className={clsnm(styles.wrapper, className)}
      {...props}
    >
      <div className={styles.iconWrapper}>
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

export { Token };
