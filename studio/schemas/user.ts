interface newUser {
  name: string; // required, max 50 characters
  email: string; // required, max 50 characters, must be a valid email
  password: string; // required, max 50 characters, must contain at least one number and one letter
  passwordConfirmation: string; // required, must match password
  phoneNumber: string; // required, must be a valid norwegian phone number
}