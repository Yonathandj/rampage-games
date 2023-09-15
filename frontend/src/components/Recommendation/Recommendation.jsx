import PropTypes from "prop-types";

import RecommendationItem from "./RecommendationItem";
import "./Recommendation.css";

const Recommendation = ({ loading, error, games }) => {
  const renderendItems = games.slice(4);
  return (
    <div className="py-8 px-24">
      <section className="font text-center">
        <h2 className="text-lg font-medium text-slate-200">
          Recommendation Games
        </h2>
      </section>
      <RecommendationItem
        loading={loading}
        error={error}
        games={renderendItems}
      />
    </div>
  );
};

Recommendation.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  games: PropTypes.array,
};

export default Recommendation;
