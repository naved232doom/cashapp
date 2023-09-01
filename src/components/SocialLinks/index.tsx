import React from "react";
import { ReactComponent as Twitter } from "../../svgs/Twitter.svg";
import { ReactComponent as Hangouts } from "../../svgs/Hangouts.svg";
import { ReactComponent as Instagram } from "../../svgs/Instagram.svg";

const SocialLinks = () => {
  return (
    <div className="md:absolute flex text-white md:gap-8 gap-5 md:bottom-5 bottom-2 md:right-10 right-5">
      <div className="cursor-pointer ">
        <Hangouts />
      </div>
      <div className="cursor-pointer ">
        <Twitter />
      </div>
      <div className="cursor-pointer ">
        <Instagram />
      </div>
    </div>
  );
};

export default SocialLinks;
