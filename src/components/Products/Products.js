import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
       fetch("https://polar-atoll-56726.herokuapp.com/products")
         .then((res) => res.json())
         .then((data) => setProducts(data));
     }, []);
     console.log(products);
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Quick Pick
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-amber-400  sm:text-4xl md:mx-auto">
            Popular Goods
          </h2>
        </div>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          {products.map((item) => (
            <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
              <div className="relative w-full h-48">
                <img
                  src={item.img}
                  className="object-cover w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p className="text-sm text-gray-900">{item.description}</p>
                  <div className="mt-1 mb-4 mr-1 text-3xl sm:text-5xl">
                    ${item.price}
                  </div>
                </div>
                <Link to={`/bookorder/${item._id}`}>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-amber-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Click To Buy
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Products;