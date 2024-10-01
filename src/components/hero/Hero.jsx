import React from "react";
import Nav from "../nav/Nav";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Nav/>
      <h1 className="text-5xl font-extrabold leading-[1.15] mt-5 sm:text-6xl text-center">Summarize Article with <br className="max-md:hidden" />
      <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">OpenAI GPT-4</span>
      </h1>

      <h2 className="text-lg sm:text-xl text-center text-gray-700 mt-5 max-w-2xl ">Simplify your reading with Sumnize, an open-source article summarizer that transforms lenghty articles into clear and concise summaries</h2>
    </header>
  );
}

export default Hero;
