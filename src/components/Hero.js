import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="pl-6 md:pl-12 pr-8 pt-32 pb-10 md:pt-44 md:pb-6 text-4xl md:text-7xl xl:pl-20 xl:pb-10 text-slate-50">
        Rank your awesome app on top in search
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="basis-2/3 pl-6 md:pl-12 py-8  text-5xl md:text-6xl text-slate-300 xl:pl-20 xl:text-7xl xl:pb-14 xl:pt-24 pb-16">
          Generate{" "}
          <span className="text-emerald-500 border-dashed border-b-4 border-emerald-600 typer">
            <span className="md:hidden">
              <br />
            </span>
            <Typewriter
              words={["Meta Tags", "Beautiful Cards", "Top Rank"]}
              loop={0}
              cursor
              cursorStyle="&#10148;"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={1100}
            />
          </span>
          <div className=" text-slate-50 pl-4 mt-14">
            <button className="transition rounded text-3xl px-4 py-2 bg-teal-400 text-gray-800 shadow-lg shadow-teal-800 hover:bg-teal-300 hover:-translate-y-1 hover:scale-110">
              <Link to="/create">Generate Tags &#10148;</Link>
            </button>
          </div>
        </div>

        <div className="basis-1/3">
          <img src="/images/team.svg" className="w-max p-4" alt="" />
        </div>
      </div>
    </>
  );
}
