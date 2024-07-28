import React ,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col,InputGroup } from "react-bootstrap";
import { getUser } from '../../service/api';
import { useNavigate } from 'react-router-dom';

import "./SignUp.css"
const Login = () => {
  const navigate=useNavigate();
 
    const [validated, setValidated] = React.useState(false);
    const handleSubmit =async (event) => {
        event.preventDefault();
        const formData = {
          username : event.target[0].value,
          password : event.target[1].value,
        }

       
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        let dl=await getUser();
        let check=false;
        dl.map((d)=>{
          if(d.username==formData.username && d.password==formData.password){
            check=true;
            localStorage.setItem("secure_email",d.email);
            localStorage.setItem("secure_user",d.username);
            
          }
        })
        if(check){
          console.log("done");
          navigate('/complain',{replace:true});
        }
        setValidated(true);
      };

  return (
    
    <Container fluid className="signup"> 
 
    <h1 className="signup-heading">
   Login <strong className="purple"></strong>
    </h1>
    <Form noValidate validated={validated} className='signup-form' onSubmit={(e)=>{handleSubmit(e)}}>
    
   
    <Form.Group className="mb-3" controlId="formBasicUserName">

   
    <Form.Control   required type="text" placeholder="Username" />
   
  </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
     
      <Form.Control  required type="password" placeholder="Password" />
    </Form.Group>

   

   
    <Button variant="primary" type="submit" style={{width:"100%"}}>
      Submit
    </Button>
    <br></br>
    <br></br>
    <Button variant="primary" type="button" style={{width:"100%"}} onClick={()=>{window.location.href="/forgot"}}>
    Forgot Password
  </Button>
  </Form></Container>
  )
}

export default Login