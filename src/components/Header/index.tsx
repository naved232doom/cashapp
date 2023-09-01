import React from "react";
import "./Header.css";
import IntroPhone from "../../assets/IntroPhone.png";
import { ReactComponent as DownArrow } from "../../assets/DownArrow.svg";

const Header = () => {
  return (
    <div className="font-class text-white md:text-[193px] text-[60px] absolute md:top-[200px] top-[30%] left-[50%]">
      {" "}
      <div>
        <div className="flex justify-center mx-auto">
          <div className="absolute ">CASH</div>
          <div className="absolute md:w-[370px] md:h-[453px] w-[100px] top-[50px]  z-2">
            <img src={IntroPhone} alt="Intro Phone"></img>
          </div>
          <div className=" absolute z-3 md:top-[200px] top-[70px]">APP</div>
          <div className="absolute md:top-[450px] top-[250px] z-6 cursor-pointer">
            {" "}
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
