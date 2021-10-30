import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import useAuth from '../hooks/useAuth';

export default function SingleFood() {

    const [food, setFood] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const { id } = useParams();
    const history = useHistory()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/foods/${id}`)
      .then((res) => setFood(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/order", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully order send!");
        reset();
        history.push('/')
      }
    });
  };
  //Dynamic Title
  document.title = `${food.title} - Foody Narayanganj`;

  return (
    <div className="container">
      <Row md={2}>
        <Col>
          <img src={food.image} alt="" />
          <h1>{food.title}</h1>
          <h3>Price: ${food.price}</h3>
          <p>{food.description}</p>
        </Col>
        <Col>
          <div className="confirm-form py-5 ms-5">
            <h2 className="fw-bold">Confirm Order</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
              <input
                {...register("customer_name")}
                placeholder="Your Name"
                value={user.displayName}
                required
              />
              <input
                {...register("customer_email")}
                placeholder="Your email"
                value={user.email}
                required
              />
              <input
              type="number"
                {...register("customer_phone_number")}
                placeholder="Contact Number"
                required
              />
              <input
                {...register("product_name")}
                placeholder="Product title"
                value={food.title}
                required
              />
              <input
                {...register("price")}
                placeholder="Your food price"
                value={`$ ${food.price}`}
                required
              />
              <input type="text" name="" value={food.image} {...register("image")} />
              <textarea
                {...register("address")}
                placeholder="Your Address"
                required
              />
              
              <input
                className="btn btn-success"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
