import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import homeLogo from "../../Assets/cybertipline.png";
import te from '../../Assets/te.jpg';
import Type from './Type'

import "../../style.css"
import About from "../About/About";
import Techstack from "../About/Techstack";

import Projects from "../Section/Projects";

function Home() {
  return (
    <div>
      <Container fluid className="home-section" id="home">
     
        <Container className="home-content">
          <Row style={{marginRight:"10px"}}>
            <Col md={7} className="home-header">

              <h1 className="heading-name" >
                
                <strong className="main-name"><h1>One Step towards National Security</h1></strong>
              </h1>
              <div className="text" >Platforms’ increased engagement with security and geopolitics has led to both internal organizational capacity building and greater voluntary cooperation with government national security agencies.</div>
            

              <div  className="action-box">
            <button onClick={()=>window.location.href="/complain"}>
              Enter Tip
            </button>
					</div>
            
              
             
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <br/><br/>  <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

        </Container>
        
      </Container>
    <Container>
      <center><h1>Protect Against Leading Crime</h1>
      <p>Enable National Security by "Providing Tipoff" system.</p>
      <br/><br/>
      <Row>
        <Col >
        <img style={{height:'50px',weight:'50px'}} src="https://img.icons8.com/ios-filled/50/000000/data-encryption.png"/>
        <br/>
       <br/> <h2>End-to-End Encryption</h2>
        <p>Data between Tiper and Authoritiy are end-to-end encrypted no third party can access data easily.</p>
        </Col>
        <Col>
        <img style={{height:'50px',weight:'50px'}}  src="https://img.icons8.com/ios-filled/50/000000/test-failed.png"/>
        <br/><br/>
        <h2>Score Generation For Tip</h2>
        <p>Score is generated based on Survey form and gives priority to Tips</p>
        </Col>
        <Col>
        <img style={{height:'50px',weight:'50px'}} src="https://img.icons8.com/glyph-neue/64/000000/user-location.png"/>
        <br/><br/><h2>Near by Authoritiy</h2>
        <p>Get Information About near  by Authoritiy and Contact Number to connect Nation easily.</p>
        </Col>
      </Row>
      </center><br/><br/>
    </Container>
   <div style={{backgroundColor:'grey'}}><br/><br/>
    <Container>
      <Row>
        <Col style={{color:'white'}}>
        <h1><b>1000+</b></h1>
        <p> Active Tipers</p>
        </Col>
        <Col style={{color:'white'}}>
        <h1><b>100k+</b></h1>
        <p> Successfull Tips</p>
        </Col>
        <Col style={{color:'white'}}>
        <h1><b>100+</b></h1>
        <p> Authoritiy</p>
        </Col>
      </Row>
    </Container><br/><br/>
   </div>
   <br/>
   <div><br/>
    <h1>Type of Tips</h1>

    <br/><br/>
    <Container>
      <Row>
        <Col>
        <img
                src={te}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
        </Col>
        <Col style={{textAlign:'left',fontSize:'1.5rem'}}>
        <ul><li>
          Natural Disaster</li>
          <li>Alcohol Offense</li>
          <li>Loitering</li>
          <li>Domestic Violence</li>
          <li>Mental/Physical Harrasment</li>
          <li>etc..</li></ul>
        </Col>
      </Row>
    </Container>
   </div>
    </div>
  );
}

export default Home;
