import React,{useState,useContext}  from "react";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import { checkscore } from "../../service/api";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { addTip } from "../../service/api";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useNavigate } from "react-router-dom";
const SurveyForm = () => {
  const [validated, setValidated] = React.useState(false);
  const [score,setScore]=useState(0); 
  const navigate=useNavigate();
  const [open,setOpen]=useState(false);
  const skiptip=()=>{
    localStorage.setItem("secure_score",'Notgiven');
    navigate("/sign-up",{replace:true});
  }
  const handleSubmit =async (event) => {
    event.preventDefault();
    
    const formData={
        no1:event.target[0].value,
        no2:event.target[1].value,
        no3:event.target[2].value,
        no4:event.target[3].value,
        no5:event.target[4].value,
        no6:event.target[5].value,
    };
    if(event.target[0].value=="Yes"){
      formData.no1="0"
    }else if(event.target[0].value=="No"){
      formData.no1="1"
    }else{
      window.alert("enter proper value");
      return;
    }
    if(event.target[1].value=="Yes"){
      formData.no2="0"
    }else if(event.target[1].value=="No"){
      formData.no2="1"
    }
    else{
      window.alert("enter proper value");
      return;
    }
    if(event.target[2].value=="Yes"){
      formData.no3="0"
    }else if(event.target[2].value=="No"){
      formData.no3="1"
    }
    else{
      window.alert("enter proper value");
      return;
    }
    if(event.target[3].value=="Yes"){
      formData.no4="0"
    }else if(event.target[3].value=="No"){
      formData.no4="1"
    }else{
      window.alert("enter proper value");
      return;
    }
    if(event.target[4].value=="Yes"){
      formData.no5="0"
    }else if(event.target[4].value=="No"){
      formData.no5="1"
    }
    else{
      window.alert("enter proper value");
      return;
    }
    if(event.target[5].value=="Yes"){
      formData.no6="0"
    }else if(event.target[5].value=="No"){
      formData.no6="1"
    }else{
      window.alert("enter proper value");
      return;
    }
    let dl=await checkscore(formData);
    setScore(dl);

    localStorage.setItem("secure_score",dl*1000/600);


  /*    const fe={
      email:localStorage.getItem("secure_email"),
      username:localStorage.getItem("secure_user"),
      score:Math.ceil(dl*10/6),
      
      location:localStorage.getItem("secure_location"),

      title:localStorage.getItem("secure_title"),
      desc:localStorage.getItem("secure_des"),
      auth:localStorage.getItem("secure_auth"),
      time:localStorage.getItem("secure_time"),
      typeofcrime:localStorage.getItem("secure_typeofcrime"),
    }; 
    console.log(fe);
    await addTip(fe);
    window.alert("tip submitted successfully");
   */
    navigate("/sign-up",{replace:true});
    setValidated(true);
  };
  return (
    <Container fluid className="signup" style={{marginTop:'10rem'}}>
      <h1 className="signup-heading">
        <strong className="purple">Survey</strong>
      </h1>
      <Form
        noValidate
        validated={validated}
        className="signup-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Text className="text-muted" >
          Do you ever feel concerned for human rights?
        </Form.Text>
        <Form.Control as="select" >
       <option value="Yes"> Yes</option>
     <option value="No"> No</option>
     </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Text className="text-muted">
          Have you ever violated someone's right?
        </Form.Text>
          
        <Form.Control as="select" >
       <option value="Yes"> Yes</option>
     <option value="No">No</option>
     </Form.Control>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Text className="text-muted">
          Is Violence always best to stay safe?
        </Form.Text>
          
        <Form.Control as="select" >
       <option value="Yes"> Yes</option>
     <option value="No">No</option>
     </Form.Control>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Text className="text-muted">
          If a person acts in self-defense & accidentally hurts someone,should they be punished?(Enter Yes ,No)
        </Form.Text>
          
        <Form.Control as="select" >
       <option value="Yes"> Yes</option>
     <option value="No">No</option>
     </Form.Control>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Text className="text-muted">
        Do you think there sholud be more stricter laws for violent crimes?
        </Form.Text>
          
        <Form.Control as="select" >
       <option value="Yes"> Yes</option>
     <option value="No">No</option>
     </Form.Control>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Text className="text-muted">
        Do you ever wish to report any unreported crime in future?
        </Form.Text>
          
        <Form.Control as="select" >
       <option value="Yes"> Yes</option>
     <option value="No">No</option>
     </Form.Control>
        </Form.Group>
        <Button variant="" type="submit" style={{ backgroundColor:'grey',width: "100%" }} >
          Submit
        </Button ><br/><br/>
        OR
        <Button variant="" onClick={ skiptip()} style={{ backgroundColor:'grey',width: "100%" }} >
          Skip Survey
        </Button ><br/><br/>
        
      </Form>
      <Dialog open={open} onClose={()=>setOpen(false)}  height="300px" width="250px">
      <DialogTitle>Your Tip off Score is</DialogTitle>
       <DialogContent> 
      { Math.ceil( score*1000/600)}
        
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SurveyForm;
