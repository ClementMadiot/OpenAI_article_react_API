import React, { useEffect, useState } from "react";
import { copied, loader, tick, IoArrowUndo, LuLink2 } from "../../assets";
import { useLazyGetSummaryQuery } from "../../services/article";

function Demo() {
  const [article, setarticle] = useState({
    url: "",
    summary: "",
  });
  const [copy, setCopy] = useState(false);

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("article")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      // create the result
      const newArticle = { ...article, summary: data.summary };
      // save the result
      const updateAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setarticle(newArticle);
      setAllArticles(updateAllArticles);
      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
      console.log(updateAllArticles);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopy(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopy(false), 3000);
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center text-gray-500 text-sm"
          onSubmit={handleSumbit}
        >
          <LuLink2 className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            placeholder="Enter a Url"
            value={article.url}
            onChange={(e) => setarticle({ ...article, url: e.target.value })}
            required
            className="block w-full rounded-md border border-gray-200 py-3 pl-10 pr-12 shadow-lg font-satoshi font-medium focus:border-gray-700  focus:outline-none focus:ring-0 transition-colors"
          />
          <button
            type="sumbite"
            className="absolute flex items-center justify-center inset-y-0 right-0 my-1.5 mr-1.5  w-10 border border-gray-200  hover:border-gray-700 hover:text-gray-700 rounded transition-colors"
          >
            <IoArrowUndo />
          </button>
        </form>

        {/* Browse URL History  */}
        <article className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setarticle(item)}
              className="relative flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg"
            >
              <div className="p-2 rounded-full bg-white/10  backdrop-blur flex justify-center items-center ">
                <div
                  className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-200 transition-colors shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer"
                  onClick={() => handleCopy(item.url)}
                >
                  <img
                    src={copy === item.url ? tick : copied}
                    alt={copy === item.url ? "tick_icon" : "copied_icon"}
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 ml-6 font-satoshi text-blue-700 hover:text-blue-900 font-medium text-sm truncate cursor-pointer">
                  {item.url}
                </p>
              </div>
            </div>
          ))}
        </article>
      </div>

      {/* Display Result  */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn&rsquo;t supposed to happen..
            <br />
            <span>{error?.data.error}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article{" "}
                <span className="font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Summary
                </span>
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
                {article.summary}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
