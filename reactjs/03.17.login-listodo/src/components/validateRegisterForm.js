
export default function validateRegisterForm(formvalue) {
  let errors = {};
  //email
    // the string to be more than 0 chars
  if (!formvalue.email) {
    errors.email = "Email address is required";
  }
  // need the string to be an email
  else if (!/\S+@\S+\.\S+/.test(formvalue.email)) {
    errors.email = "Email address is invalid";
  }
  //passwords
  if (!formvalue.password) {
    errors.password = "Password is required";
  }
  //be more than 6 chars
  else if (formvalue.password.length < 0) {
    errors.password = "Password needs to be more than 8 characters";
  }
  if (formvalue.confirmPassword) {
    if (formvalue.password !== formvalue.confirmPassword) {
      errors.confirmPassword = "password and confirm password did not match"
    }
      //confirm passwords
      //be === passwords value
  }
  // neu nhap sai thong tin về id hoac pass

  return errors;
}