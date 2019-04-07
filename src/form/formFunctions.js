import is from 'is_js';

export function validateControl(value, validation) {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = isValid && (value.trim() !== '');
  }

  if (validation.minLength) {
    isValid = isValid && (value.trim().length >= validation.minLength);
  }

  if (validation.email) {
    isValid = isValid && is.email(value);
  }

  return isValid;
}
