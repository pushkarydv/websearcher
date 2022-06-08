import SocialLink from "./SocialLink";
export default function OpenSource() {
  return (
    <>
      <div className="px-4 md:px-12 py-8 flex flex-col md:flex-row justify-center items-center">
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
        <div className="basis-1/3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full p-6 md:p-8 "
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      </div>
    </>
  );
}
