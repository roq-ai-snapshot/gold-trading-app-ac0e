import * as yup from 'yup';

export const goldInventoryValidationSchema = yup.object().shape({
  gold_type: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  acquisition_date: yup.date().required(),
  acquisition_price: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
});
