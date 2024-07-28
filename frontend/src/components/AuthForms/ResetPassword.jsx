import React from 'react'
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col,InputGroup } from "react-bootstrap";
import "./SignUp.css"
const Login = () => {
    const [validated, setValidated] = React.useState(false);
    const [pass, setPass] = React.useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
    
        setValidated(true);
      };
  return (
    
    <Container fluid className="signup"> 
 
    <h1 className="signup-heading">
   Set New <strong className="purple">Password</strong>
    </h1>
    <Form noValidate validated={validated} className='signup-form' onSubmit={(e)=>{handleSubmit(e)}}>
    
   
    <Form.Group className="mb-3" controlId="formBasicPassword">
     
      <Form.Control required minLength={8}  pattern={"[a-zA-Z]+[^a-zA-Z\s]+"} value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="New Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
     
      <Form.Control required type="password" pattern={pass} placeholder=" Confirm Password" />
    </Form.Group>

   

   
    <Button variant="primary" type="submit" style={{width:"100%"}}>
      Submit
    </Button>
    
  </Form></Container>
  )
}

export default Login