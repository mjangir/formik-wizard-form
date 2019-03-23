/* eslint-disable no-useless-escape */
import { withFormik } from 'formik';
import * as Yup from 'yup';

export default withFormik({
  displayName: 'WizardForm',
  enableReinitialize: true,
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    mobile: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
  }),
  validationSchema: () =>
    Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      email: Yup.string().required('Email is required'),
      addressLine1: Yup.string().required('Address Line 1 is required'),
    }),
  handleSubmit: values => {
    console.log(values);
  },
});
