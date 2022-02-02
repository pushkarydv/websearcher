export default function Socials() {
  return (
    <>
      <div className="px-4 md:px-12 py-12 flex flex-col md:flex-row justify-center align-center">
        <div className="basis-2/3 p-4 md:p-16 lg:p-24 text-center">
          <div className="text-teal-300 text-5xl">Socials</div>
          <br />
          <SocialLink to="https://instagram.com/pushkaryadav_">
            Instagram
          </SocialLink>
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
function SocialLink({ to, children }) {
  return (
    <div className="inline-block w-fit  transition  px-4 py-2 text-3xl border-2 border-teal-400 text-teal-400 rounded-2xl hover:bg-teal-500 hover:border-teal-500 hover:text-white hover:scale-90 my-3 mx-2">
      <a href={to} className="no-underline">
        {children}
      </a>
    </div>
  );
}
