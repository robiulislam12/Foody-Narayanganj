import React, { useState } from "react";
import { Row } from "react-bootstrap";
import food1 from "../assets/food1.png";
import food2 from "../assets/Group-1.png";

export default function HeroSection() {

  const [foodBanner, setFoodBanner] = useState('')

  const handleSubmit = e =>{
    e.preventDefault();
  }

  const handleImgClick = e =>{
    setFoodBanner(e.target.src)
  }

  return (
    <Row>
      <div className="col-md-6">
        <div className="search">
            <div>
                <h5>My Location, <b><span style={{color: "#1DBF73"}} >Narayanganj</span></b></h5>
                <form onSubmit={handleSubmit} className="d-flex">
                  <input className="form-control w-75 p-2" type="text" name="text" id="" placeholder="Search..."/>
                  <input className="btn btn-success py-2 px-4" type="submit" value="Search" />
                </form>
                <Row>
                  <h1>Our Best Food for you</h1>
                  <div onClick={handleImgClick} className="col-md-2 col-sm-6">
                      <img style={{cursor: 'pointer'}} src={food1} alt="" className="rounded-circle" />
                  </div>
                  <div onClick={handleImgClick} className="col-md-2 col-sm-6">
                      <img style={{cursor: 'pointer'}} src={food2} alt="" className="rounded-circle" />
                  </div>
                  <div onClick={handleImgClick} className="col-md-2 col-sm-6">
                      <img style={{cursor: 'pointer'}} src={food1} alt="" className="rounded-circle" />
                  </div>
                  <div onClick={handleImgClick} className="col-md-2 col-sm-6">
                      <img style={{cursor: 'pointer'}} src={food2} alt="" className="rounded-circle" />
                  </div>
                  <div onClick={handleImgClick} className="col-md-2 col-sm-6">
                      <img style={{cursor: 'pointer'}} src={food1} alt="" className="rounded-circle" />
                  </div>
                  <div onClick={handleImgClick} className="col-md-2 col-sm-6">
                      <img style={{cursor: 'pointer'}} src={food2} alt="" className="rounded-circle" />
                  </div>
                </Row>
                <Row>
                  <div className="bg-light rounded" >
                    <h1>Hello elemntor</h1>
                  </div>
                </Row>
            </div>
        </div>
      </div>
      <div className="col-md-6">
        <img src={foodBanner || food2} alt="" />
      </div>
    </Row>
  );
}
