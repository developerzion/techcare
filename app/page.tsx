"use client";

import React, { useEffect, useState } from "react";
import Layout from "./components/hoc/Layout";
import { useAxiosClient } from "./components/utils/axiosClient";
import Patients from "./components/homepage/Patients";
import Diagnosis from "./components/homepage/Diagnosis";
import Profile from "./components/homepage/Profile";

const Home = () => {
   const axiosClient = useAxiosClient();
   const [patients, setPatients] = useState<any[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [patient, setPatient] = useState<any | {}>({});

   const [chartData, setChartData] = useState({
      labels: [],
      datasets: [
         { label: "", data: [], borderColor: "#C26EB4", tension: 0.3 },
         { label: "", data: [], borderColor: "#7E6CAB", tension: 0.3 },
      ],
   });

   const fetchPatients = async () => {
      const response = await axiosClient.get("");
      if (response.status === 200) {
         setPatients(response.data);
         setPatient(response.data[3]);
      }
      setLoading(false);
   };

   useEffect(() => {
      fetchPatients();
   }, []);

   useEffect(() => {
      const diagnosis_history = patient.diagnosis_history || [];
      const labels: any = [];
      const systolicData: any = [];
      const diastolicData: any = [];
      diagnosis_history.slice(0, 6).forEach((history: any) => {
         labels.push(`${history?.month.slice(0, 3)}, ${history?.year}`);
         systolicData.push(history?.blood_pressure?.systolic?.value);
         diastolicData.push(history?.blood_pressure?.diastolic?.value);
      });
      setChartData((prevState) => ({
         ...prevState,
         labels,
         datasets: [
            { ...prevState.datasets[0], data: systolicData },
            { ...prevState.datasets[1], data: diastolicData },
         ],
      }));
   }, [patient]);

   const selectionHandler = (currentPatient: any) => {
      setPatient(currentPatient);
   };

   return (
      <Layout>
         <main className="mt-5 flex gap-7">
            <Patients patients={patients} loading={loading} patient={patient} selectionHandler={selectionHandler} />
            <Diagnosis loading={loading} patient={patient} chartData={chartData} />
            <Profile loading={loading} patient={patient} />
         </main>
      </Layout>
   );
};

export default React.memo(Home);
