---
sidebar_position: 3
---

# FormikWizard

## &lt;FormikWizard /&gt;

```javascript
import { FormikWizard } from 'formik-wizard-form';
```

`<FormikWizard />` is a replacement of original `<Formik />` component and accepts all the formik props along with the following listed:

### `steps: Step[]`

steps is an array of form step objects where each object contains the information about a particular step component. Each step object must satisfy the below typescript type.

```typescript
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

- **validationSchema:** is a Yup object or anything which Formik accepts. Please provide all the validation specific to this particular step.
- **beforePrev:** should be a function which will be called before moving to previous step on click of prev button. The function must return a `Promise`. Rejecting this promise won't let you go to previous step.
- **beforeNext:** is same as beforePrev but applied on next step.
- **component:** must be a react functional or class component which will get all the formik methods and properties as its props when rendered.

### `activeStepIndex: number`

activeStepIndex is the index of step which you want to make active by default on form render. Starting from zero.

### `validateOnNext: boolean`

validateOnNext is a boolean flag which controls whether to by pass the form validations or prevent moving backward/forward in case of invalid form.

### `children: ((props: RenderProps) => React.ReactNode) | React.ReactElement<RenderProps>`

children prop type is the same as formik but to render stepper forms, it must be a function which will get `RenderProps` as its arguments.

If you provide `children` as a function, it will provide the following arguments in return along with the standard/original formik render props.

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
<FormikWizard
  initialValues={{ firstName: '', email: '', designation: '' }}
  onSubmit={values => console.log(values)}
  validateOnNext
  activeStepIndex={0}
  steps={[
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
  ]}
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
      <button type="button" onClick={handlePrev} disabled={isPrevDisabled}>
        Previous
      </button>
      <button type="button" onClick={handleNext} disabled={isNextDisabled}>
        {isLastStep ? 'Finish' : 'Next'}
      </button>
    </>
  )}
</FormikWizard>
```
