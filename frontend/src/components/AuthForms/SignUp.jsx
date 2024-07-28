import React,{useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import {addUser} from "../../service/api.js";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css"
import { addTip } from '../../service/api.js';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect } from 'react';

const SignUp = () => {
  const navigate=useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyB2vMHppeMqXBOdgSaKc6XcM4crAvK-8co",
    authDomain: "cyber-tipline.firebaseapp.com",
    projectId: "cyber-tipline",
    storageBucket: "cyber-tipline.appspot.com",
    messagingSenderId: "194539163570",
    appId: "1:194539163570:web:5978568b458a303baa1eab",
    measurementId: "G-34RJF7LNKC"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  useEffect(()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container", {
          size: "invisible",
          callback: function(response) {
              console.log("Captcha Resolved");
          },
          defaultCountry: "IN",
      }
  );
  });
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;
    auth
        .signInWithPhoneNumber(phone_number, appVerifier)
        .then((confirmationResult) => {
            console.log("otp sent");
            localStorage.setItem('secure_phone',phone_number);
            setViewOtpForm(true);
            window.confirmationResult = confirmationResult;
          
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    const otpSubmit = (e) => {
      e.preventDefault();
  
      let opt_number = e.target.otp_value.value;
  
      window.confirmationResult
          .confirm(opt_number)
          .then(async(confirmationResult) => {
              console.log(confirmationResult);
              const fe={
                contact:localStorage.getItem('secure_phone'),
                score:localStorage.getItem('secure_score'),
                
                location:localStorage.getItem("secure_location"),
          
                title:localStorage.getItem("secure_title"),
                desc:localStorage.getItem("secure_des"),
                time:localStorage.getItem("secure_time"),
                typeofcrime:localStorage.getItem("secure_typeofcrime"),
              }; 
              console.log(fe);
              await addTip(fe);
              window.alert("tip submitted successfully");
              
              navigate("/",{replace:true});
              
          })
          .catch((error) => {
              // User couldn't sign in (bad verification code?)
              alert(error.message);
          });
  };
  return (
    <div className="wrapper">
      <h1 className="main-heading">Enter Your Mobile Number.</h1>
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>Phone Number(Enter Country Code India:+91)</label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Submit Tip
            </button>
          </form>
        </div>
      ) : (
        <div className="form-wrapper" onSubmit={otpSubmit}>
          <form id="otpForm">
            <div className="input-field">
              <label>Enter OTP</label>
              <input
                type="number"
                placeholder="One time password"
                name="otp_value"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;