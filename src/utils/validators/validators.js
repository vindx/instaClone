export const required = value => {
  if (value) {
    return undefined;
  }
  return 'This field is required.';
};

export const passwordMinLengthCreator = minLength => value =>
  value && value.length < minLength
    ? `Create a password at least ${minLength} characters long.`
    : undefined;

export const maxLengthCreator = maxLength => value =>
  value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;

export const minLengthCreator = minLength => value =>
  value && value.length < minLength ? `Min length is ${minLength} symbols` : undefined;

export const invalidEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Enter a valid email address.'
    : undefined;

export const notOnlyNumbers = value =>
  value && /^[0-9]+$/.test(value) ? 'Your username cannot contain only numbers.' : undefined;

export const userNameValidator = value =>
  value && !/^[a-z0-9._]+$/i.test(value)
    ? 'Username can only use letters, numbers, underscores and periods.'
    : undefined;

export const postTagNameValidator = value =>
  value && !/^[a-z0-9._]+$/.test(value)
    ? 'Use letters, numbers, underscores and periods only.'
    : undefined;
