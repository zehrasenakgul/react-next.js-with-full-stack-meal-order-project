import * as Yup from "yup";

// validation
export const reserveSchema = Yup.object({
    fullName: Yup.string()
        .required("Full name is required.")
        .min(3, "Full name must be at least 3 characters."),
    phoneNumber: Yup.string()
        .required("Full name is required.")
        .min(10, "Phone number must be at least 10 characters."),
    persons: Yup.string().required("Persons is required."),
    date: Yup.string().required("Date is required."),
});