import axios from "axios";
import { useEffect, useState } from "react";

import Slider from "../Slider/Slider";
import Recommendation from "../Recommendation/Recommendation";

const Discover = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_API_KEY
          }&page=5&page_size=12`
        );
        setGames(response.data.results);
      } catch (err) {
        setError(true);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    const timeForLoading = setTimeout(() => {
      getGames();
    }, 500);
    return () => {
      setGames([]);
      setLoading(true);
      setError(false);
      clearTimeout(timeForLoading);
    };
  }, []);

  return (
    <div className="p-10 bg-zinc-950">
      <Slider loading={loading} error={error} games={games} />
      <Recommendation loading={loading} error={error} games={games} />
    </div>
  );
};

export default Discover;
