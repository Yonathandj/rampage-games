import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

import "./Recommendation.css";

const RecommendationItem = ({ loading, error, games }) => {
  return (
    <div className="mx-auto w-3/4 pt-2">
      <section className="grid grid-cols-4 gap-y-4">
        {games.map((game) => (
          <div key={game.id} className="font w-52 h-96 p-4">
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
          </div>
        ))}
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
