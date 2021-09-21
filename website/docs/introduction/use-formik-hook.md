---
sidebar_position: 3
---

# useFormikWizard

```javascript
import { useFormikWizard } from 'formik-wizard-form';
```

`useFormikWizard` is a replacement of original `useFormik` hook and accepts all the formik props along with `WizardProps` interface:

```typescript
interface WizardProps extends FormikConfig<FormikValues> {
  /** Default active step index for the wizard */
  activeStepIndex: number;

  /** Wizard steps array given below */
  steps: Step[];

  /** Must be a function or react element */
  children?:
    | ((props: RenderProps) => React.ReactNode)
    | React.ReactElement<RenderProps>;

  /** Should validate the form before moving to next step */
  validateOnNext?: boolean;
}

type Step = {
  /** Validation schema object for the current step */
  validationSchema?: any | (() => any);

  /** Handler to be called before moving to previous step */
  beforePrev?: (
    values: FormikValues,
    formikBag: FormikProps<FormikValues>,
    currentStepIndex: number
  ) => Promise<any>;

  /** Handler to be called before moving to next step */
  beforeNext?: (
    values: FormikValues,
    formikBag: FormikProps<FormikValues>,
    currentStepIndex: number
  ) => Promise<any>;

  /** React functional or class component */
  component: React.ComponentType<FormikProps<FormikValues>>;
};
```

### `steps: Step[]`

steps is an array of form step objects where each object contains the information about a particular step component. Each step object must satisfy the below typescript type.

### `activeStepIndex: number`

activeStepIndex is the index of step which you want to make active by default on form render. Starting from zero.

### `validateOnNext: boolean`

validateOnNext is a boolean flag which controls whether to by pass the form validations or prevent moving backward/forward in case of invalid form.

## Hook Return Value

`useFormikWizard()` returns an object of render props and method containing the below interface:

```typescript
interface RenderProps extends FormikProps<FormikValues> {
  /** Handler to be called on previous button click */
  handlePrev: () => void;

  /** Handler to be called on next button click */
  handleNext: () => void;

  /** Current step index in number */
  currentStepIndex?: number;

  /** Flag to indicate previous button should be disabled */
  isPrevDisabled: boolean;

  /** Flag to indicate next button should be disabled */
  isNextDisabled: boolean;

  /** Flag to indicate current step is first step */
  isFirstStep: boolean;

  /** Flag to indicate current step is last step */
  isLastStep: boolean;

  /** Current step component renderer */
  renderComponent: () => React.ReactNode;
}
```

- **handlePrev**: should be provided to previous button onClick prop. It will take you to the previous step.
- **handleNext**: should be provided to next button onClick prop. It will take you to the next step.
- **currentStepIndex**: read-only property which returns the index of current step.
- **isPrevDisabled**: read only prop which returns Boolean value for whether previous button should be disabled.
- **isNextDisabled**: read only prop which returns Boolean value for whether next button should be disabled.
- **isFirstStep**: read only prop which returns boolean value for whether the current active step is the first step.
- **isLastStep**: read only prop which returns boolean value for whether the current active step is the last step.
- **renderComponent**: is the method which is responsible for rendering current step component.

## Example

```javascript
const MultiStepForm = () => {
  const {
    renderComponent,
    handlePrev,
    handleNext,
    isNextDisabled,
    isPrevDisabled,
    isLastStep,
  } = useFormikWizard({
    initialValues: { firstName: '', lastName: '' },
    onSubmit: values => console.log(values),
    validateOnNext: true,
    activeStepIndex: 0,
    steps: [
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
      <button type="button" onClick={handlePrev} disabled={isPrevDisabled}>
        Previous
      </button>
      <button type="button" onClick={handleNext} disabled={isNextDisabled}>
        {isLastStep ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};
```
