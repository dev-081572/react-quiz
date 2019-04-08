import is from 'is_js';

export function validateControl(value, validation = null) {
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

export function validateForm(formControls) {
  let isValid = true;

  Object.keys(formControls).forEach(name => {
    isValid = isValid && formControls[name].valid;
  });

  return isValid;
}

export function createControl(config, validation) {
  return {
    ...config,
    value: '',
    valid: !validation,
    touched: false,
    validation,
  }
}

export function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: 'Ответ не может быть пустым',
      optionId: number
    },
    {
      required: true
    }
  )
}

export function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым'
      },
      {
        required: true
      }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}
