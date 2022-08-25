import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Alert } from "ui";
import { clsnm } from "utils/clsnm";
import styles from "./Input.module.scss";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  containerClassName?: string;
  rightEl?: ReactNode;
  leftEl?: ReactNode;
  containerProps?: ComponentPropsWithoutRef<"div">;
  height?: string;
  extendRight?: boolean;
  extendLeft?: boolean;
  hideLeftBorder?: boolean;
  hideRightBorder?: boolean;
  hideBorder?: boolean;
  rightElClassName?: string;
  leftElClassName?: string;
  error?: string;
  absoluteError?: boolean;
  inputRef?: any;
}

const Input = ({
  value,
  onChange,
  containerClassName,
  rightElClassName,
  leftElClassName,
  containerProps,
  rightEl,
  leftEl,
  height = "58px",
  extendRight = false,
  extendLeft = false,
  hideLeftBorder,
  hideRightBorder,
  hideBorder,
  className,
  style,
  error,
  absoluteError,
  inputRef,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsnm(styles.wrapper, containerClassName)}
      {...containerProps}
    >
      <input
        ref={inputRef}
        style={{ height, ...style }}
        value={value}
        onChange={onChange}
        className={clsnm(
          styles.input,
          hideLeftBorder && styles.hideLeftBorder,
          hideRightBorder && styles.hideRightBorder,
          hideBorder && styles.hideBorder,
          extendLeft && styles.extendLeft,
          extendRight && styles.extendRight,
          rightEl && styles.rightEl,
          leftEl && styles.leftEl,
          className
        )}
        {...props}
      />
      {error && (
        <Alert
          style={{
            marginBottom: "16px",
            marginTop: "8px",
            position: absoluteError ? "absolute" : "relative",
            bottom: absoluteError ? "-48px" : undefined,
          }}
          label={error}
        />
      )}
      {rightEl && (
        <div className={clsnm(styles.right, rightElClassName)}>{rightEl}</div>
      )}
      {leftEl && (
        <div className={clsnm(styles.left, leftElClassName)}>{leftEl}</div>
      )}
    </div>
  );
};

export { Input };
