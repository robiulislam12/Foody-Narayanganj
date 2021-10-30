import React from "react";
import { Row } from "react-bootstrap";
import Card2 from '../assets/card-2.png';
import Card1 from '../assets/card.png';
import heroImg from '../assets/herobg.png';

export default function HeroSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Row className="py-5">
      <div className="col-md-6">
        <h1 className="fw-bold hero-title">
        Quickest <span>Food Delivery</span> in Town
        </h1>
        <p>We will deliver your food within 30 minutes in your town,If we would fail,we will give the food free.</p>
        <div className="search">
          <div>
            <h5>
              Your Location,{" "}
              <b>
                <span style={{ color: "#1DBF73" }}>Narayanganj</span>
              </b>
            </h5>
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                className="form-control w-75 p-3"
                type="text"
                name="text"
                id=""
                placeholder="Search..."
              />
              <input
                className="btn btn-success py-2 px-4"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
        <div className="recently py-4">
          <h6 className="text-gray">Recently Pre Orders</h6>
          <div className="flex-style">
            <img src={Card1} className="m-1" alt="" />
            <img src={Card2} className="m-1" alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <img className="img-fluid hero-bg" src={heroImg} alt="" />
      </div>
    </Row>
  );
}
