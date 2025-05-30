import * as yup from "yup";

export const mortgageSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .min(10000, "Minimum is 10,000 "),

  term: yup
    .number()
    .typeError("Term must be a number")
    .required("Term is required")
    .min(1, "Minimum is 1 year")
    .max(40, "Maximum is 40 years"),

  rate: yup
    .number()
    .typeError("Rate must be a number")
    .required("Rate is required")
    .min(0.1, "Rate is too low")
    .max(100, "Rate is too high"),

  type: yup
    .string()
    .required("Mortgage type is required")
    .oneOf(["repayment", "interestOnly"], "Invalid type"),
});
