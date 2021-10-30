import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "../../Styles/AddNewProduct.css";

export default function AddNewProduct() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://blooming-falls-29149.herokuapp.com/addNewProduct", data).then((res) => {
      if (res.data.insertedId) {
        alert("Food Added Successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div className="add-form py-5">
        <h2 className="text-center fw-bold">Add a New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
          <input {...register("title")} placeholder="Product title" required />
          <textarea
            {...register("description")}
            placeholder="Add description"
            required
          />
          <input
            type="number"
            {...register("price")}
            placeholder="Add price"
            required
          />
          <input
            type="number"
            {...register("rating")}
            placeholder="Add Rating"
            required
          />
          <input {...register("image")} placeholder="Add image url" required />
          <input
            className="btn btn-success"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
}
