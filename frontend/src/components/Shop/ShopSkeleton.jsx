import { FaStar } from "react-icons/fa";
import { Card } from "flowbite-react";
import React from "react";
const ShopSkeleton = () => {
  const renderedSkeletons = [
    {
      id: 0,
      name: "Rampage Games",
      background_image: "https://placehold.co/400x400",
      rating: 4.6,
    },
    {
      id: 1,
      name: "Rampage Games",
      background_image: "https://placehold.co/400x400",
      rating: 4.6,
    },
    {
      id: 2,
      name: "Rampage Games",
      background_image: "https://placehold.co/400x400",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Rampage Games",
      background_image: "https://placehold.co/400x400",
      rating: 4.6,
    },
  ];
  return (
    <React.Fragment>
      {renderedSkeletons.map((skeleton) => (
        <Card
          key={skeleton.id}
          imgAlt={skeleton.name}
          imgSrc={skeleton.background_image}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <p>{skeleton.name}</p>
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <FaStar size={25} className="text-yellow-600" />
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              <p>{skeleton.rating}</p>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              <p>Add to cart</p>
            </a>
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default ShopSkeleton;
