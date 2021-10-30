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
      .get(`https://blooming-falls-29149.herokuapp.com/foods/${id}`)
      .then((res) => setFood(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const onSubmit = (data) => {
    axios.post("https://blooming-falls-29149.herokuapp.com/order", data).then((res) => {
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
          <div className="confirm-form py-5">
            <h2 className="fw-bold">Confirm Order</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
              <input
                {...register("customer_name", { required: true })}
                placeholder="Your Name"
                value={user.displayName}
              />
              <input
                {...register("customer_email",{ required: true })}
                placeholder="Your email"
                value={user.email}
              />
              <input
              type="number"
                {...register("customer_phone_number", { required: true })}
                placeholder="Contact Number"
              />
              <input
                {...register("product_name",{ required: true })}
                placeholder="Product title"
                value={food?.title}
              />
              <input
                {...register("price", { required: true })}
                placeholder="Your food price"
                value={`$ ${food?.price}`}
                required
              />
              <input type="text" name="" value={food?.image} {...register("image",{ required: true })} />
              <textarea
                {...register("address", { required: true })}
                placeholder="Your Address"
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
