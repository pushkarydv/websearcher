export default function Features() {
  return (
    <>
      <div className="px-2 my-24">
        <div className="text-center text-teal-500 text-2xl md:text-3xl ">
          <span className="underline decoration-wavy text-teal-500">
            Features
          </span>
          <br />
          <div className="text-3xl md:text-4xl font-medium mt-4">
            Don't Worry, we got you everything you need for a better SEO
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 px-2 md:px-6 lg:px-24 xl:px-48 text-lg mt-8 md:mt-16 text-slate-100">
          <div>
            <div className="text-teal-300 font-medium text-xl pt-4">
              Meta Data
            </div>
            <div>
              Generate amazing metadata which can be read by search engines and
              web crawlers
            </div>
          </div>
          <div>
            <div className="text-teal-300 font-medium text-xl pt-4">SEO</div>
            <div>
              Get your app top rank in search just by providing simple and
              relative data
            </div>
          </div>
          <div>
            <div className="text-teal-300 font-medium text-xl pt-4">
              Beautiful Site cards
            </div>
            <div>
              Get auto generated site cards when someone shares your website on
              any platform
            </div>
          </div>
          <div>
            <div className="text-teal-300 font-medium text-xl pt-4">
              Support
            </div>
            <div>
              These tags are supported by all browsers. and the Cards are
              supported by platforms like Whatsapp, Twitter, Facebook,
              Instagram, Discord and a lot more
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
