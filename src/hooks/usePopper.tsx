import { computePosition } from "@floating-ui/react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

type UsePopperProps = {
  deps?: any[];
  strategy?: "fixed" | "absolute";
  topDistance?: number;
  leftDistance?: number;
};

/**
 * @dev Used for popper dropdowns
 */
export const usePopper = ({
  deps = [],
  strategy = "fixed",
  topDistance = 0,
  leftDistance = 0,
}: UsePopperProps = {}) => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const floating = useRef(null);
  const reference = useRef(null);

  useEffect(() => {
    if (!reference.current || !floating.current) return;

    computePosition(reference.current, floating.current, {
      strategy: "fixed",
      placement: "bottom-start",
    }).then(({ x, y }) => {
      setXPosition(x);
      setYPosition(y);
    });
  }, [...deps]);

  const popperStyles = useMemo(() => {
    return {
      position: strategy,
      top: yPosition + topDistance,
      left: xPosition + leftDistance,
      zIndex: 99999,
    };
  }, [xPosition, yPosition]);

  return { reference, floating, popperStyles };
};
