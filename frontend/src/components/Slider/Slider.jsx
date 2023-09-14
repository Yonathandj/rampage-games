import { useEffect, useState } from "react";
import axios from "axios";

import { Carousel } from "flowbite-react";

import "./Slider.css";

const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_API_KEY
          }&page=5&page_size=4`
        );
        setGames(response.data.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getGames();
    return setGames([]), setError(false);
  }, []);

  return (
    <Carousel className="mx-auto h-[500px] w-[800px]">
      {loading || error ? (
        <img src="https://placehold.co/600x400" alt="" />
      ) : (
        games.map((game) => (
          <div key={game.id}>
            <h2 className="font text-2xl p-2 font-semibold tracking-wide text-center text-slate-200">
              {game.name}
            </h2>
            <img src={game.background_image} alt={game.name} />
          </div>
        ))
      )}
    </Carousel>
  );
};

export default Slider;
