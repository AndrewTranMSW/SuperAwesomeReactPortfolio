import React from "react";
import "../../styles/Contact.css";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

function Contact() {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-white mb-4">
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary">Submit</Button>{" "}
            </Form>
          </div>
          <h6 className="col-lg-10 mx-auto text-white mb-4">
            {" "}
            Or simply e-mail me at{" "}
            <a href="mailto:andrewtranmsw@gmail.com">
              {" "}
              andrewtranmsw@gmail.com{" "}
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Contact;
