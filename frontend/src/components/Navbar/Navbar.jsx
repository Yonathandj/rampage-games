import { FaPaw, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./Navbar.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = ({ cart }) => {
  const [search, setSearch] = useState("");
  const [game, setGame] = useState([]);

  function handleSearchGame(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const searchGame = async () => {
      try {
        if (search !== "") {
          const response = await axios.get(
            `https://api.rawg.io/api/games?search=${search}&page_size=4&key=${
              import.meta.env.VITE_API_KEY
            }`
          );
          setGame(response.data.results);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const timeForLoading = setTimeout(() => {
      searchGame();
    }, 200);
    return () => {
      clearTimeout(timeForLoading);
      setGame([]);
    };
  }, [search]);

  return (
    <nav className="font fixed w-full z-10 flex items-center justify-between px-8 py-2 shadow-lg bg-zinc-800">
      <section className="flex items-center gap-20">
        <section className="flex items-center gap-4 text-slate-200">
          <Link to="/" className="hover:text-slate-300">
            <FaPaw size={50} className="cursor-pointer" />
          </Link>
          <input
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={handleSearchGame}
            placeholder="Search games"
            className="p-2 bg-transparent border-b outline-none"
          />
        </section>
        <section className="flex gap-4 text-slate-200">
          <Link to="/" className="hover:text-slate-300">
            Discover
          </Link>
          <Link to="games" className="hover:text-slate-300">
            Shop
          </Link>
        </section>
      </section>
      <section>
        {cart.length > 0 && (
          <span className="text-base relative top-2 left-7 p-1 rounded-2xl text-slate-200 bg-sky-600">
            {cart.length}
          </span>
        )}
        <Link to="cart">
          {" "}
          <FaCartArrowDown
            size={25}
            className="text-slate-200 cursor-pointer"
          />
        </Link>
      </section>
      {search !== "" && (
        <div className="absolute top-20 left-10">
          {game.map((x) => (
            <Link key={x.id} to={`games/${x.id}`} onClick={() => setSearch("")}>
              <section className="rounded-sm flex items-center gap-6 mt-2 p-2 bg-zinc-700">
                <img
                  src={x.background_image}
                  alt={x.name}
                  width={100}
                  height={50}
                />
                <h2 className="text-base font-medium tracking-wide text-slate-200">
                  {x.name}
                </h2>
              </section>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array,
};

export default Navbar;
