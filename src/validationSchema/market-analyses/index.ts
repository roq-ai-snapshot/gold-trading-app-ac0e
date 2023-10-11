import * as yup from 'yup';

export const marketAnalysisValidationSchema = yup.object().shape({
  gold_type: yup.string().nullable(),
  analysis_date: yup.date().required(),
  predicted_price: yup.number().integer().nullable(),
  actual_price: yup.number().integer().nullable(),
  accuracy: yup.number().integer().nullable(),
  analyst_id: yup.string().nullable().required(),
});
