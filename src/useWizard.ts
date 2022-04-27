import { useState, useCallback, useEffect } from 'react';
import { Step } from './types';
import { isFunction } from './utils';

const useWizard = (
  activeStepIndex: number,
  steps: Step[],
  validateOnNext: boolean
) => {
  const total = steps.length;
  const [currentStep, setCurrentStep] = useState(activeStepIndex);
  const isPrevDisabled: boolean = currentStep === 0;
  const isFirstStep: boolean = currentStep === 0;
  const isLastStep: boolean = currentStep >= total - 1;
  useEffect(
    () => {
      setCurrentStep(activeStepIndex);
    },
    [setCurrentStep, activeStepIndex]
  );
  const goToPrev = useCallback(
    () => setCurrentStep(Math.max(0, currentStep - 1)),
    [setCurrentStep, currentStep]
  );
  const goToNext = useCallback(
    () => setCurrentStep(Math.min(currentStep + 1, total - 1)),
    [setCurrentStep, currentStep, total]
  );
  const stepObj: Step = steps[currentStep];
  const { beforePrev, beforeNext } = stepObj;

  const handlePrev = useCallback(
    (formikBag: any) => async () => {
      let isValid = true;

      if (isFunction(beforePrev)) {
        try {
          await beforePrev!(formikBag.values, formikBag, currentStep);
        } catch (error) {
          isValid = false;
        }
      }

      if (isValid) {
        goToPrev();
      }
    },
    [goToPrev, currentStep, beforePrev]
  );

  const handleNext = useCallback(
    (formikBag: any) => async () => {
      let isValid = false;

      if (validateOnNext) {
        const errors = await formikBag.validateForm();
        isValid = Object.keys(errors).length === 0;
      }

      if (
        ((validateOnNext && isValid) || !validateOnNext) &&
        isFunction(beforeNext)
      ) {
        try {
          await beforeNext!(formikBag.values, formikBag, currentStep);
          isValid = true;
        } catch (error) {
          isValid = false;
        }
      }

      if (isValid) {
        isLastStep ? formikBag.submitForm() : goToNext();
      }
    },
    [goToNext, currentStep, beforeNext, isLastStep, validateOnNext]
  );

  return {
    currentStepIndex: currentStep,
    isPrevDisabled,
    isFirstStep,
    isLastStep,
    goToPrev,
    goToNext,
    handlePrev,
    handleNext,
  };
};

export { useWizard };
