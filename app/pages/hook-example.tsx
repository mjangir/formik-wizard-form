import * as React from 'react';
import * as Yup from 'yup';
import { useFormikWizard } from 'formik-wizard-form';
import { Form, Button } from 'react-bootstrap';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import JobDetails from './JobDetails';

const HookExample = () => {
  const [finalValues, setFinalValues] = React.useState({});
  const {
    renderComponent,
    handlePrev,
    handleNext,
    isNextDisabled,
    isPrevDisabled,
    isLastStep,
  } = useFormikWizard({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      employerName: '',
      designation: '',
      totalExperience: '',
      city: '',
    },
    onSubmit: values => setFinalValues(values),
    validateOnNext: true,
    activeStepIndex: 0,
    steps: [
      {
        component: PersonalDetails,
        validationSchema: Yup.object().shape({
          firstName: Yup.string().required('First name is required'),
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required'),
        }),
      },
      {
        component: ContactDetails,
        validationSchema: Yup.object().shape({
          email: Yup.string()
            .email('Please enter valid email')
            .required('Email is required'),
          phone: Yup.string().required('Phone number is required'),
        }),
      },
      {
        component: JobDetails,
        validationSchema: Yup.object().shape({
          designation: Yup.string().required('Designation is required'),
        }),
      },
    ],
  });
  return (
    <div>
      {renderComponent()}
      <Form.Group className="d-flex justify-content-between p-2">
        <Button
          variant="primary"
          type="button"
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </Form.Group>
      <pre>{JSON.stringify(finalValues, null, 2)}</pre>
    </div>
  );
};

export default HookExample;
