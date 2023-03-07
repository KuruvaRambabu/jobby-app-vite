import tw, { styled } from "twin.macro";

export const JobCardContainer = styled.li`

${tw` m-4 list-none m-4 md:ml-0 rounded-lg shadow-md p-2 md:p-0`}
background-color: #121212;
  }
`;

export const Article = styled.article``;

export const JobCardLogoContainer = styled.div`
  ${tw`flex px-4 md:pl-0`}
`;

export const CompanyLogo = styled.img`
  ${tw` w-14 h-14 m-2`}
`;

export const JobRoleContainer = styled.div`
  ${tw`m-0 flex flex-col`}
`;

export const RoleHeading = styled.h1`
  ${tw`text-lg font-bold`}
`;

export const RoleRatingContainer = styled.div`
  ${tw`m-0 flex flex-row`}
`;

export const RoleRating = styled.p`
  ${tw`ml-1 my-0 mr-0`}
`;

export const LocationAndSalaryContainer = styled.div`
  ${tw` flex justify-between items-center p-0  md:px-6`}
`;

export const LocationAndEmploymentTypeContainer = styled.div`
  ${tw`flex justify-evenly`}
`;

export const LocationContainer = styled.div`
  ${tw`flex justify-center items-center mx-3`}
`;

export const JobLocation = styled.p`
  ${tw`p-0 md:pl-3`}
`;

export const EmploymentTypeContainer = styled.div`
  ${tw`flex justify-center items-center mx-3`}
`;

export const EmploymentType = styled.p`
  ${tw`p-0 md:pl-3 m-1 md:m-0`}
`;

export const PackagePerAnnum = styled.p`
  ${tw`p-0 md:pl-3`}
`;

export const JobDescriptionContainer = styled.div`
  ${tw`p-0 md:px-5`}
`;

export const DescriptionHeading = styled.h1`
  ${tw`m-0 pb-3 text-lg`}
`;

export const DescriptionContent = styled.p`
  ${tw`m-0 text-slate-300	`}
`;

export const JobCardHr = styled.hr`
  ${tw`mx-0 md:m-10 `}
  color: #ffffff60;
`;
