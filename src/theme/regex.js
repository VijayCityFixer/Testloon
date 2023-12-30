/* For valid email */
export const emailRegex =
  /^[a-zA-Z][a-zA-Z0-9_.]{1,32}@[a-zA-Z0-9_-]{2,}(\.[a-zA-Z0-9]{2,4}){1,2}$/;

/* Only for digits, it can't accept hyphen or dot */
export const phoneRegex = /[- #*;,.<>\{\}\[\]\\\/]/gi;

/* Check if password contain at least 1 alphabet, 1 numeric, 1 special character ,not contain Whitespace, and 7 characters long. */
export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/;
