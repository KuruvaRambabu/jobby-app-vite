import Cookies from "js-cookie";
import JobsServiceInterface from ".";

class JobsServiceAPI implements JobsServiceInterface {
  api: string;
  constructor() {
    this.api = "https://apis.ccbp.in";
  }

  getJobsAPI = async (
    employementFilters?: Array<string> | any,
    salaryRangeFilter?: string,
    searchInput?: string
  ) => {
    const employmentFilters = employementFilters.join(",");
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch("jobs", options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error_msg);
    }
    return data;
  };

  getProfileApi = async () => {
    const jwtToken = Cookies.get("jwt_token");

    const url = `/profile`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error_msg);
    }
    return data;
  };

  getJobDetailsApi = async (id: string | undefined) => {
    const url = `/jobs/${id}`;
    const jwtToken = Cookies.get("jwt_token");

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error_msg);
    }
    return data;
  };
}

export default JobsServiceAPI;
