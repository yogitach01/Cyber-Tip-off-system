import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import { addTip } from "../../service/api";
import Audio from "./Audio";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Complaint = () => {
  const [validated, setValidated] = React.useState(false);
  const [longitude,setlongitude]=React.useState('');
  const [latitude,setlatitude]=React.useState('');
  const navigate=useNavigate();
  console.log(localStorage.getItem("secure_score"));
  console.log(localStorage.getItem("secure_user"));
  console.log(localStorage.getItem("secure_email"));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    

    localStorage.setItem("secure_location","latiude:"+ latitude + " longitude: " + longitude);
    localStorage.setItem("secure_title",event.target[2].value);
    localStorage.setItem("secure_des",event.target[3].value);
    localStorage.setItem("secure_time",event.target[4].value);
    localStorage.setItem("secure_typeofcrime",event.target[5].value);
    navigate("/survey",{replace:true});
    setValidated(true);
  };
  
function success(pos) {
  var crd = pos.coords;
  setlatitude(crd.latitude);
  setlongitude(crd.longitude);

  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors);
          } else if (result.state === "denied") {
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  },[]);

  return (
    <Container fluid className="signup " style={{marginTop:'10rem'}} >
    <h1 className="signup-heading">
      Tip<strong className="purple"> Off</strong>
    </h1>
    <Form
      noValidate
      validated={validated}
      className="signup-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Form.Group hidden className="mb-3" controlId="formBasicPassword">
        <Form.Control required type="text" placeholder="ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  hidden required type="text" placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control required type="text" placeholder="Report Title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Report Description"
        />
      </Form.Group>
      
      <br></br>
      <Form.Group controlId="Reported On">
        <Form.Control
          type="date"
          name="Reported On"
          placeholder="Reported On"
        />
      </Form.Group><br></br>
      <Form.Control as="select" aria-label="Select type of Crime">
       <option value="Type of Crime"> Type of Crime</option>
          <option value="Theft/Larceny">Theft/Larceny
          </option>
          <option value="Vandalism">Vandalism</option>
          <option value="Natural disaster">Natural Disaster</option>
          
          <option value="Criminal Trespass">Criminal Trespass</option>
          <option value="Mischief/Criminal Nuisance">Mischief/Criminal Nuisance</option>
          <option value="Alcohol Offenses"> Alcohol Offenses</option>
          <option value="Disorderly conduct"> Disorderly Conduct</option>
          <option value="Possession of Drug">Possession of Drug</option>
          <option value="Public Misconduct">Public Misconduct</option>
          <option value="Traffic Violiations" >Traffic Violiations</option>
          <option value="Mental Harassment">Mental Harassment</option>
          <option value="Physical Harassment">Physical Harassment</option>
          <option value="False Reporting">False Reporting</option>
          <option value="Loitering">Loitering</option>
          <option value="Posession of a Weapon">Posession of a Weapon</option>
          <option value="Posession of Stealing Property">Posession of Stealing Property</option>
          <option value="Domestic Violence">Domestic Violence</option>
          <option value="others">Others</option>
        </Form.Control>
      <br></br>
      <Form.Group controlId="formFile" className="mb-3">
     
        <Form.Control type="file" placeholder="Attach image" />
      </Form.Group>
      <br></br>
      
      <Button  type="submit" style={{backgroundColor:'grey', width: "100%" }}>
        Submit
      </Button>

      <br/><br/>
    </Form>
  </Container>
  );
};

export default Complaint;
