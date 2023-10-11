import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  established_at: yup.date().nullable(),
  country: yup.string().nullable(),
  city: yup.string().nullable(),
  address: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
