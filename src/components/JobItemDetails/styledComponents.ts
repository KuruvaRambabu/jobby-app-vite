import styled from "styled-components";

export const JobDetailsMainContainer = styled.div`
  background-color: #000000;
  min-height: 90vh;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
 
export const JobDetailsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const JobDetailsContainer = styled.div`
  width: 85%;
  min-height: 90vh;
  margin-top: 20px;
  background-color: #272727;
  border-radius: 10px;
  @media screen and (max-width: 567px) {
    width: 95%;
    padding: 10px;
  }
`;

export const JobDetailsBottomSection = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const CompnanyWebsiteUrl = styled.a`
  display: flex;
  color: #6366f1;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

export const JobDetailsDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SkillHeading = styled.h1``;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0%;
`;

export const LifeAtCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LifeAtCompanyHeading = styled.h1``;

export const LifeAtCompnayContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width:568px){
    display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

export const LifeAtCompanyDescription = styled.p`
  width: 70%;
  @media screen and (max-width:568px){
    width: 100%;
  }
`;

export const LifeAtCompanyImg = styled.img`
  width: 30%;
  height: 300px;

  @media screen and (max-width: 568px) {
    width: 100%;
    height: 300px;
  }
`;


export const SimilarJobsSection = styled.div`

display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 85%;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width:568px){
      width: 95%;
      padding: 0;
    }

`

export const SimilarJobsSectionHeading = styled.h1``

export const SimilarJobsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding:0
`
