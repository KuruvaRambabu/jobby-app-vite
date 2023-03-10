import { useRef } from "react";
import JobsServiceAPI from "../services/JobsService/jobsService.api";

const useJobsService = (): JobsServiceAPI => {
  const jobsServiceAPI = useRef(new JobsServiceAPI());

  return jobsServiceAPI.current;
};

export { useJobsService };
