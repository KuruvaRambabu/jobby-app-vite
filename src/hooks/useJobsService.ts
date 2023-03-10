import { useRef } from "react";
// import JobsServiceAPI from '../services/JobsService/jobsService.api'
import JobsServiceAPI from "../services/JobsService/jobsServiceTest";

const useJobsService = (): JobsServiceAPI => {
  const jobsServiceAPI = useRef(new JobsServiceAPI());

  return jobsServiceAPI.current;
};

export { useJobsService };
