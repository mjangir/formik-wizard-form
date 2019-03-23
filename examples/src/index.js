import React from "react";
import ReactDOM from "react-dom";
import {
  FormikWizardProvider,
  Wizard,
  StepsList,
  Step,
  ButtonsList,
  PreviousButton,
  NextButton,
  SubmitButton
} from "../../src";
import { DisplayFormikState } from './helper';
import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import AddressDetails from "./AddressDetails";
import withFormik from "./withFormik";

import "./styles.css";

function basicValidations({ errors }) {
  return !errors.firstName;
}

function contactValidations({ errors }) {
  return !errors.email;
}

function addressValidations({ errors }) {
  return !errors.addressLine1;
}

function App(props) {
  return (
    <div className="App">
      <FormikWizardProvider {...props}>
        {({ getValidators, ...otherProps }) => (
          <Wizard {...otherProps}>
            <StepsList
              validators={getValidators([basicValidations, contactValidations, addressValidations])}
            >
              <Step component={BasicDetails} title="Basic Details" />
              <Step component={ContactDetails} title="Contact Details" />
              <Step component={AddressDetails} title="Address Details" />
            </StepsList>
            <ButtonsList>
              <PreviousButton />
              <NextButton />
              <SubmitButton />
            </ButtonsList>
          </Wizard>
        )}
      </FormikWizardProvider>
      <DisplayFormikState {...props} />
    </div>
  );
}

const WithFormikApp = withFormik(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<WithFormikApp />, rootElement);
