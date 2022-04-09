import React from "react";
import Faqs from "../Faqs/Faqs";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-black">
        <div
          id="parent-div"
          className="flex flex-col md:flex-row container mx-auto py-16"
        >
          <div id="hero-left" className="my-10 px-5">
            <div>
              <h1 className="font-bold text-white text-6xl">
                Express <br />
                <span className="	text-yellow-400 ">Home Delivery</span>
              </h1>
            </div>
            <div>
              <p className="text-white font-semibold my-5">
                Food is for eating, and good food is to be enjoyed... We think
                food is, actually, very beautiful in itself.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Read More
              </button>
            </div>
          </div>
          <div id="hero-right" className="md:flex-row">
            <img
              className=" w-4/5"
              src="https://i.ibb.co/RD3t3XQ/slider-courier-mask.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Products></Products>
      <h1 className="text-3xl font-semibold text-center my-4">Testimonial</h1>
      <Testimonial></Testimonial>
      <Faqs></Faqs>
      <h1 className="text-3xl font-semibold text-center my-4">OUR GALLERY</h1>
      <Gallery></Gallery>
      <NewsLetter></NewsLetter>
    </section>
  );
};

export default Home;
