import { contactsPayloadData } from '@components/generic/contacts/contactsPayloadData';
import * as Yup from 'yup';
const validationRules = contactsPayloadData.formData.validationRules;

// form validation rules
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required(validationRules.required)
    .min(validationRules.firstName.min.length, validationRules.firstName.min.title)
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/u, validationRules.firstName.invalid)
    .max(validationRules.firstName.max.length, validationRules.firstName.max.title),
  phoneNumber: Yup.string().required(validationRules.required),
  email: Yup.string()
    .trim()
    .required(validationRules.required)
    .email(validationRules.email.invalid)
    .max(validationRules.email.max.length, validationRules.email.max.title),
  direction: Yup.object({
    value: Yup.string().required(validationRules.required),
    label: Yup.string().required(validationRules.required),
  }),
  taskDescription: Yup.string()
    .trim()
    .required(validationRules.required)
    .min(validationRules.taskDescription.min.length, validationRules.taskDescription.min.title)
    .max(validationRules.taskDescription.max.length, validationRules.taskDescription.max.title),
});
