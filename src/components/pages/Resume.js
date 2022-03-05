import React from "react";
import "../../styles/Resume.css";
import { Card, Button } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>

    <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Resume</Card.Title>
      <Card.Text>
        Please click the button below to download my resume.
      </Card.Text>
      <Button variant="primary"><a href="www.google.com">Click Here!</a></Button>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Resume;
