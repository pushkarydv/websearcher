import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="px-5 py-3   text-2xl flex flex-row justify-between items-center fixed top-0 left-0 w-full backdrop-blur-md bg-transparent">
      <div className="font-medium">
        <Link className="no-underline " to="/">
          Web Searcher
        </Link>
      </div>
      <div className=" hidden md:flex flex-row justify-between text-zinc-300">
        {[
          ["Home", "/"],
          ["Create", "/create"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "bg-zinc-700 no-underline hover:bg-gray-50 hover:text-zinc-800 rounded px-3 py-1 mx-2"
                : " no-underline hover:bg-gray-50 hover:text-zinc-800 rounded px-3 py-1 mx-2";
            }}
            key={title}
            to={url}
          >
            {title}
          </NavLink>
        ))}
      </div>
      <div className="relative z-50 md:hidden">
        <button
          className="bg-transparent border-none outline-none  focus:outline focus:outline-2 focus:outline-slate-600 rounded"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            height="32px"
            viewBox="0 0 32 32"
            width="32px"
            className="fill-white"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </button>
      </div>
      <div
        className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-40 bg-neutral-800 md:hidden gap-4 text-2xl text-teal-100"
        style={{ display: navOpen ? "flex" : "none" }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/create"}>Create</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
}
