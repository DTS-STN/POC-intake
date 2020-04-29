import { extend } from "vee-validate";
import { required, alpha, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});

extend("email", {
  ...email,
  message: "Please enter a correct email format"
});

// extend("email", {
//   ...required,
//   message: "email is required"
// });

extend("fname", {
  ...required,
  message: "please input your first name"
});

extend("lname", {
  ...required,
  message: "Please input your last name"
});
