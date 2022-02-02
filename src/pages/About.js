import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-zinc-800 text-white">
        <Navbar />
        <div className="text-xl text-center py-24 px-4 md:px-12 lg:px-24">
          This tool is dedicated to make use of these meta tags easy.{" "}
        </div>
        <Footer />
      </div>
    </>
  );
}
