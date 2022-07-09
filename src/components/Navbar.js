import { NavLink, Link } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  return (
    <nav className="px-5 py-3 text-2xl flex flex-row justify-between items-center relative backdrop-blur-md bg-neutral-800 bg-opacity-70 z-50 ">
      <div className="font-medium">
        <Link className="no-underline " to="/">
          Web Searcher
        </Link>
      </div>
      <div className="flex flex-row justify-between text-zinc-300">
        {[
          ["Home", "/"],
          ["Create", "/create"],
        ].map(([title, url]) => (
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "hidden"
                : "transition px-4 md:px-8 md:m-1 py-2 bg-teal-400 shadow text-slate-900 font-medium rounded-3xl hover:bg-teal-300";
            }}
            key={title}
            to={url}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
