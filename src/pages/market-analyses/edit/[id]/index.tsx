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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useMarketAnalysisFindFirst } from 'lib/roq';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { marketAnalysisValidationSchema } from 'validationSchema/market-analyses';
import { MarketAnalysisInterface } from 'interfaces/market-analysis';
import { UserInterface } from 'interfaces/user';

function MarketAnalysisEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'market_analysis',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useMarketAnalysisFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: MarketAnalysisInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.market_analysis.update({
        data: values as any,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/market-analyses');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<MarketAnalysisInterface>({
    initialValues: data,
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
              label: 'Update Market Analysis',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Market Analysis
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
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
    operation: AccessOperationEnum.UPDATE,
  }),
)(MarketAnalysisEditPage);
