import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Option.module.scss";

interface OptionProps extends ComponentPropsWithoutRef<"div"> {
  value: any;
  children: ReactNode;
}

const Option = ({ children, onClick, ...props }: OptionProps) => {
  return (
    <div
      className={styles.option}
      onClick={(e) => {
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { Option };
