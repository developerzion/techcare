import axios, { AxiosRequestHeaders } from "axios";

export function useAxiosClient(otherHeaders?: AxiosRequestHeaders) {
   const username = "coalition";
   const password = "skills-test";
   const auth = btoa(`${username}:${password}`);

   const header = {
      Authorization: `Basic ${auth}`,
      ...otherHeaders,
   };
   const endpoint = "https://fedskillstest.coalitiontechnologies.workers.dev";
   return axios.create({
      headers: header,
      baseURL: endpoint,
   });
}
