export const validateEmail = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isEmailValid) return "Email ID is not valid";

  return null;
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const validateName = (name) => {
  const isNameValid =
    /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(name) ||
    /^[a-zA-Z][a-zA-Z\\s]+$/.test(name);

  if (!isNameValid) return "Enter a valid Name";

  return null;
};
