import { useState } from "react";
import Code from "../components/Code";
import CopyTags from "../components/CopyTags";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Create() {
  const [webData, setWebData] = useState({
    name: "",
    url: "",
    description: "",
    keywords: "",
    author: "",
    banner: "",
  });

  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-zinc-800 text-white">
        <Navbar />
        <div className="px-4 py-8 pt-24">
          <div className="text-center text-4xl text-slate-200">
            Let's Create Now
          </div>
          <div className="px-4 py-8 flex justify-center">
            <form className="w-full lg:max-w-4xl">
              <label className="block">
                <span className="block text-lg text-slate-200">
                  Website Title
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="ws-input"
                  onChange={(e) =>
                    setWebData({ ...webData, name: e.target.value })
                  }
                />
              </label>
              <label className="block pt-4">
                <span className="block text-lg text-slate-200">
                  Website URL
                </span>
                <input
                  type="text"
                  placeholder="https://yourwebsite.com"
                  className="ws-input"
                  onChange={(e) =>
                    setWebData({ ...webData, url: e.target.value })
                  }
                />
              </label>
              <label className="block pt-4">
                <span className="block text-lg text-slate-200">
                  Description
                </span>
                <input
                  type="text"
                  placeholder="A small explanation of what your do. (suggested: 25 words)"
                  className="ws-input"
                  onChange={(e) =>
                    setWebData({ ...webData, description: e.target.value })
                  }
                />
              </label>
              <label className="block pt-4">
                <span className="block text-lg text-slate-200">Keywords</span>
                <input
                  type="text"
                  placeholder="Keyword1, Keyword2, and more seprated by comma"
                  className="ws-input"
                  onChange={(e) =>
                    setWebData({ ...webData, keywords: e.target.value })
                  }
                />
              </label>
              <label className="block pt-4">
                <span className="block text-lg text-slate-200">Author</span>
                <input
                  type="text"
                  placeholder="Author Name"
                  className="ws-input"
                  onChange={(e) =>
                    setWebData({ ...webData, author: e.target.value })
                  }
                />
              </label>
              <label className="block pt-4">
                <span className="block text-lg text-slate-200">
                  Website Banner Image URL
                </span>
                <input
                  type="text"
                  placeholder="https://yourwebsite.com/banner.png"
                  className="ws-input"
                  onChange={(e) =>
                    setWebData({ ...webData, banner: e.target.value })
                  }
                />
              </label>
            </form>
          </div>
          <div className="text-center text-2xl py-3 text-slate-300">
            Completed form , And it's done... Scroll and Copy 😁
          </div>
          <div className="p-2 m-2 mt-12 text-slate-50 border-2 md:border-4 border-dashed  border-slate-600 rounded-lg w-full lg:max-w-4xl xl:max-w-5xl ml-auto mr-auto">
            <CopyTags
              name={webData.name}
              author={webData.author}
              url={webData.url}
              description={webData.description}
              banner={webData.banner}
              keywords={webData.keywords}
            />
            <br />
            <code className="text-lg md:text-xl">
              <Code
                name={webData.name}
                author={webData.author}
                url={webData.url}
                description={webData.description}
                banner={webData.banner}
                keywords={webData.keywords}
              />
            </code>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
