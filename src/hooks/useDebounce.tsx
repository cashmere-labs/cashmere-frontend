import { useCallback, useEffect, useRef } from "react";

export function useDebounce(
  fnToBeDebounced: Function,
  time = 350,
  { stopOnUnmount = true } = {},
) {
  const timeout = useRef<any>(null);
  const timeRef = useRef<any>(time);

  useEffect(() => {
    if (stopOnUnmount) {
      return () => clearTimeout(timeout.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callback = useCallback(
    (...args: any) => {
      clearTimeout(timeout.current);
      return new Promise((resolve) => {
        timeout.current = setTimeout(
          () => resolve(fnToBeDebounced(...(args ?? []))),
          timeRef.current,
        );
      });
    },
    [fnToBeDebounced],
  );

  return callback;
}
