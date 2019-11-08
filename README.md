# Formik Wizard Form

Formik Wizard Form is stepper form component built over [Formik](https://github.com/jaredpalmer/formik) (the most famous form library in react world). Now create your form wizards in a nice and declarative way.


## Installation:

    npm install --save formik-wizard-form

## [Demo](https://mjangir.github.io/formik-wizard-form)

## How To Use:

Using formik wizard form is quite easy. Import all of its helper components and arrange them in a particular sequence. It contains a root component called `FormikWizardProvider` which uses `Render Props` , `Compound Components` and `Prop Getters` patterns to render its children components.

    import {
		FormikWizardProvider,
		Wizard,
		StepsList,
		Step,
		ButtonsList,
		PreviousButton,
		NextButton,
		SubmitButton
	} from  "formik-wizard-form";
	import BasicDetails './BasicDetails'; // form for basic details
	import ContactDetails './ContactDetails'; // form for contact info
	import AddressDetails './AddressDetails'; // form for address info
	
	const UserForm = (props) => (
		<FormikWizardProvider {...props}>
			{(renderProps) => (
				<Wizard {...renderProps}>
					<StepsList>
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
	);
	// Finally wrap this form in withFormik higher order component given by formik
	const ActualForm = withFormik(....)(UserForm);
	
	<ActualForm /> // This is wizard with 3 steps
Thats it. It will render the wizard now.

## How To Validate Each Step

The provider `FormikWizardProvider` gives a `getValidators` function in the render props which can be used by `StepsList` component as a prop called `validators`. Refer the following line of code:

    <FormikWizardProvider {...props}>
	    {({getValidators, ...otherProps}) => (
		    <Wizard {...otherProps}>
			    <StepsList validators={getValidators([null, validateContactInfo, validateAddressInfo])}>
				    ...// All the Step components			
			    </StepsList>
			    <ButtonsList>
			    ...	// Button components
				</ButtonsList>
			</Wizard>
		)}
	</FormikWizardProvider>
In the above code, we have passed a validator function for each step. The validator function should return either `true` or `false`. Each validator is passed all the `formik` props like **errors** and **touched**.  If any of your step doesn't have any validations, just pass `null` at that index. The order of validators is very important.

**Example Validator**

    function validateContactInfo({ errors }) {
	    return !errors.email && !errors.phone;
	}

## Helper Components

#### FormikWizardProvider
This the root component which accepts a function as children and that function is called with all the props received from `withFormik` HOC. These props can be passed to further components.

#### Wizard
This must be the root component of your render function and pass all render props in it. Refer the example :blush:

#### StepsList
`StepsList` is the parent of all of your step pages.

|        Prop Name        |Value                          |Default Value                         |
|----------------|-------------------------------|-----------------------------|
|validators|Array of validator functions            |[]            |

#### Step
`Step` is the actual page component

|        Prop Name        |Value |Default Value |
|----------------|-------------------------------|-----------------------------|
|title|Title of the step|Required|
|component|Valid React component class or function|Required|

#### ButtonsList
Root component of your wizard buttons. The children of `ButtonsList` should be the following:
#### PreviousButton
This component renders Previous button of the wizard. You can also provide your own button component as its children. The `onClick` and `disabled` props will be automatically applied to your custom button if any.
#### NextButton
This component renders Next button of the wizard. You can also provide your own button component as its children. The `onClick` and `disabled` props will be automatically applied to your custom button if any.
#### SubmitButton
This component renders Submit button of the wizard. You can also provide your own button component as its children. Hitting the submit button will trigger the `onSubmit` of `withFormik` HOC.

### Based On
[Formik](https://github.com/jaredpalmer/formik)

### Maintainers
[Manish Jangir](https://github.com/mjangir)
