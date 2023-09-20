import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Recommendation.css";
import RecommendationSkeleton from "./RecommendationSkeleton";

const RecommendationItem = ({ loading, error, games }) => {
  return (
    <div className="w-full">
      <section className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {loading || error ? (
          <RecommendationSkeleton />
        ) : (
          games.map((game) => (
            <div key={game.id} className="font w-52 h-96">
              <Link to={`games/${game.id}`}>
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="h-3/4 object-cover"
                />
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Base Game
                </p>
                <h2 className="text-base font-medium text-slate-200 mt-1">
                  {game.name}
                </h2>
                <section className="flex items-center gap-2 mt-2">
                  <FaStar size={20} className="text-yellow-400" />
                  <h4 className="rounded-md px-2 p-1 text-base bg-sky-800 text-slate-200">
                    {game.rating}
                  </h4>
                </section>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

RecommendationItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  games: PropTypes.array,
};

export default RecommendationItem;
