import { useState } from "react";
// import { Provider } from 'react-redux';
const useForm = (callback, validateRegisterForm, history) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // END OF CREATE LOCALSTORAGE

  //new state for errors
  //function that validates these errors
  //pass these errors back to form
  const handleChange = event => {
    const { name, value } = event.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // handle errors
    setErrors(validateRegisterForm(formValue));
    await setIsSubmitting(true);
    // console.log(Object.keys(errors)),s;
    if (Object.keys(errors).length === 0) {
      callback();
      setIsSubmitting(false);
      //  setTimeout( async () => {
      //    history.push('/login-page');
      //    setIsSubmitting(true)
      //  }, 2000);
    }
  };

  // for (var key in obj){
  //   console.log(key, obj[key]);
  // };

  const handleSubmitLogin = async event => {
    event.preventDefault();
    setErrors(validateRegisterForm(formValue));
    await setIsSubmitting(true);
    let flag = false;
    if (Object.keys(errors).length === 0) {
      const dataLocalStorage = JSON.parse(localStorage.getItem("formValue"));
      if (dataLocalStorage > 0) {
        for (let i = 0; i < dataLocalStorage.length; i++) {
          if (
            formValue.email === dataLocalStorage[i].email &&
            formValue.password === dataLocalStorage[i].password
          ) {
            flag = true;
            localStorage.setItem("loginEmail", dataLocalStorage[i].email);
          } else {
            // flag = false;
          }
        }
        if (flag === true) {
          // callback();
          history.push("/todo-list-page");
        }
      } else {
        console.log("please create acc");
      }
    }
  };

  return {
    handleChange,
    handleSubmit,
    formValue,
    errors,
    isSubmitting,
    handleSubmitLogin
  };
};
export default useForm;

/**
 * Để lưu được localstorge thì phải
 *
 */
