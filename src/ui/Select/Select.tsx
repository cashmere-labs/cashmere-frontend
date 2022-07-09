import { useModal, useOnClickOutside, usePopper } from "hooks";
import { ComponentPropsWithoutRef, ReactNode, useMemo } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Icon } from "ui/Icon/Icon";
import { clsnm } from "utils/clsnm";
import styles from "./Select.module.scss";

interface SelectProps extends ComponentPropsWithoutRef<"div"> {
  value: any;
  setValue?: (to: any) => void;
  optionRenderer: () => ReactNode;
  menuRenderer?: (isOpen: boolean) => ReactNode;
  options: any[];
  extendRight?: boolean;
  extendLeft?: boolean;
  error?: ReactNode;
  label?: ReactNode;
  labelPlaceholder?: boolean;
  isFullWidth?: boolean;
  menuClassName?: string;
  optionsClassName?: string;
  containerClassName?: string;
  hideChevron?: boolean;
  hideLeftBorder?: boolean;
  hideRightBorder?: boolean;
  height?: "58px";
}

const Select = ({
  optionRenderer,
  options,
  value,
  extendRight = false,
  extendLeft = false,
  menuRenderer,
  label,
  labelPlaceholder,
  error,
  isFullWidth = true,
  containerClassName,
  menuClassName,
  optionsClassName,
  hideChevron,
  hideLeftBorder,
  hideRightBorder,
  height = "58px",
  ...props
}: SelectProps) => {
  const { isOpen, close, open } = useModal();

  const { reference, floating, popperStyles } = usePopper({
    deps: [options, isOpen],
  });

  const ref = useOnClickOutside<HTMLDivElement>(() => {
    close();
  });

  const menuWidth = useMemo(() => {
    if (!reference.current || !isFullWidth) return null;
    return (reference.current as any).offsetWidth;
  }, [isFullWidth, menuRenderer, isOpen]);

  return (
    <div
      {...props}
      ref={ref}
      className={clsnm(styles.wrapper, containerClassName)}
    >
      {(label || labelPlaceholder) && (
        <span
          className={clsnm(
            styles.label,
            labelPlaceholder && styles.labelPlaceholder
          )}
        >
          {label ?? "L"}
        </span>
      )}
      <div
        style={{ height }}
        onClick={isOpen ? close : open}
        ref={reference}
        className={clsnm(
          styles.menu,
          extendRight && styles.extendRight,
          extendLeft && styles.extendLeft,
          isOpen && styles.isOpen,
          menuClassName,
          !hideChevron && styles.menuChevron,
          hideRightBorder && styles.hideRightBorder,
          hideLeftBorder && styles.hideLeftBorder
        )}
      >
        {menuRenderer ? menuRenderer(isOpen) : value}
        {!hideChevron && (
          <Icon size={14} className={styles.chevron}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </Icon>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
      {isOpen && (
        <div
          style={{
            ...popperStyles,
            width: isFullWidth ? menuWidth : undefined,
          }}
          ref={floating}
          className={clsnm(styles.options, optionsClassName)}
        >
          {optionRenderer()}
        </div>
      )}
    </div>
  );
};

export { Select };
