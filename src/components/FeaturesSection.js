import React from "react";
import { Row } from "react-bootstrap";
import Burger from "../assets/burger.png";
import Chef from "../assets/chef.png";
import Clock from "../assets/clock.png";
import Dish from "../assets/dish.png";

export default function FeaturesSection() {
  return (
    <>
      <Row className="py-5 ">
          <h2 className="text-center subtitle">Our Features</h2>
        <div className="col-md-3 text-center features">
          <img src={Clock} alt="" />
          <h5 className="py-2">FAST DELIVERY</h5>
          <p>
            Everything you order at QuickFood will be quickly delivered to your
            door.
          </p>
        </div>
        <div className="col-md-3 text-center features">
          <img src={Burger} alt="" />
          <h5 className="py-2">FRESH FOOD</h5>
          <p>
            We use only the best ingredients to cook the tasty fresh food for
            you.
          </p>
        </div>
        <div className="col-md-3 text-center features">
          <img src={Chef} alt="" />
          <h5 className="py-2">EXPERIENCED CHEFS</h5>
          <p>Our staff consists of chefs and cooks with years of experience.</p>
        </div>
        <div className="col-md-3 text-center features">
          <img src={Dish} alt="" />
          <h5 className="py-2">A VARIETY OF DISHES</h5>
          <p>
            In our menu you’ll find a wide variety of dishes, desserts, and
            drinks.
          </p>
        </div>
      </Row>
    </>
  );
}
