import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialLink from "../components/SocialLink";
export default function About() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-zinc-800 text-white">
        <Navbar />
        <div className="text-xl py-32 px-6 md:px-12 lg:px-24">
          <div className="text-center">Heyy...</div>
          <div className="text-slate-300 pt-6">
            This tool is dedicated to make use of meta tags easy. You dont need
            to write all meta tags one by one in your page just go to create
            section of this websearcher, write that little data you are asked to
            and woah they are generated. Press copy and paste directly into Head
            of your Amazing Projects.
          </div>
          <div className="text-center mt-8">
            Explore more of my projects at my{" "}
            <a
              href="https://github.com/pushkarydv"
              className="no-underline text-teal-300"
            >
              Github
            </a>
          </div>
          <div className="text-center mt-4">
            {" "}
            <SocialLink to="https://instagram.com/pushkaryadav_">
              Instagram
            </SocialLink>
            <SocialLink to="https://twitter.com/pushkaryadav_">
              Twitter
            </SocialLink>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
