import { Placement } from "@floating-ui/react-dom";
import { usePopper } from "hooks";
import { ReactNode, useEffect, useRef, useState } from "react";

import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children: ReactNode;
  placement?: Placement;
  content: string;
  padding?: string;
}

const Tooltip = ({
  children,
  placement,
  content,
  padding = "8px 12px",
}: TooltipProps) => {
  const { reference, floating, popperStyles } = usePopper({
    placement: placement,
    topDistance: 8,
  });
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (el == null) return;

    let timer: any;

    const openHandler = () => {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };
    const closeHandler = () => {
      clearTimeout(timer);
      setIsOpen(false);
    };

    el.addEventListener("mouseenter", openHandler);
    el.addEventListener("mouseleave", closeHandler);

    return () => {
      if (el == null) return;
      el.removeEventListener("mouseenter", openHandler);
      el.removeEventListener("mouseleave", closeHandler);
    };
  }, []);

  return (
    <span ref={wrapperRef}>
      <span ref={reference}>{children}</span>

      <span
        className={styles.tooltip}
        ref={floating}
        style={{
          ...popperStyles,
          opacity: isOpen ? 1 : 0,
          padding: padding,
        }}
      >
        {content}
      </span>
    </span>
  );
};

export { Tooltip };
