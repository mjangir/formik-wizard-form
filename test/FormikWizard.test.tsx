import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import { FormikWizard } from '../src';
import { PersonalDetails, ContactDetails, JobDetails } from './components';

const steps = [
  {
    component: PersonalDetails,
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
    }),
  },
  {
    component: ContactDetails,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required'),
    }),
    beforeNext: (
      _: FormikValues,
      {
        setFieldValue,
      }: { setFieldValue: FormikHelpers<FormikValues>['setFieldValue'] }
    ) =>
      new Promise(resolve => {
        setTimeout(() => {
          setFieldValue('email', 'manish@gmail.com');
          resolve(true);
        }, 500);
      }),
  },
  {
    component: JobDetails,
    validationSchema: Yup.object().shape({
      designation: Yup.string().required('Designation is required'),
    }),
    beforePrev: (
      _: FormikValues,
      {
        setFieldValue,
      }: { setFieldValue: FormikHelpers<FormikValues>['setFieldValue'] }
    ) =>
      new Promise(resolve => {
        setTimeout(() => {
          setFieldValue('designation', 'Senior Software Engineer');
          resolve(true);
        }, 500);
      }),
  },
];

describe('<FormikWizard />', () => {
  it('renders without crashing', async () => {
    const onSubmit = jest.fn();
    const { getByText, queryByText, findByText, getByPlaceholderText } = render(
      <FormikWizard
        initialValues={{ firstName: '', email: '', designation: '' }}
        onSubmit={onSubmit}
        validateOnNext
        activeStepIndex={0}
        steps={steps}
      >
        {({
          renderComponent,
          handlePrev,
          handleNext,
          isNextDisabled,
          isPrevDisabled,
          isLastStep,
        }) => (
          <>
            {renderComponent()}
            <button
              type="button"
              onClick={handlePrev}
              disabled={isPrevDisabled}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={isNextDisabled}
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </FormikWizard>
    );

    const nextButton = getByText('Next');
    const previousButton = getByText('Previous');

    expect(getByText('Previous')).toHaveAttribute('disabled');
    expect(nextButton).not.toHaveAttribute('disabled');

    expect(queryByText('First name is required')).toBeNull();

    fireEvent.click(getByText('Next'));
    expect(await findByText('First name is required')).toBeInTheDocument();

    await waitFor(() =>
      fireEvent.change(getByPlaceholderText('First Name'), {
        target: { value: 'Manish' },
      })
    );
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(getByText('Email')).toBeInTheDocument();
    });

    fireEvent.click(getByText('Next'));
    expect(await findByText('Email is required')).toBeInTheDocument();

    await waitFor(() =>
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'abcd@gmail.com' },
      })
    );
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(getByText('Designation')).toBeInTheDocument();
      expect(getByText('Finish')).toBeInTheDocument();
    });

    await waitFor(() =>
      fireEvent.change(getByPlaceholderText('Designation'), {
        target: { value: 'Software Engineer' },
      })
    );
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(onSubmit.mock.calls[0][0]).toEqual({
        firstName: 'Manish',
        email: 'manish@gmail.com',
        designation: 'Software Engineer',
      });
    });

    fireEvent.click(previousButton);
    await waitFor(() => expect(getByText('Email')).toBeInTheDocument());

    fireEvent.click(nextButton);
    await waitFor(() => expect(getByText('Designation')).toBeInTheDocument());

    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(onSubmit.mock.calls[1][0]).toEqual({
        firstName: 'Manish',
        email: 'manish@gmail.com',
        designation: 'Senior Software Engineer',
      });
    });
  });
});
