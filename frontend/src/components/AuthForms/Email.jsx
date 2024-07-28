import React from 'react'
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col,InputGroup } from "react-bootstrap";
import { resetpassword ,getUser} from '../../service/api';
import emailjs from "emailjs-com";
import "./SignUp.css"

const Email2 = () => {
    const [validated, setValidated] = React.useState(false);
    const [username,setusername]=React.useState("");
    const [password,setpassword]=React.useState("");
    const handleSubmit =async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        let email=event.target[0].value;
        let dl=await getUser();
        let check=false;
        dl.map((d)=>{
          if(d.email==email){
            check=true;
            setpassword( d.password);
           setusername( d.username);
          }
        })

        const data={
          email:email,
          password:password,
          username:username,
        }
        if(check){
        await emailjs.sendForm("service_uh7q6qp", "template_8fz9pu9",event.target, "Oh5uaFYgY9F9bdvfY")
            .then((result) => { window.alert("check your mail .")}, (error) => {
              console.log(error.text);
          }); }else{
            window.alert("no user found");
          }
        setValidated(true);
      };
  return (
    <Container fluid className="signup"> 
    <h1 className="signup-heading">
   Enter your<strong className="purple"> email</strong>
    </h1>
    <Form noValidate validated={validated} className='signup-form' onSubmit={(e)=>{handleSubmit(e)}}>
    <Form.Group className="mb-3" >
      <Form.Control required name="email" id="email" type="email" placeholder="Enter your email" />
      <Form.Control name="username" id="username" value={username} type="hidden" placeholder="Enter your email" />
      <Form.Control name="password" id="password" value={password} type="hidden" placeholder="Enter your email" />
    </Form.Group>
    <Button variant="primary" type="submit" style={{width:"100%"}}>
      Submit
    </Button>
  </Form></Container>
  )
}

export default Email2