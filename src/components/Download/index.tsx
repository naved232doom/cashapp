import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface DownloadProps {
  icon?: IconType;
  label: string;
}

const Download: React.FC<DownloadProps> = ({ icon: Icon, label }) => {
  return (
    <div className="h-[50px] w-[170px]  border-white border-[1px] rounded-[7px] flex justify-center items-center cursor-pointer  z-5">
      <div>
        {" "}
        {Icon && (
          <div className="text-[#00D54B]">
            <div className="text-[22px]">
              <Icon />
            </div>
          </div>
        )}{" "}
      </div>
      <div className="text-white text-xs  font-bold ml-2 tracking-[0.5px]">
        {label}
      </div>
    </div>
  );
};

export default Download;
