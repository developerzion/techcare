import React from "react";
import { RespiratorySvg, TemperatureSvg, HeartRateSvg } from "../utils/svg";
import Loader from "../shared/Loader";
import { Chart as ChartJS, LineElement, CategoryScale, PointElement, LinearScale, BarElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Tooltip);

interface IProps {
   loading: boolean;
   patient: any;
   chartData: any;
}

const Diagnosis = ({ loading, patient, chartData }: IProps) => {
   const diagnosticList = patient.diagnostic_list || [];

   if (loading) {
      return (
         <div className="w-[50%]">
            <Loader />
         </div>
      );
   }

   const options = {
      responsive: true,
      scales: {
         x: { title: { display: true, text: "" }, grid: { display: false } },
         y: { title: { display: true, text: "" } },
      },
      plugins: { tooltip: { enabled: true }, title: { display: true, text: "Hover tooltip" } },
   };

   return (
      <div className="w-[50%]">
         <div className="bg-white p-[1rem] rounded-xl">
            <h1 className="font-[600] text-[18px]">Diagnosis History</h1>
            <div className="bg-[#F4F0FE] rounded-xl p-4 mt-3 w-[100%] flex gap-8">
               <div className="w-[70%]">
                  <div className="text-[14px] mb-5 flex justify-between items-center">
                     <h1>Blood Pressure</h1>
                     <p className="flex items-center gap-1">
                        Last 6 months <ChevronDownIcon className="w-4" />
                     </p>
                  </div>
                  <Line data={chartData} options={options} />
               </div>
               <div className="w-[30%] text-[14px]">
                  <div className="border-b border-gray-300 pb-[1.2rem]">
                     <div className="flex items-center gap-3">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#E66FD2]" />
                        <span className="font-[500]">Systolic</span>
                     </div>
                     <h1 className="font-[600] text-[20px] mt-3">160</h1>
                     <p className="mt-2 flex items-center gap-1 text-[13px]">
                        <ChevronUpIcon className="w-4" /> Higher than average
                     </p>
                  </div>
                  <div className="pt-3">
                     <div className="flex items-center gap-3">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#8C6FE6]" />
                        <span className="font-[500]">Diastolic</span>
                     </div>
                     <h1 className="font-[600] text-[20px] mt-3">78</h1>
                     <p className="mt-2 flex items-center gap-1 text-[13px]">
                        <ChevronDownIcon className="w-4" /> Lower than average
                     </p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
               <div className="bg-[#E0F3FA] rounded-xl p-4">
                  <RespiratorySvg />
                  <p className="mt-4 font-[300] text-[14px]">Respiratory Rate</p>
                  <h2 className="font-[700] text-[25px]">20 bpm</h2>
                  <p className="font-[300] text-[14px] mt-2">Normal</p>
               </div>
               <div className="bg-[#FFE6E9] rounded-xl p-4">
                  <TemperatureSvg />
                  <p className="mt-4 font-[300] text-[14px]">Temperature</p>
                  <h2 className="font-[700] text-[25px]">
                     98.6<sup>o</sup> F
                  </h2>
                  <p className="font-[300] text-[14px] mt-2">Normal</p>
               </div>
               <div className="bg-[#FFE6F1] rounded-xl p-4">
                  <HeartRateSvg />
                  <p className="mt-4 font-[300] text-[14px]">Heart Rate</p>
                  <h2 className="font-[700] text-[25px]">78 bpm</h2>
                  <p className="font-[300] text-[14px] mt-2">Lower than average</p>
               </div>
            </div>
         </div>

         <div className="bg-white p-4 rounded-xl mt-6">
            <h1 className="font-[600] text-[18px]">Diagnostic list</h1>

            <table className="w-full mt-4 text-left">
               <thead>
                  <tr className="bg-[#F6F7F8] rounded-full text-[14px]">
                     <th className="pl-6 py-3 rounded-l-full">Problem/Diagnosis</th>
                     <th className="pl-6">Description</th>
                     <th className="pl-6 rounded-r-full">Status</th>
                  </tr>
               </thead>
               <tbody>
                  {diagnosticList.map((item: any, idx: number) => {
                     const { name, description, status } = item;
                     return (
                        <tr key={idx} className="text-[14px]">
                           <td className="pl-6 py-3">{name}</td>
                           <td className="pl-6">{description}</td>
                           <td className="pl-6">{status}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default React.memo(Diagnosis);
