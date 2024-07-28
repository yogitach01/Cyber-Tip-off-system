import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <div style={{paddingBottom: "150px"}}>
    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",color:"white",marginTop:"5%" }}>
              Tech<strong className="purple">Stack</strong>
            </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1  style={{color:"yellow"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{color:"green"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{color:" #61dbfb"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color:"darkgreen"}} />
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
  </Col>*/}
    </Row>
    </div>
  );
}

export default Techstack;
