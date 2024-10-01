import React, { useEffect, useState } from "react";
import { copy, loader, tick, IoArrowUndo, LuLink2 } from "../../assets";
import { useLazyGetSummaryQuery } from "../../services/article";

function Demo() {
  const [article, setarticle] = useState({
    url: '',
    summary: ''
  })

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  const handleSumbit = async (e) => {
    e.preventDefault()
    const { data } = await getSummary({articleUrl: article.url})

    if(data?.summary) {
      const newArticle = {...article, summary: data.summary}
      setarticle(newArticle)
      console.log(newArticle)
    }
  }
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
      </div>

      {/* Display Result  */}
    </section>
  );
}

export default Demo;
