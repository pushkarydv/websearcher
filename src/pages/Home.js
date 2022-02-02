import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-zinc-800 text-white ">
        <Navbar />
        <Hero />
        <Features />
        <Socials />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
