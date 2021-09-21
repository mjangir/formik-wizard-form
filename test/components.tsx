import React from 'react';
import { FormikErrors, FormikValues, FormikHandlers } from 'formik';

type StepProps = {
  errors: FormikErrors<FormikValues>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
};

const PersonalDetails = ({ errors, values, handleChange }: StepProps) => {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        placeholder="First Name"
        name="firstName"
        type="text"
        value={values.firstName}
        onChange={handleChange}
      />
      <span className="error">{errors.firstName}</span>
    </div>
  );
};

const ContactDetails = ({ errors, values, handleChange }: StepProps) => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="Email"
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <span className="error">{errors.email}</span>
    </div>
  );
};

const JobDetails = ({ errors, values, handleChange }: StepProps) => {
  return (
    <div>
      <label htmlFor="designation">Designation</label>
      <input
        id="designation"
        placeholder="Designation"
        name="designation"
        type="text"
        value={values.designation}
        onChange={handleChange}
      />
      <span className="error">{errors.designation}</span>
    </div>
  );
};

export { PersonalDetails, ContactDetails, JobDetails };
