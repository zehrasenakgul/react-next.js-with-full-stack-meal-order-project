import * as Yup from "yup";
// validation
export const loginSchema = Yup.object({
    email: Yup.string()
        .required("E-Mail is required.")
        .email("Must be a valid email")
        .min(3, "E-Mail must be at least 3 characters."),
    fullName: Yup.string()
        .required("Full Name is required.")
        .min(3, "Full Name must be at least 3 characters."),
    password: Yup.string()
        .required("Password is required.")
        .min(5, "Password number must be at least 5 characters."),
    rememberMe: Yup.boolean().oneOf([true], "You must accept the terms and conditions")
});