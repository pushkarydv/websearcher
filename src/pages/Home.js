import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-zinc-800 text-white ">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
