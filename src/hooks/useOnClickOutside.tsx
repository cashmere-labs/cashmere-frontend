import { useEffect, useRef } from "react";

export function useOnClickOutside<T extends HTMLElement>(
  handler: (val: any) => void,
  elements?: any,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        (!ref.current || ref.current.contains(event.target)) &&
        (!elements ||
          elements.filter((el: any) => el?.contains?.(event.target)).length > 0)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, elements]);

  return ref;
}
