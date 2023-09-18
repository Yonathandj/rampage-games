import axios from "axios";
import { useState, useEffect } from "react";

import { Button, Pagination } from "flowbite-react";

import ShopItem from "./ShopItem";

import "./Shop.css";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(false);

  const [renderedGames, setRenderedGames] = useState(4);
  const gamesToRender = games.slice(0, renderedGames);
  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_API_KEY
          }&page=${currentPage}`
        );
        setGames(response.data.results);
      } catch (err) {
        setError(true);
        console.log(err.message);
      } finally {
        setLoading(false);
        setShowPagination(true);
      }
    };
    const intervalForLoading = setTimeout(() => {
      getGames();
    }, 2000);
    return () => {
      setError(false);
      setGames([]);
      setShowPagination(false);
      clearInterval(intervalForLoading);
    };
  }, [currentPage]);

  return (
    <div
      className={`font ${
        loading ? "h-screen" : "h-full"
      } bg-zinc-950 pt-16 px-32`}
    >
      <h2 className="mt-6 mb-4 text-center text-4xl font-semibold text-slate-200">
        List of Games
      </h2>
      <ShopItem loading={loading} error={error} games={gamesToRender} />
      {renderedGames !== 20 && showPagination && (
        <Button
          className="mt-4"
          onClick={() => {
            renderedGames === 20 ? "" : setRenderedGames(renderedGames + 4);
          }}
        >
          Load More
        </Button>
      )}
      {showPagination && (
        <Pagination
          className="mt-4 pb-2"
          currentPage={currentPage}
          onPageChange={(page) => {
            setRenderedGames(4);
            setCurrentPage(page);
          }}
          totalPages={100}
        />
      )}
    </div>
  );
};

export default Shop;
