import { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsnm } from "utils/clsnm";
import styles from "./Container.module.scss";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: ReactNode;
  elRef?: any;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  compact?: boolean;
}

const Container = ({
  children,
  className,
  elRef,
  justifyContent,
  compact = false,
  ...props
}: ContainerProps) => {
  return (
    <div
      ref={elRef}
      className={clsnm(
        styles.container,
        className,
        justifyContent && styles[justifyContent],
        compact ? styles.compact : styles.normal
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
