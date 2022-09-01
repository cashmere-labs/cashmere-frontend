import { ComponentPropsWithoutRef } from "react";
import { clsnm } from "utils/clsnm";

import styles from "./Column.module.scss";

interface RowProps extends ComponentPropsWithoutRef<"div"> {
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end";
  marginTop?: number;
  marginBottom?: number;
}

const Column = ({
  children,
  className,
  justifyContent = "flex-start",
  alignItems = "center",
  style = {},
  marginTop = 0,
  marginBottom = 0,
  ...props
}: RowProps) => {
  return (
    <div
      style={{
        justifyContent,
        alignItems,
        marginTop: marginTop,
        marginBottom: marginBottom,
        ...style,
      }}
      className={clsnm(className, styles.column)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Column };
