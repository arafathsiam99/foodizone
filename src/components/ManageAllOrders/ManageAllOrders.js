import React, { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [allProducts, setAllProdcuts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("https://polar-atoll-56726.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProdcuts(data));
  }, [isDeleted]);

  const handleDeleteProdcuts = (id) => {
    const confirm = window.confirm("Are you want to delete this products?");
    console.log(id);
    if (confirm) {
      fetch(`https://polar-atoll-56726.herokuapp.com/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    fetch(`https://polar-atoll-56726.herokuapp.com/confirmOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsDeleted(!isDeleted);
          alert("confirmed success");
        } else {
          setIsDeleted(false);
        }
      });
  };
  console.log(allProducts);
  return (
    <div className="container py-8 mx-auto">
      <h2 className="text-center text-3xl font-semibold my-4">
        Prodcuts Booked by all customers
      </h2>
      <div>
        <div className="grid grid-cols-3">
          {allProducts.map((single) => (
            <div className="mt-5 shadow mx-3 p-4 text-center">
              <img src={single.packageImg} alt="" />
              <h1 className="text-2xl font-medium text-black font-mono">
                {single.packageName}
              </h1>
              <p className="custom-top">Date:{single.Date}</p>
              <p>{single.status}</p>
              <span>
                <button
                  onClick={() => handleConfirm(single._id)}
                  className="focus:outline-none bg-green-600 text-white hover:bg-green-500 focus:ring-4 focus:ring-green-300  px-4 py-2 my-2  mx-2 font-medium rounded-lg dark:focus:ring-green-800"
                >
                  Confirm
                </button>
              </span>
              <button
                onClick={() => handleDeleteProdcuts(single._id)}
                className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300   px-4 py-2 my-2 font-medium rounded-lg mx-2"
              >
                Cancel
                <i className="far fa-trash-alt ms-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAllProducts;
