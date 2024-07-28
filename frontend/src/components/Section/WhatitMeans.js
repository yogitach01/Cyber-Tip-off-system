import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
const WhatitMeans = (props) => {
  return (
    <div> <Card className="project-card-view">
    <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
    
    </Card.Body>
  </Card></div>
  )
}

export default WhatitMeans