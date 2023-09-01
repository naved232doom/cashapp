import React from "react";
import CubeBottomLeft from "../../svgs/CubeBottomLeft.png";
import CubeUpperLeft from "../../svgs/CubeUpperLeft.png";
import PillarBottomRight from "../../svgs/PillarBottomRight.png";
import StairsUpperRight from "../../svgs/StairsUpperRight.png";

const Container = () => {
  return (
    <div className="z-1">
      {" "}
      <div className="absolute md:w-[188px] md:h-[176px] md:left-[200px] w-[100px] left-[50px] md:bottom-10 bottom-[100px] z-1 ">
        <img src={CubeBottomLeft} alt="Cube Bottom Left"></img>
      </div>
      <div className="absolute w-[74px] h-[73px] md:left-[200px] top-[10%] left-[30px]">
        <img src={CubeUpperLeft} alt="Cube Bottom Left"></img>
      </div>
      <div className="absolute w-[90px] md:w-[200px] md:right-[20%] top-[5%] right-[20px]">
        <img src={StairsUpperRight} alt="Cube Bottom Left"></img>
      </div>
      <div className="absolute w-[100px]  md:w-[280px] md:right-[25%] right-[10px] bottom-0">
        <img src={PillarBottomRight} alt="Cube Bottom Left"></img>
      </div>
    </div>
  );
};

export default Container;
