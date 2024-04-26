import * as Yup from 'yup';

export interface SignUpValues {
    username: string;
    password: string;
    confirm_password: string;
    email: string;   
}

export const SignUpValidation = Yup.object().shape({
    username: Yup.string()
        .min(2, "Minimum 2 letters")
        .max(40, "Maximum 40 letters")
        .required("This field is required"),
    password: Yup.string()
        .min(2, "Minimum 2 letters")
        .max(40, "Maximum 40 letters")
        .required("This field is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required("This field is required"),
    email: Yup.string()
        .email("This instance should be an email")
        .required()
})