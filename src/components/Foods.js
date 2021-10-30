import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("https://blooming-falls-29149.herokuapp.com/foods").then((res) => setFoods(res.data));
  }, []);
  
  return (
    <div>
      <Row md={3} className="g-3 my-4">
        {foods.map((food) => (
            <Col key={food.title}>
            <Card >
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <h3 className="text-bold">Price:${food.price}</h3>
                  </div>
                  <h6 className="text-bold">
                    Ratting: <b> {food.rating}</b>
                  </h6>
                </div>
                <Link to={`foods/${food._id}`}> 
                    <Button className="mt-2">Order Now</Button>
                </Link>
              </Card.Body>
            </Card>
            </Col>
        ))}
      </Row>
    </div>
  );
}
