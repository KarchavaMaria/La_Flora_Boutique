import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  phone: yup.string().required('Phone is required'),
  message: yup
    .string()
    .min(10, 'Min 6 characters')
    .required('Message is required'),
});
