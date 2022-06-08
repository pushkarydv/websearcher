import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center py-6 lg:py-12">
        <div className="basis-2/3 md:pl-12 py-6  text-5xl text-slate-300 xl:text-6xl 2xl:text-7xl xl:pb-14 xl:pt-24 pb-16">
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Let&apos;s rank your app
          </div>
          <div className="mt-4 text-2xl md:text-3xl lg:text-4xl font-base">
            Generate{" "}
            <span className="text-emerald-500 typer">
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
                delaySpeed={1200}
              />{" "}
            </span>
          </div>

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
