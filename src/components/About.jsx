import React from "react";
import { default as CoffeImg } from "../assets/Coffe.png";
import { default as GithubImg } from "../assets/Github.png";
import { default as YoutubeImg } from "../assets/Youtube.png";

function About() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
        <div className="px-6 w-2/3 flex font-inter flex-col items-center text-center justify-between text-white">
          <h1 className="font-inter font-semibold text-4xl lg:text-xl md:text-lg sm:text-base xs:text-sm">Olá</h1>
          <br />
          <br />
          <h2 className="font-inter font-bold text-2xl lg:text-lg md:text-sm sm:text-xs xs:text-[8px] text-emerald-400">
            So... What am I looking at here?
          </h2>
          <p className="font-inter text-lg lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px]">
            This is a website where you can just drag and drop widgets in a figma-like interface to customize them. Afterwards, you just gotta click
            Translate to Code and it will translate your interface to Tkinter Code (using customtkinter library)!
          </p>
          <br />
          <h2 className="font-inter font-bold text-2xl lg:text-lg md:text-sm sm:text-xs xs:text-[8px] text-emerald-400">
            What is the target audience?
          </h2>
          <p className="font-inter text-lg lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px]">
            As a wise man once said{" "}
            <a className="text-blue-300" target="_blank" href="https://www.youtube.com/watch?v=Vhh_GeBPOhs">
              DEVELOPERS DEVELOPERS DEVELOPERS!
            </a>{" "}
            To make your life easier when creating tkinter interfaces!
          </p>
          <br />
          <h2 className="font-inter font-bold text-2xl lg:text-lg md:text-sm sm:text-xs xs:text-[8px] text-emerald-400">
            What is the target audience?
          </h2>
          <p className="font-inter text-lg lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px]">
            I previously used a website called VisualTK to accomplish the same goal, but it is down since before I created this one.
          </p>
          <br />
          <h2 className="font-inter font-bold text-2xl lg:text-lg md:text-sm sm:text-xs xs:text-[8px] text-emerald-400">Extra</h2>
          <p className="font-inter text-lg lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px]">
            It doesn't really matter but I'm based in Minas Gerais.
            <br />
            If you want to advertise your project on this website contact me and I will disclose the analytics.
          </p>
          <br />
          <br />
          <h1 className="font-inter font-semibold text-4xl lg:text-xl md:text-lg sm:text-base xs:text-sm">Useful resources:</h1>
          <div>
            <a target="_blank" href="https://www.youtube.com/@arthurcodes/featured">
              <img
                src={YoutubeImg}
                alt="Youtube Tutorials"
                width={178}
                height={48}
                className="m-2 object-contain rounded-md inline-block border-slate-600 border-2"
              />
            </a>
            <a target="_blank" href="https://github.com/arthurdeka/CustomTkinter-Templates">
              <img
                src={GithubImg}
                alt="GitHub Repository"
                width={178}
                height={48}
                className="m-2 object-contain rounded-md inline-block border-violet-500 border-2"
              />
            </a>
            <a target="_blank" href="https://ko-fi.com/arthurcodes">
              <img src={CoffeImg} alt="Donate" width={180} height={45} className="m-2 object-contain rounded-md inline-block" />
            </a>
          </div>
          <h1 className="font-inter text-emerald-300 font-semibold text-xl lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px]">Contact:</h1>
          <h5 className="font-inter text-emerald-500 text-lg lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px]">deka.matrix@gmail.com</h5>
          <br />
          <br />
          <h1 className="font-inter font-semibold text-4xl lg:text-xl md:text-lg sm:text-base xs:text-sm">By Developers For Developers</h1>
        </div>
      </div>
    </>
  );
}

export default About;
