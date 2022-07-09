import { autoUpdate, Placement, useFloating } from "@floating-ui/react-dom";

type UsePopperProps = {
  strategy?: "fixed" | "absolute";
  topDistance?: number;
  leftDistance?: number;
  placement?: Placement;
};

/**
 * @dev Used for popper dropdowns
 */
export const usePopper = ({
  strategy = "fixed",
  placement = "bottom-start",
  topDistance = 0,
  leftDistance = 0,
}: UsePopperProps = {}) => {
  const {
    x,
    y,
    reference,
    floating,
    strategy: floatingStrategy,
  } = useFloating({
    placement: placement,
    strategy: strategy,
    whileElementsMounted: autoUpdate,
  });

  const popperStyles = {
    position: floatingStrategy,
    top: y || 0 + topDistance,
    left: x || 0 + leftDistance,
    zIndex: 10,
  };

  return { reference, floating, popperStyles };
};
