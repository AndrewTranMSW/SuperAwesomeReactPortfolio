import React from "react";
import "../../styles/Projects.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Project 1</Card.Title>
      <Card.Text>
        Project 1 Description
      </Card.Text>
      <Button variant="primary">Click Here!</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Project 2</Card.Title>
      <Card.Text>
        Project 2 Description
      </Card.Text>
      <Button variant="primary">Click Here!</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Project 3</Card.Title>
      <Card.Text>
        Project 3 Description
      </Card.Text>
      <Button variant="primary">Click Here!</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Project 4</Card.Title>
      <Card.Text>
        Project 4 Description
      </Card.Text>
      <Button variant="primary">Click Here!</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Project 5</Card.Title>
      <Card.Text>
        Project 5 Description
      </Card.Text>
      <Button variant="primary">Click Here!</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>Project 6</Card.Title>
      <Card.Text>
        Project 6 Description
      </Card.Text>
      <Button variant="primary">Click Here!</Button>
    </Card.Body>
  </Card>
    </div>
  );
}

export default Projects;
