import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-zinc-800 text-white ">
        <Navbar />
        <div className="pl-6 md:pl-12 pr-8 pt-32 pb-10 md:pt-36 md:pb-12 text-4xl md:text-6xl xl:pl-20 xl:pb-14">
          Rank your awesome app on top in search
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="basis-2/3 pl-6 md:pl-12 py-8  text-4xl md:text-6xl text-slate-300 xl:pl-20 xl:text-7xl xl:pb-14 xl:pt-32">
            Generate{" "}
            <span className="text-emerald-500 border-dashed border-b-4 border-emerald-600 typer">
              <span className="md:hidden">
                <br />
              </span>
              <Typewriter
                words={["Meta Tags", "Beautiful Cards", "Top Rank"]}
                loop={0}
                cursor
                cursorStyle="&gt;"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <div className=" text-slate-50 mt-14">
              <button className="rounded text-3xl px-4 py-2 bg-teal-400 text-gray-800 shadow-lg shadow-teal-800">
                <Link to="/create">Generate Tags &gt;</Link>
              </button>
            </div>
          </div>

          <div className="basis-1/3">
            <img src="/images/team.svg" className="w-max p-4" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
