import { Row, Col, Form, Container } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikHandlers } from 'formik';

type StepProps = {
  errors: FormikErrors<FormikValues>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
};

const ContactDetails = ({ errors, values, handleChange }: StepProps) => (
  <Container>
    <h3 className="mb-4">Contact Details</h3>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="addressLine1">
        <Form.Label>Address Line1</Form.Label>
        <Form.Control
          type="text"
          name="addressLine1"
          value={values.addressLine1}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="addressLine2">
        <Form.Label>Address Line2</Form.Label>
        <Form.Control
          type="text"
          name="addressLine2"
          value={values.addressLine2}
          onChange={handleChange}
        />
      </Form.Group>
    </Row>
  </Container>
);

export default ContactDetails;
