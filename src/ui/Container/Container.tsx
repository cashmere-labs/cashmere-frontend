import { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsnm } from "utils/clsnm";
import styles from "./Container.module.scss";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: ReactNode;
  elRef?: any;
}

const Container = ({
  children,
  className,
  elRef,
  ...props
}: ContainerProps) => {
  return (
    <div ref={elRef} className={clsnm(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
