import React from "react";
import { ReactComponent as Dollar } from "../../assets/Dollar.svg";
import { ReactComponent as EyeIcon } from "../../assets/EyeIcon.svg";

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
const Navbar = () => {
  return (
    <div className="flex">
      <div className="ml-8 mt-4 md:scale-100 scale-50">
        <Dollar />
      </div>
      <div className="md:gap-5 gap-2 flex justify-center mx-auto mt-6">
        {NavbarLinks.map((link) => (
          <div className="font-bold md:text-xs text-[8px] cursor-pointer text-white">
            {link.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="mr-6 mt-4 md:scale-100 scale-20">
        <EyeIcon />
      </div>
    </div>
  );
};

export default Navbar;
