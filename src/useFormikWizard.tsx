import React from 'react';
import { useFormik } from 'formik';
import { useWizard } from './useWizard';
import { WizardProps, Step } from './types';

const useFormikWizard = ({
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
  const { component: StepComponent, validationSchema } = currentStep;
  const formik = useFormik({ ...props, validationSchema });

  return {
    ...formik,
    handlePrev: handlePrev(formik),
    handleNext: handleNext(formik),
    isFirstStep,
    isLastStep,
    currentStepIndex,
    isPrevDisabled,
    isNextDisabled: (validateOnNext && !formik.isValid) || false,
    renderComponent: () => <StepComponent {...formik} />,
  };
};

export { useFormikWizard };
