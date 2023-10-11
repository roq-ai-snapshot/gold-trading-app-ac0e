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

import { goldInventoryValidationSchema } from 'validationSchema/gold-inventories';
import { CompanyInterface } from 'interfaces/company';
import { GoldInventoryInterface } from 'interfaces/gold-inventory';

function GoldInventoryCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: GoldInventoryInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.gold_inventory.create({ data: values as any });
      resetForm();
      router.push('/gold-inventories');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<GoldInventoryInterface>({
    initialValues: {
      gold_type: '',
      quantity: 0,
      acquisition_date: new Date(new Date().toDateString()),
      acquisition_price: 0,
      company_id: (router.query.company_id as string) ?? null,
    },
    validationSchema: goldInventoryValidationSchema,
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
              label: 'Gold Inventories',
              link: '/gold-inventories',
            },
            {
              label: 'Create Gold Inventory',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Gold Inventory
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

          <NumberInput
            label="Quantity"
            formControlProps={{
              id: 'quantity',
              isInvalid: !!formik.errors?.quantity,
            }}
            name="quantity"
            error={formik.errors?.quantity}
            value={formik.values?.quantity}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('quantity', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="acquisition_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Acquisition Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.acquisition_date ? new Date(formik.values?.acquisition_date) : null}
              onChange={(value: Date) => formik.setFieldValue('acquisition_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Acquisition Price"
            formControlProps={{
              id: 'acquisition_price',
              isInvalid: !!formik.errors?.acquisition_price,
            }}
            name="acquisition_price"
            error={formik.errors?.acquisition_price}
            value={formik.values?.acquisition_price}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('acquisition_price', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={() => roqClient.company.findManyWithCount({})}
            labelField={'name'}
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
              onClick={() => router.push('/gold-inventories')}
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
    entity: 'gold_inventory',
    operation: AccessOperationEnum.CREATE,
  }),
)(GoldInventoryCreatePage);
