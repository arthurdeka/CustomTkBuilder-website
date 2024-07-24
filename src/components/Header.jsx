import React from "react";
import { default as CoffeImg } from "../assets/Coffe.png";
import { default as GithubImg } from "../assets/Github.png";
import { default as YoutubeImg } from "../assets/Youtube.png";

function Header() {
  return (
    <header className="px-6 flex flex-row items-center justify-between text-corprimaria text-left w-full border-b-2 border-cyan-700 bg-gray-900">
      <a href="/" link="/">
        <h1 className="pt-2 text-2xl font-bold font-inter">
          Custom Tk Builder
        </h1>
        <h6 className="pb-2 my-auto text-xs font-bold font-inter">
          Toolkit
        </h6>
      </a>
      <div>
        <a target="_blank" href="https://www.youtube.com/@arthurcodes/featured">
          <img src={YoutubeImg} width={178} className=" m-2 object-contain rounded-md inline-block border-slate-600 border-2" />
        </a>
        <a target="_blank" href="https://github.com/arthurdeka/CustomTkinter-Templates">
          <img src={GithubImg} width={178} className=" m-2 object-contain rounded-md inline-block border-violet-500 border-2" />
        </a>
        <a target="_blank" href="https://ko-fi.com/arthurcodes">
          <img src={CoffeImg} width={180} className=" m-2 object-contain rounded-md inline-block" />
        </a>
      </div>

    </header>
  );
}

export default Header;
