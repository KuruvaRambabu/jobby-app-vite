import { makeAutoObservable } from "mobx";

import { profileDetailsResponseObj, profileDetailsTypes } from "../types";

import JobDataModel from "./models/JobsDataModel/jobsDataModel";
import ProfileDetailsModel from "./models/ProfileDataModel/profileDetailsModel";
import JobDetailsModel from "./models/JobDetailsModel/jobDetails";

class JobsStore {
  jobList!: Array<JobDataModel>;
  profileData!: profileDetailsTypes | {};
  jobDetailsData!: any;
  similarJobsData!: Array<JobDataModel>;

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    this.jobList = [];
    this.profileData = {};
    this.jobDetailsData = {};
    this.similarJobsData = [];
  }

  onjobsApiSuccess = (data: any) => {
    const { jobs } = data;
    this.jobList = jobs.map((jobData: any) => new JobDataModel(jobData));
  };

  onUserProfileApiSuccess(data: profileDetailsResponseObj) {
    const profileDetails = data.profile_details;
    this.profileData = new ProfileDetailsModel(profileDetails);
  }


  onJobInfoAPISuccess(data: any) {
    const jobDetails = data.job_details;
    const similarJobs = data.similar_jobs;
    this.jobDetailsData = new JobDetailsModel(jobDetails);
    this.similarJobsData = similarJobs.map(
      (similarJob: any) => new JobDataModel(similarJob)
    );
    

  }
}

export default JobsStore;
