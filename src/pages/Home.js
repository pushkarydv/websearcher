import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import OpenSource from "../components/OpenSource";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Socials />
      <OpenSource />
      <Faq />
      <Footer />
    </>
  );
}
