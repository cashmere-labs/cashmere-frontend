import { useTheme } from "hooks";
import { ComponentPropsWithoutRef } from "react";
import { Spinner } from "ui/Spinner/Spinner";
import { clsnm } from "utils/clsnm";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  color?: "blue" | "neutral" | "pink" | "ghost" | "red" | "black" | "white";
  textPosition?: "center" | "left" | "right";
  height?: string;
  width?: string;
  fullwidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fontSize?: "fs14" | "fs16" | "fs18";
}

const Button = ({
  className,
  children,
  color = "blue",
  textPosition = "center",
  height,
  width,
  fullwidth,
  disabled,
  loading,
  fontSize = "fs14",
  ...props
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      style={{ height: height, width: width ? width : undefined }}
      className={clsnm(
        styles.wrapper,
        styles[color],
        styles[textPosition],
        styles[theme],
        disabled && styles.disabled,
        loading && styles.loading,
        className
      )}
      {...props}
    >
      {loading && (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
      <span
        className={clsnm(
          styles.text,
          styles[color],
          styles[textPosition],
          styles[fontSize],
          fullwidth && styles["fullwidth"],
          loading && styles.loading,
        )}
      >
        {children}
      </span>
    </button>
  );
};

export { Button };
