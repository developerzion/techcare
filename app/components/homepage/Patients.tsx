import React from "react";
import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Loader from "../shared/Loader";

interface IProps {
   patients: any[];
   loading: boolean;
   selectionHandler: (currentPatient: any) => void;
   patient: any;
}

const Patients = ({ patients, loading, patient: currentPatient, selectionHandler }: IProps) => {
   if (loading)
      return (
         <div className="w-[25%]">
            <Loader />
         </div>
      );

   return (
      <div className="bg-white w-[25%] rounded-xl max-h-[62rem] overflow-y-scroll relative">
         <div className="bg-white flex items-center justify-between p-[1rem]">
            <h2 className="text-[18px] font-[600]">Patients</h2>
            <MagnifyingGlassIcon className="w-[20px] cursor-pointer" />
         </div>
         <div className="mt-2 flex flex-col">
            {patients.map((patient) => {
               const { name, gender, age, profile_picture } = patient;
               return (
                  <div
                     className={`flex items-center  justify-between cursor-pointer hover:bg-[#D8FCF7] p-[1rem] ${
                        currentPatient.name === name && "bg-[#D8FCF7]"
                     }`}
                     key={name}
                     onClick={() => selectionHandler(patient)}
                  >
                     <div className="flex gap-3 items-center">
                        <Image
                           src={profile_picture}
                           alt="jose"
                           width={35}
                           height={35}
                           className="min-w-[44px] min-h-[44px]"
                        />
                        <div>
                           <h3 className="text-[15px] font-[600]">{name}</h3>
                           <p className="text-[14px] font-[300] text-[#707070] -mt-[.3px]">{`${gender},  ${age}`}</p>
                        </div>
                     </div>
                     <EllipsisHorizontalIcon className="w-[23px] cursor-pointer" />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Patients;
