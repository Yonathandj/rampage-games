import { FaPaw, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./Navbar.css";

const Navbar = ({ cart }) => {
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
    </nav>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array,
};

export default Navbar;
