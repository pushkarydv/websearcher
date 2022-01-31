export default function App() {
  return (
    <>
      <div className="px-8 py-4 bg-cyan-50 h-screen flex flex-col justify-center items-center">
        <div className="py-8 mt-3  px-8  max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 h-auto w-full">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://raw.githubusercontent.com/pushkarydv/images/main/profile/profile200.jpg"
            alt="Pushkar Yadav"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">Pushkar Yadav</p>
              <p className="text-slate-500 font-medium">Frontend Engineer</p>
            </div>
            <button className="px-4 py-1 text-sm text-orange-600 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>
        <div className="py-8 mt-3 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 h-auto w-full">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://raw.githubusercontent.com/pushkarydv/images/main/profile/profile200.jpg"
            alt="Pushkar Yadav"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">Pushkar Yadav</p>
              <p className="text-slate-500 font-medium">Spammer 😎😎</p>
            </div>
            <button className="px-4 py-1 text-sm text-orange-600 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
              Message 😁
            </button>
          </div>
        </div>
        <div className="py-8 mt-3 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-xl space-y-2 sm:py-4  sm:space-y-0 sm:space-x-6 h-auto w-full">
          <blockquote className="text-2xl font-semibold italic text-center">
            When you look{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500  relative inline-block">
              <span className="relative text-white">annoyed</span>
            </span>{" "}
            all the time people think you are busy
          </blockquote>
        </div>
      </div>
    </>
  );
}
