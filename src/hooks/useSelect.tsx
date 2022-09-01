import { ReactNode, useState } from "react";

interface UseSelectProps {
  initialValue?: any;
  initialOptions?: Array<any>;
}

export type SelectOption<T> = {
  children: ReactNode;
  value: T;
};

export const useSelect = <T,>({
  initialValue = null,
  initialOptions = [],
}: UseSelectProps) => {
  const [value, setValue] = useState<T | null>(initialValue);
  const [options, setOptions] = useState<Array<T>>(initialOptions);

  return { options, setOptions, value, setValue };
};
