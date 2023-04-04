import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicShema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter  valid email address")
        .required("please enter your email address"),
    age: yup
        .number()
        .positive()
        .integer()
        .required(),
    password: yup
        .string()
        .min(5,"5 character required")
        .matches(passwordRules,{
            message:"required enter a small character and big character and a number "
        })
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "password does not match")
        .required(),
})