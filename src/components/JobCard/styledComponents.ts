import styled from "styled-components";

export const JobCardContainer = styled.li`
  margin: 20px;
  background-color: #121212;
  list-style: none;
  margin-left: 0;
  list-style-type: none;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media screen and (max-width: 567px) {
    margin: 10px;
  padding:10px;

  }
`;

export const Article = styled.article``;

export const JobCardLogoContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: 567px) {
    padding-left: 0px;
  }
`;

export const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;
  
`;

export const JobRoleContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const RoleHeading = styled.h1`
  font-size: 24px;
`;

export const RoleRatingContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const RoleRating = styled.p`
  margin-left: 5px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
`;

export const LocationAndSalaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 567px) {
      padding: 0;
    }
`;

export const LocationAndEmploymentTypeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const JobLocation = styled.p`
  padding-left: 10px;
  @media screen and (max-width: 567px) {
    padding: 0;
  }
`;

export const EmploymentTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const EmploymentType = styled.p`
  padding-left: 10px;
  @media screen and (max-width: 567px) {
    padding: 0;
    margin: 2px;
  }
`;

export const PackagePerAnnum = styled.p`
  padding-left: 10px;
  @media screen and (max-width: 567px) {
    padding: 0;
  }
`;

export const JobDescriptionContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: 567px) {
    padding: 0;
  }
`;

export const DescriptionHeading = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  font-size: 20px;

`;

export const DescriptionContent = styled.p`
  margin: 0;
  color: #cbd5e1;
`;

export const JobCardHr = styled.hr`
  margin: 20px;
  color: #ffffff60;
  @media screen and (max-width: 567px) {
    margin-left: 0;
    margin-left: 0;
  }
  
`;
