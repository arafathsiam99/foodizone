import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase/useFirebase";
import useAuth from "../../Hooks/useFirebase/useAuth";
const BookOrder = () => {
  const { user } = useFirebase();
  // const{user}=useAuth();
  const { id } = useParams();
  const [item, setItem] = useState({});

  const {
    register,
    handleSubmit,
  formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.packageName = item?.name;
    data.packageImg = item?.img;
    data.status = "Pending";
    console.log(item?.name);

    fetch("https://polar-atoll-56726.herokuapp.com/placeorders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  
  useEffect(() => {
    fetch(`https://polar-atoll-56726.herokuapp.com/placebooking/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  console.log(item);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center  font-semibold text-yellow-700 my-8">
        Book This Product
      </h1>

      <div className="flex justify-center shadow-md w-3/4 mx-auto p-12">
        <div className="">
          <h2 className="text-4xl my-6 text-yellow-400">{item?.name}</h2>
          <img className="w-1/2" src={item?.img} alt="" />
          <p>{item?.description}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user?.displayName}
              className="p-2 m-2 border-2 rounded"
              {...register("name")}
              placeholder="user Name"
            />
            <br />
            <input
              defaultValue={user?.email}
              className="p-2 m-2"
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <br />
            <input
              className="p-2 m-2"
              {...register("address")}
              placeholder="Address"
            />
            <br />
            <input
              className="p-2 m-2"
              type="Date"
              {...register("Date", { required: true })}
              placeholder="Date"
            />

            {errors.exampleRequired && <span>This field is required</span>}
            <br />

            <input
              className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookOrder;