import { Container, Row, Col, Form } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikHandlers } from 'formik';

type StepProps = {
  errors: FormikErrors<FormikValues>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
};

const PersonalDetails = ({ errors, values, handleChange }: StepProps) => (
  <Container>
    <h3 className="mb-4">Personal Details</h3>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          isInvalid={!!errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
  </Container>
);

export default PersonalDetails;
