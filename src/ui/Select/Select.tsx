import { useModal, useOnClickOutside, usePopper } from "hooks";
import { ComponentPropsWithoutRef, ReactNode, useMemo, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Icon } from "ui";
import { clsnm } from "utils/clsnm";
import { mergeRefs } from "utils/mergeRefs";
import styles from "./Select.module.scss";

interface SelectProps extends ComponentPropsWithoutRef<"div"> {
  value: any;
  setValue?: (to: any) => void;
  optionRenderer: (close: () => void) => ReactNode;
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
  setValue,
  extendRight = false,
  extendLeft = false,
  hideLeftBorder,
  hideRightBorder,
  menuRenderer,
  label,
  labelPlaceholder,
  error,
  isFullWidth = true,
  containerClassName,
  menuClassName,
  optionsClassName,
  hideChevron,
  height = "58px",
  ...props
}: SelectProps) => {
  const { isOpen, close, open } = useModal();

  const { reference, floating, popperStyles } = usePopper();
  const ref = useOnClickOutside<HTMLDivElement>(() => {
    close();
  });

  const menuRef = useRef<HTMLDivElement>(null);
  const menuWidth = useMemo(() => {
    if (!menuRef.current || !isFullWidth) return null;
    return menuRef.current.offsetWidth;
  }, [isFullWidth, menuRenderer, isOpen]);

  return (
    <div
      {...props}
      ref={mergeRefs(ref, menuRef)}
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
          <Icon size={12} className={styles.chevron}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </Icon>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
      {isOpen && (
        <div
          style={{
            ...popperStyles,
            width: isFullWidth && menuWidth ? menuWidth : undefined,
          }}
          ref={floating}
          className={clsnm(styles.options, optionsClassName)}
        >
          {optionRenderer(close)}
        </div>
      )}
    </div>
  );
};

export { Select };
