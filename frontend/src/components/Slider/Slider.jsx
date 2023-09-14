import { useEffect, useState } from "react";
import axios from "axios";

import { Carousel } from "flowbite-react";

const Slider = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_API_KEY
          }&page_size=4`
        );
        setGames(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
    return setGames([]);
  }, []);
  return <Carousel></Carousel>;
};

export default Slider;
