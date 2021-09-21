import { Row, Col, Form, Container } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikHandlers } from 'formik';

type StepProps = {
  errors: FormikErrors<FormikValues>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
};

const JobDetails = ({ errors, values, handleChange }: StepProps) => (
  <Container>
    <h3 className="mb-4">Job Details</h3>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="employerName">
        <Form.Label>Employer Name</Form.Label>
        <Form.Control
          type="text"
          name="employerName"
          value={values.employerName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="designation">
        <Form.Label>Designation</Form.Label>
        <Form.Control
          type="text"
          name="designation"
          value={values.designation}
          onChange={handleChange}
          isInvalid={!!errors.designation}
        />
        <Form.Control.Feedback type="invalid">
          {errors.designation}
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="totalExperience">
        <Form.Label>Total Experience</Form.Label>
        <Form.Control
          type="text"
          name="totalExperience"
          value={values.totalExperience}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
        />
      </Form.Group>
    </Row>
  </Container>
);

export default JobDetails;
