import { ComponentPropsWithoutRef } from "react";
import { clsnm } from "utils/clsnm";
import styles from "./Icon.module.scss";

interface IconProps extends ComponentPropsWithoutRef<"div"> {
  size?: number;
  hoverable?: boolean;
  hoverSize?: number;
  borderRadius?: string;
  hoverPadding?: string;
}

const Icon = ({
  size = 20,
  children,
  style = {},
  className,
  hoverable,
  hoverSize,
  hoverPadding = "4px",
  borderRadius = "4px",
  ...props
}: IconProps) => {
  let mainStyles = {
    fontSize: `${size}px`,
    borderRadius: borderRadius,
    padding: hoverPadding,
    ...style,
  };
  if (hoverSize) {
    mainStyles["height"] = `${hoverSize}px`;
    mainStyles["width"] = `${hoverSize}px`;
  }

  return (
    <div
      style={mainStyles}
      className={clsnm(
        styles.iconWrapper,
        className,
        hoverable && styles.hoverable
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Icon };
