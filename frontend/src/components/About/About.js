import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
           About    <strong className="purple"></strong>
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
            <Aboutcard />
          </Col>
          
        </Row>
        
       

       
      </Container>
    </Container>
  );
}

export default About;
