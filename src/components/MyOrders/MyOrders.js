import React, { useEffect, useState } from "react";
import useFirebase from "../../Hooks/useFirebase/useFirebase";

const MyOrders = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useFirebase();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    fetch(`https://polar-atoll-56726.herokuapp.com/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .finally(() => setIsLoading(false));
  }, [user.email, isDeleted]);
  console.log(foods);

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you want to delete this product?");

    if (confirm) {
      fetch(`https://polar-atoll-56726.herokuapp.com/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
            alert("successfully Deleted");
          }
        });
    }
  };
  if (isLoading) {
    return <h1 className="my-5 text-center">Loading..........</h1>;
  }
  return (
    <div className="container py-8 mx-auto">
      <div className="text-center my-4">
        <h2>
          <span className="text-center text-2xl">Tour Booked by </span>
          <h1 className="text-3xl font-semibold text-yellow-700">
            {user?.displayName}
          </h1>
        </h2>
      </div>
      <div className="grid grid-cols-3">
        {foods.packageImg}
        {foods.map((single) => (
          <div className="mt-5 shadow mx-3 p-4 text-center">
            <img src={single.packageImg} alt="" />
            <h1 className="text-2xl font-medium text-black font-mono">
              {single.packageName}
            </h1>
            <div>
              <p className="text-2xl font-medium text-yellow-700">
                Status: {single.status}
              </p>
            </div>
            <button
              onClick={() => handleDelete(single._id)}
              className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 mx-2 my-2"
            >
              Cancel
              <i className="far fa-trash-alt ms-2 ml-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
