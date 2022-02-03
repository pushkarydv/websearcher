import SocialLink from "./SocialLink";
export default function OpenSource() {
  return (
    <>
      <div className="px-4 md:px-12 py-8 flex flex-col md:flex-row justify-center align-center">
        <div className="basis-2/3 p-4 md:p-16 lg:p-24">
          <div className="text-teal-300 text-5xl md:text-6xl lg:text-7xl">
            We are open source
          </div>
          <div className="pt-2 text-2xl text-slate-400">
            Yes you heard right, this website is open source and you can find
            code of this website on GitHub. You can request a feature,
            contribute to project by adding feedbacks and mentioning bugs if
            they exist. Licensed under GPL-3.0 ©pushkarydv
          </div>

          <br />
          <SocialLink to="https://github.com/pushkarydv/websearcher">
            Visit Github
          </SocialLink>
        </div>
        <div className="basis-1/3 scale-50 md:scale-75 lg:scale-90">
          <img
            src="/images/github.svg"
            className="w-full p-12 md:p-24 animate-[pulse_3s_ease-in-out_infinite]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
