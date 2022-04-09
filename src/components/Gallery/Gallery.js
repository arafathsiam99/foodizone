import React from 'react';

const Gallery = () => {
    return (
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 container">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/TbmvkV9/food-delivery-man-with-boxes-with-food-1303-27721.webp"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-coolGray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/6YKnsxg/medium-shot-delivery-man-holding-bag-23-2149038938.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/pnJJy4w/courier-with-delivery-cardboard-box-by-car-1303-28502.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/jby0KmC/front-view-young-male-courier-red-uniform-holding-delivery-food-yellow-background-179666-36959.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/3NqRcCD/front-view-male-courier-blue-uniform-with-little-food-package-blue-179666-33020.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/9c81Q3V/front-view-female-cook-rolling-out-dough-dark-pastry-job-raw-dough-hotcake-bakery-pie-oven-179666-43.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/TB5B6Kq/smiling-pretty-delivery-woman-uniform-stands-sideways-holding-food-package-containers-pizza-boxes-14.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/94wW4RJ/pizza-time-concept-positive-male-office-worker-entrpreneur-suit-holds-big-piece-pizza-raises-palm-ha.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
            src="https://i.ibb.co/VV7dWVW/brazilian-latin-american-girl-afro-hair-yellow-background-eating-biting-delicious-mini-pizza-pizza-m.jpg"
          />
          <img
            src="https://i.ibb.co/ss0SngX/illustration-pizza-place-53876-43651.webp"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500 aspect-square"
          />
        </div>
      </section>
    );
};

export default Gallery;