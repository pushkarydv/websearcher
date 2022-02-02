export default function Faq() {
  return (
    <>
      <div className="px-4 md:px-12 py-12 flex flex-col md:flex-row justify-center align-center">
        <div className="basis-1/3 p-4 md:p-16 lg:p-24 text-3xl md:text-5xl text-neutral-300">
          Frequently Asked Questions
        </div>
        <div className="basis-2/3 p-4">
          {[
            [
              "Do i need to fill all sections",
              "No it's not mandatory to fill all sections. But the more data you provide, chances of your website rank in search engine will increase.",
            ],
            [
              "Site Cards",
              "These tags will help in creating beautiful site cards when someone shares your website on any social media. ",
            ],
            [
              "which tags are generated",
              "Normal meta tags, og tags and twitter tags",
            ],
          ].map(([ques, ans]) => (
            <>
              <div className="ques text-lg font-medium capitalize text-slate-100 pt-6">
                {ques}
              </div>
              <div className="text-slate-300 pt-1">{ans}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
