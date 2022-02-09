import SocialLink from "./SocialLink";
export default function Socials() {
  return (
    <>
      <div className="px-4 md:px-12 py-8 flex flex-col md:flex-row justify-center align-center">
        <div className="basis-2/3 p-4 md:p-16 lg:p-24 text-center">
          <div className="text-teal-300 text-5xl">Socials</div>
          <div className="pt-4 pb-4 text-2xl text-slate-400">
            Connect on Twitter and GitHub to get notification about any new
            feature or get early access of some cool projects !
          </div>
          <SocialLink to="https://twitter.com/pushkaryadav_">
            Twitter
          </SocialLink>
          <SocialLink to="https://github.com/pushkarydv">Github</SocialLink>
        </div>
        <div className="basis-1/3 scale-50 md:scale-75 lg:scale-90">
          <img
            src="/images/socials.svg"
            className=" p-2 pt-24  animate-[bounce_4s_ease-in-out_infinite]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
