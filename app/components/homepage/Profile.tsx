import React from "react";
import Loader from "../shared/Loader";
import Image from "next/image";
import { ArrowDownTrayIcon, CalendarIcon, PhoneIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

interface IProps {
   loading: boolean;
   patient: any;
}

const Profile = ({ loading, patient }: IProps) => {
   if (loading || !patient)
      return (
         <div className="w-[25%]">
            <Loader />
         </div>
      );

   const { profile_picture, name, date_of_birth, lab_results } = patient;

   return (
      <div className="w-[25%] h-fit">
         <div className="rounded-xl p-[1rem] pb-[2rem] bg-white">
            <div className="flex flex-col justify-center items-center gap-3">
               <Image
                  src={profile_picture}
                  alt="jose"
                  width={1000}
                  height={1000}
                  className="w-[200px] h-[200px]"
                  quality={100}
               />
               <h1 className="text-[20px] font-[600] text-[#072635]">{name}</h1>
            </div>

            <div className="mt-8 flex flex-col gap-6">
               <div className="flex gap-3 items-center">
                  <div className="bg-[#F6F7F8] p-3 rounded-full">
                     <CalendarIcon className="w-6" />
                  </div>
                  <div>
                     <p className="text-[13px] font-[300] text-[#707070]">Date of birth</p>
                     <p className="text-[14px] font-[500] mt-1">{date_of_birth}</p>
                  </div>
               </div>
               <div className="flex gap-3 items-center">
                  <div className="bg-[#F6F7F8] p-3 rounded-full">
                     <SparklesIcon className="w-6" />
                  </div>
                  <div>
                     <p className="text-[13px] font-[300] text-[#707070]">Gender</p>
                     <p className="text-[14px] font-[500] mt-1">{date_of_birth}</p>
                  </div>
               </div>
               <div className="flex gap-3 items-center">
                  <div className="bg-[#F6F7F8] p-3 rounded-full">
                     <PhoneIcon className="w-6" />
                  </div>
                  <div>
                     <p className="text-[13px] font-[300] text-[#707070]">Contact Info.</p>
                     <p className="text-[14px] font-[500] mt-1">{date_of_birth}</p>
                  </div>
               </div>
               <div className="flex gap-3 items-center">
                  <div className="bg-[#F6F7F8] p-3 rounded-full">
                     <PhoneIcon className="w-6" />
                  </div>
                  <div>
                     <p className="text-[13px] font-[300] text-[#707070]">Emergency Contacts</p>
                     <p className="text-[14px] font-[500] mt-1">{date_of_birth}</p>
                  </div>
               </div>
               <div className="flex gap-3 items-center">
                  <div className="bg-[#F6F7F8] p-3 rounded-full">
                     <ShieldCheckIcon className="w-6" />
                  </div>
                  <div>
                     <p className="text-[13px] font-[300] text-[#707070]">Insurance Provider</p>
                     <p className="text-[14px] font-[500] mt-1">{date_of_birth}</p>
                  </div>
               </div>
            </div>
            <div className="rounded-full py-[.8rem] px-[2rem] w-fit m-auto text-center mt-8 text-[14px] bg-[#01F0D0] font-[500]">
               Show All Information
            </div>
         </div>

         <div className="bg-white p-4 rounded-xl mt-6">
            <h1 className="font-[600] text-[18px]">Lab Results</h1>
            <div className="flex flex-col gap-5 mt-6">
               {lab_results.map((result: string, idx: number) => {
                  return (
                     <div className="flex text-[14px] justify-between items-center" key={idx}>
                        <span>{result}</span>
                        <ArrowDownTrayIcon className="w-5 cursor-pointer" />
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Profile;
