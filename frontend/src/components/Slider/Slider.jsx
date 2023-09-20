import { Carousel } from "flowbite-react";
import PropTypes from "prop-types";

import "./Slider.css";

const Slider = ({ loading, error, games }) => {
  const renderedItems = games.slice(0, 4);
  return (
    <div className="w-full p-8">
      <Carousel className="mx-auto  h-[400px] :w-[400px] sm:h-[400px] sm:w-[600px] lg:h-[500px] lg:w-[800px]">
        {loading || error ? (
          <img
            src="https://placehold.co/600x400"
            alt="Wait for a moment or try again"
          />
        ) : (
          renderedItems.map((game) => (
            <div key={game.id} className="mt-2">
              <h2 className="font text-xl p-2 font-semibold tracking-wide text-center text-slate-200">
                {game.name}
              </h2>
              <img src={game.background_image} alt={game.name} />
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};

Slider.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  games: PropTypes.array,
};

export default Slider;
