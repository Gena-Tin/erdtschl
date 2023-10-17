import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    // тут действия при отправке формы
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="agreement">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            You must agree to the terms and conditions.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
