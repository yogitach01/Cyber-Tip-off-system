import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Section/Projects";
import Footer from "./components/Footer";
import ResetPassword from "./components/AuthForms/ResetPassword"


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/AuthForms/SignUp";
import Login from "./components/AuthForms/Login";
import Email2 from "./components/AuthForms/Email";
import SurveyForm from "./components/AuthForms/SurveyForm";
import Complaint from "./components/AuthForms/Complaint";

function App() {


  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div id="recaptcha-container"></div>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
         <Route path="/sign-up" element={<SignUp/>}/>
         <Route path="/survey" element={<SurveyForm />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/complain" element={<Complaint />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
