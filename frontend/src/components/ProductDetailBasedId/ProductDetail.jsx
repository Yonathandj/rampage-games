import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailItem from "./ProductDetailItem";

const ProductDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [game, setGame] = useState([]);

  useEffect(() => {
    const getGame = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setGame([response.data]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const timeForLoading = setTimeout(() => {
      getGame();
    }, 1000);

    return () => {
      setLoading(true);
      setError(false);
      clearTimeout(timeForLoading);
    };
  }, [id]);

  return (
    <div className="loading h-full bg-zinc-950">
      <div className="p-20">
        <ProductDetailItem loading={loading} error={error} game={game} />
      </div>
    </div>
  );
};

export default ProductDetail;
