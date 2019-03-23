import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonsList = ({
  activeStepIndex,
  totalSteps,
  onPreviousStep,
  onNextStep,
  onSubmit,
  children,
  validators,
}) => (
  <div className="react-formik-wizard__footer">
    {Children.map(children, child => {
      const validator = validators[activeStepIndex];
      if (child.type.displayName === 'PreviousButton') {
        return (
          <div className="previous">
            <Button
              className="react-formik-wizard__footer__button react-formik-wizard__footer__button--previous"
              show={activeStepIndex > 0}
              onClick={onPreviousStep}
              label="Previous"
              {...child.props}
            />
          </div>
        );
      }
      if (child.type.displayName === 'NextButton') {
        return (
          <Button
            className="react-formik-wizard__footer__button react-formik-wizard__footer__button--next"
            show={activeStepIndex < totalSteps}
            onClick={onNextStep}
            validator={validator}
            label="Next"
            {...child.props}
          />
        );
      }
      if (child.type.displayName === 'SubmitButton') {
        return (
          <Button
            className="react-formik-wizard__footer__button react-formik-wizard__footer__button--submit"
            show={activeStepIndex === totalSteps}
            onClick={onSubmit}
            validator={validator}
            type="submit"
            label="Finish"
            {...child.props}
          />
        );
      }
      return child;
    })}
  </div>
);

ButtonsList.propTypes = {
  activeStepIndex: PropTypes.number,
  totalSteps: PropTypes.number,
  onPreviousStep: PropTypes.func,
  onNextStep: PropTypes.func,
  onSubmit: PropTypes.func,
  validators: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ButtonsList.displayName = 'ButtonsList';

export default ButtonsList;
