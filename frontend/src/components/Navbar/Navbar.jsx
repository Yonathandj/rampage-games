import { FaPaw, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="font flex items-center justify-between px-8 py-2 shadow-lg bg-zinc-800">
      <section className="flex items-center gap-20">
        <section className="flex items-center gap-4 text-slate-200">
          <FaPaw size={50} className="cursor-pointer" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search games"
            className="p-2 bg-transparent border-b outline-none"
          />
        </section>
        <section className="flex gap-4 text-slate-200">
          <Link className="hover:text-slate-300">Discover</Link>
          <Link className="hover:text-slate-300">Shop</Link>
        </section>
      </section>
      <section>
        <FaCartArrowDown size={25} className="text-slate-200 cursor-pointer" />
      </section>
    </nav>
  );
};

export default Navbar;
