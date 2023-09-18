import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

import { Card } from "flowbite-react";
import ShopSkeleton from "./ShopSkeleton";

const ShopItem = ({ loading, error, games }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {loading || error ? (
        <ShopSkeleton />
      ) : (
        games.map((game) => (
          <Card key={game.id} imgAlt={game.name} imgSrc={game.background_image}>
            <Link to={`${game.id}`}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <p>{game.name}</p>
              </h5>
            </Link>
            <div className="mb-5 mt-2.5 flex items-center">
              <FaStar size={25} className="text-yellow-600" />
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                <p>{game.rating}</p>
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
        ))
      )}
    </div>
  );
};

ShopItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  games: PropTypes.array,
};

export default ShopItem;
