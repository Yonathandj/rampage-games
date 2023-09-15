import { FaStar } from "react-icons/fa";

import "./Recommendation.css";
import React from "react";

const RecommendationSkeleton = () => {
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
        <div key={skeleton.id} className="font w-52 h-96 p-4">
          <img
            src={skeleton.background_image}
            alt={skeleton.name}
            className="h-3/4 object-cover"
          />
          <p className="mt-1 text-sm font-semibold text-slate-600">Base Game</p>
          <h2 className="text-base font-medium text-slate-200 mt-1">
            {skeleton.name}
          </h2>
          <section className="flex items-center gap-2 mt-2">
            <FaStar size={20} className="text-yellow-400" />
            <h4 className="rounded-md px-2 p-1 text-base bg-sky-800 text-slate-200">
              {skeleton.rating}
            </h4>
          </section>
        </div>
      ))}
    </React.Fragment>
  );
};

export default RecommendationSkeleton;
