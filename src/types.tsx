import { FormikConfig, FormikProps, FormikValues } from 'formik';

export type Step = {
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
  component: React.ComponentType<
    FormikProps<FormikValues> & { currentStepIndex: number }
  >;
};

export interface RenderProps extends FormikProps<FormikValues> {
  /** Handler to be called on previous button click */
  handlePrev: () => void;

  /** Handler to be called on next button click */
  handleNext: () => void;

  /** Current step index in number */
  readonly currentStepIndex?: number;

  /** Flag to indicate previous button should be disabled */
  readonly isPrevDisabled: boolean;

  /** Flag to indicate next button should be disabled */
  readonly isNextDisabled: boolean;

  /** Flag to indicate current step is first step */
  readonly isFirstStep: boolean;

  /** Flag to indicate current step is last step */
  readonly isLastStep: boolean;

  /** Current step component renderer */
  renderComponent: () => React.ReactNode;
}

export interface WizardProps extends FormikConfig<FormikValues> {
  /** Default active step index for the wizard */
  activeStepIndex: number;

  /** Wizard steps array */
  steps: Step[];

  /** Must be a function or react element */
  children?:
    | ((props: RenderProps) => React.ReactNode)
    | React.ReactElement<RenderProps>;

  /** Should validate the form before moving to next step */
  validateOnNext?: boolean;
}
