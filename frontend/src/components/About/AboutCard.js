import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
          Online public grievance redressal system,that empowers the Users by giving them the unique opportunity to address their complaints and grievances related to multiple Government departments. For the first time, a real-time interactive map for the people of India to report crimes and sort records.</p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
