import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row md={3} sm={1} className="row-style">
          <Col>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <h6>Quickest Food Delivery in Town</h6>
          </Col>
          <Col> 
            <h4>Quick Links</h4>
            <ul className="getIn">
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/manageOrder">Manage Order</Link></li>
            <li><Link to="/addNewProduct">Add New Product</Link></li>
            </ul>
          </Col>
          <Col>
            <h4>Get in touch</h4>
            <ul className="getIn">
                <li><Link to="#">Chasara, Narayanganj</Link></li>
                <li><Link to="#example@gmail.com">example@gmail.com</Link></li>
                <li><Link to="#">+880 1832-000000</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <h5>Connect With us</h5>
          <ul className="social-media">
            <li>
              <Link to="#facebook">Facebook</Link>
            </li>
            <li>
              <Link to="#twitter">Twitter</Link>
            </li>
            <li>
              <Link to="#instagram">Instagram</Link>
            </li>
            <li>
              <Link to="#linkedin">Linkedin</Link>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}
