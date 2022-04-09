import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://polar-atoll-56726.herokuapp.com/addproduct`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div className="bg-black">
      <div className="text-center">
        <h2 className="font-semibold text-yellow-400 text-3xl py-6">
          Add A New Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            {...register("name")}
            placeholder="Product Name"
          />
          <br />
          <input
            className="p-2 m-2"
            type="number"
            {...register("price", { required: true })}
            placeholder="price"
          />
          <br />
          <input
            className="p-2 m-2"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <br />
          <input
            className="p-2 m-2"
            {...register("img", { required: true })}
            placeholder="Image Link"
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />

            <input
              className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              type="submit"
            />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
