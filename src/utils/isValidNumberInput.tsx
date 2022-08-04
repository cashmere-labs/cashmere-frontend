import { NUMBER_REGEX } from "constants/utils";

export const isValidNumberInput = (val: string) => {
  if (!NUMBER_REGEX.test(val) || val.includes("-")) {
    return false;
  }
  return true;
};
