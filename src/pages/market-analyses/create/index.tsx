import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';

import { marketAnalysisValidationSchema } from 'validationSchema/market-analyses';
import { UserInterface } from 'interfaces/user';
import { MarketAnalysisInterface } from 'interfaces/market-analysis';

function MarketAnalysisCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: MarketAnalysisInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.market_analysis.create({ data: values as any });
      resetForm();
      router.push('/market-analyses');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MarketAnalysisInterface>({
    initialValues: {
      gold_type: '',
      analysis_date: new Date(new Date().toDateString()),
      predicted_price: 0,
      actual_price: 0,
      accuracy: 0,
      analyst_id: (router.query.analyst_id as string) ?? null,
    },
    validationSchema: marketAnalysisValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Market Analyses',
              link: '/market-analyses',
            },
            {
              label: 'Create Market Analysis',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Market Analysis
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.gold_type}
            label={'Gold Type'}
            props={{
              name: 'gold_type',
              placeholder: 'Gold Type',
              value: formik.values?.gold_type,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="analysis_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Analysis Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.analysis_date ? new Date(formik.values?.analysis_date) : null}
              onChange={(value: Date) => formik.setFieldValue('analysis_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Predicted Price"
            formControlProps={{
              id: 'predicted_price',
              isInvalid: !!formik.errors?.predicted_price,
            }}
            name="predicted_price"
            error={formik.errors?.predicted_price}
            value={formik.values?.predicted_price}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('predicted_price', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Actual Price"
            formControlProps={{
              id: 'actual_price',
              isInvalid: !!formik.errors?.actual_price,
            }}
            name="actual_price"
            error={formik.errors?.actual_price}
            value={formik.values?.actual_price}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('actual_price', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Accuracy"
            formControlProps={{
              id: 'accuracy',
              isInvalid: !!formik.errors?.accuracy,
            }}
            name="accuracy"
            error={formik.errors?.accuracy}
            value={formik.values?.accuracy}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('accuracy', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'analyst_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/market-analyses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'market_analysis',
    operation: AccessOperationEnum.CREATE,
  }),
)(MarketAnalysisCreatePage);
