import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhatitMeans from "./WhatitMeans";



import privacy from "../../Assets/privacy.svg";
import quick from "../../Assets/quick.svg";
import community from "../../Assets/community.svg";




function Projects() {
  return (
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
        What it <strong className="purple">means</strong>
        </h1>
        <p style={{ color: "white" }}>
         
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
          <WhatitMeans
          imgPath={privacy}
          isBlog={false}
          title="Safety & Privacy"
          
        />
          </Col>

          <Col md={4} className="project-card">
            <WhatitMeans
              imgPath={quick}
              isBlog={false}
              title="Quick Action And Response"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <WhatitMeans
              imgPath={community}
              isBlog={false}
              title="A Thriving Community"
                        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
