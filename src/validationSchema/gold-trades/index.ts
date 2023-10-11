import * as yup from 'yup';

export const goldTradeValidationSchema = yup.object().shape({
  gold_type: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  trade_date: yup.date().required(),
  trade_price: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
