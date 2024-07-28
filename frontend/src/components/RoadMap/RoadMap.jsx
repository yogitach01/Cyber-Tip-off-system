import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


import RoadMapSvg from "./RoadMapSvg";

function RoadMap() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
       <RoadMapSvg/>

       
      </Container>
    </Container>
  );
}

export default RoadMap;
