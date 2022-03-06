import React from "react";
import "../../styles/Projects.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Projects() {
  return (
    <div className="container-fluid d-flex justify-content-center mt-4 col-12 col-sm-4">
      <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>What's that Anime</Card.Title>
            <Button
              variant="primary"
              href="https://andrewtranmsw.github.io/whatsThatAnime/"
              target="_blank"
            >
              Deployed Link
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Seeded</Card.Title>
            <Button
              variant="primary"
              href="https://seed-ed.herokuapp.com/"
              target="_blank"
            >
              Deployed Link
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Work Day Scheduler</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/AndrewTranMSW/workDayScheduler"
              target="_blank"
            >
              Go to Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Team Profile Generator</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/AndrewTranMSW/teamProfileGenerator"
              target="_blank"
            >
              Go to Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Employee Tracker</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/AndrewTranMSW/employeeTracker"
              target="_blank"
            >
              Go to Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>README Generator</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/AndrewTranMSW/goodReadMeGenerator"
              target="_blank"
            >
              Go to Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
