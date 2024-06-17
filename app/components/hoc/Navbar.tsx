import React from "react";
import { LogoSvg } from "../utils/svg";
import { TNavbar, navbar } from "../utils/data";
import Link from "next/link";
import Image from "next/image";
import { Cog6ToothIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
   return (
      <div className="flex items-center justify-between">
         <LogoSvg styles={{ width: "180px" }} />
         <div className="flex items-center gap-3">
            {navbar.map((nav: TNavbar) => {
               const { name, link, active, icon: Icon } = nav;
               return (
                  <Link
                     href={link}
                     key={name}
                     className={`text-[14px] font-[400] h-[41px] min-w-[122px] leading-[41px] text-center rounded-[41px] flex justify-center items-center gap-2 hover:bg-[#01F0D0] px-5 ${
                        active ? "bg-[#01F0D0]" : "bg-white"
                     }`}
                  >
                     <Icon className="w-5" />
                     {name}
                  </Link>
               );
            })}
         </div>
         <div className="flex items-center">
            <div className="flex gap-3 items-center border-r-[1px] pr-4">
               <Image
                  src="/images/jose-simmons.png"
                  alt="jose"
                  width={44}
                  height={44}
                  className="min-w-[44px] min-h-[44px]"
               />
               <div>
                  <h3 className="text-[14px] font-[500]">Dr. Jose Simmons</h3>
                  <p className="text-[13px] font-[300] text-[#707070] -mt-[.4px]">General Practitioner</p>
               </div>
            </div>

            <div className="pl-4 flex items-center">
                <Cog6ToothIcon className="w-[23px] cursor-pointer" />
                <EllipsisVerticalIcon className="w-[23px] cursor-pointer" />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
