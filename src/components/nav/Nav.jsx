import React from "react";
import { logo } from "../../assets";

function Nav() {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-4">
      <img src={logo} alt="OpenIA logo" className="w-28 object-contain" />

      <button className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black" type="button"
      onClick={() => window.open("https://github.com/ClementMadiot/OpenAI_article_react_API")}
      >
        Github
      </button>
    </nav>
  );
}

export default Nav;
