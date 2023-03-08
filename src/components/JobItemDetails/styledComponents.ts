import tw, { styled } from "twin.macro";

export const JobDetailsMainContainer = styled.div`
  ${tw`bg-black min-h-screen text-white flex justify-center items-center`}
`;

export const JobDetailsSection = styled.div`
  ${tw`flex justify-center items-center flex-col`}
`;

export const JobDetailsContainer = styled.div`
  ${tw` w-11/12 p-0 bg-[#272727] md:p-3 md:w-5/6 min-h-screen mt-5 rounded-md`}
`;

export const JobDetailsBottomSection = styled.div`
  ${tw`px-5`}
`;

export const CompnanyWebsiteUrl = styled.a`
  ${tw`flex justify-between  text-[#6366f1] items-center no-underline	`}
`;

export const JobDetailsDescriptionContainer = styled.div`
  ${tw`flex justify-between`}
`;

export const SkillHeading = styled.h1``;

export const SkillsList = styled.ul`
  ${tw`flex flex-wrap p-0`}
`;

export const LifeAtCompanyContainer = styled.div`
  ${tw`flex flex-col`}
`;

export const LifeAtCompanyHeading = styled.h1``;

export const LifeAtCompnayContentContainer = styled.div`
  ${tw`flex flex-col justify-center items-center md:flex-row`}
`;

export const LifeAtCompanyDescription = styled.p`
  ${tw`w-full md:w-8/12	`}
`;

export const LifeAtCompanyImg = styled.img`
  ${tw`w-full md:w-2/6	h-72`}
`;

export const SimilarJobsSection = styled.div`
  ${tw`flex flex-col justify-start w-11/12	md:w-5/6	 px-5`}
`;

export const SimilarJobsSectionHeading = styled.h1`
  ${tw`text-3xl font-bold mt-4`}
`;

export const SimilarJobsList = styled.ul`
  ${tw`flex flex-wrap justify-start items-center p-0`}
`;
