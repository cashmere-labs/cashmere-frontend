import { MapStringToString } from "types/app";

export class FormValidator {
  errors: MapStringToString;

  constructor() {
    this.errors = {};
  }

  setErrors(errors: MapStringToString) {
    this.errors = errors;
  }

  setError(field: string, error: string) {
    this.errors[field] = error;
  }

  clearErrors() {
    this.errors = {};
  }

  clearError(field: string) {
    const _errors = { ...this.errors };
    delete _errors[field];
    this.errors = _errors;
  }

  hasError() {
    const keys = Object.keys(this.errors);
    for (let i = 0; i < keys.length; i++) {
      const item = this.errors[keys[i]];
      if (item) {
        return true;
      }
    }
  }
}
