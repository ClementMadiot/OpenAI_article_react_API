import React from "react";
import Nav from "../nav/Nav";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Nav/>
      <h1 className="text-5xl font-extrabold leading-[1.15] mt-5 sm:text-6xl text-center">Summarize Article with <br />
      <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">OpenAI GPT-4</span>
      </h1>
    </header>
  );
}

export default Hero;
