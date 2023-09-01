import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Download from "./components/Download";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import BottomText from "./components/BottomText";
import SocialLinks from "./components/SocialLinks";
import CubeBottomLeft from "../src/svgs/CubeBottomLeft.png";
import Hamburger from "./components/Hamburger";
import { RxCrossCircled } from "react-icons/rx";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Menu = () => (
    <div className="h-screen ">
      <div className="text-white text-2xl">Hello</div>
    </div>
  );
  const NavbarLinks = [
    "Sign in",
    "legal",
    "licenses",
    "security",
    "careers",
    "press",
    "support",
    "status",
    "codeblog",
  ];
  if (isOpen) {
    return (
      <div className="h-screen flex-col mx-auto text-center relative transition-all duration-200 ease-linear">
        <div
          className="text-white text-[24px] absolute top-[-20px] left-5"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <RxCrossCircled />
        </div>
        <div className="flex-col justify-center mx-auto mt-10">
          {NavbarLinks.map((link) => (
            <div className="font-bold  cursor-pointer text-white my-6">
              {link.toUpperCase()}
            </div>
          ))}
          div
        </div>
      </div>
    );
  }
  return (
    <div className="App h-screen ">
      <div className="h-screen relative">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div
          className="md:hidden transition-all duration-200 ease-linear"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Hamburger />
        </div>
        <Header />
        <div className="">
          <Container />
        </div>
        <div className="hidden md:block">
          <div className="absolute md:bottom-14 bottom-2 z-3 flex">
            <Download label={"APP STORE"} icon={AiFillApple} />
            div
          </div>
          <div className="absolute md:bottom-14 z-3 bottom-2 flex md:left-[200px] left-[100px]">
            <Download label={"GOOGLE PLAY"} icon={FaGooglePlay} />
          </div>
          <BottomText />
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:hidden flex-col mx-auto ">
          <div className="my-6 mx-auto flex justify-center">
            <Download label={"APP STORE"} icon={AiFillApple} />
          </div>
          <div className=" my-6 mx-auto flex justify-center">
            <Download label={"GOOGLE PLAY"} icon={FaGooglePlay} />
          </div>
          <div className="mx-auto flex justify-center py-6">
            <BottomText />
          </div>
          <div className="mx-auto flex justify-center my-6 py-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
