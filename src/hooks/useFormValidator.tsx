import { useState } from "react";
import { MapStringToString } from "types/app";
import { FormValidator } from "utils/FormValidator";

const formValidator = new FormValidator();

export const useFormValidator = () => {
  const [errors, setErrors] = useState<MapStringToString>({});

  return { validator: formValidator, errors, setErrors };
};
