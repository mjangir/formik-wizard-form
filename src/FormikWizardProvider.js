import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import './style.scss';

class FormikWizardProvider extends React.Component {
  componentDidMount() {
    this.props.validateForm();
  }

  getValidators(validatorFuncs) {
    return validatorFuncs.map(func => () => func({ ...this.props }));
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <Form>
        {this.props.children({
          getValidators: validators => this.getValidators(validators),
          ...props,
        })}
      </Form>
    );
  }
}

FormikWizardProvider.propTypes = {
  validateForm: PropTypes.func,
  children: PropTypes.func,
};

export default FormikWizardProvider;
