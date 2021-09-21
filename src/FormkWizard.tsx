import React from 'react';
import { Formik } from 'formik';
import { WizardProps, Step } from './types';
import { useWizard } from './useWizard';

const FormikWizard = ({
  activeStepIndex = 0,
  validateOnNext = true,
  steps,
  children,
  ...props
}: WizardProps) => {
  const {
    currentStepIndex,
    isPrevDisabled,
    isFirstStep,
    isLastStep,
    handlePrev,
    handleNext,
  } = useWizard(activeStepIndex, steps, validateOnNext);
  const currentStep: Step = steps[currentStepIndex];
  const { component: StepComponent } = currentStep;

  return (
    <Formik {...props} validationSchema={currentStep.validationSchema}>
      {typeof children === 'function'
        ? formikBag => {
            const wizardProps = {
              handlePrev: handlePrev(formikBag),
              handleNext: handleNext(formikBag),
              isFirstStep,
              isLastStep,
              currentStepIndex,
              isPrevDisabled,
              isNextDisabled: (validateOnNext && !formikBag.isValid) || false,
              renderComponent: () => <StepComponent {...formikBag} />,
            };

            return children({
              ...formikBag,
              ...wizardProps,
            });
          }
        : children}
    </Formik>
  );
};

export { FormikWizard };
