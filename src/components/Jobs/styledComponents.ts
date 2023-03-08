import tw, { styled } from "twin.macro";

export const MainContainer = styled.div`
  ${tw`bg-black min-h-screen text-white p-4 md:p-8`}
`;

export const JobsContainer = styled.div`
  ${tw`flex flex-col m-0 md:ml-6 justify-between md:flex-row`}
`;

export const JobsRightSideSection = styled.div`
${tw`w-full md:w-4/5`}
}
`;

export const JobsLeftSideSection = styled.aside`
  ${tw`w-full md:w-1/6`}
`;

export const HorizontalLine = styled.hr`
  ${tw` my-8`}
`;

export const EmploymentFilterSection = styled.section``;

export const EmploymentTypeUlEl = styled.ul`
  ${tw`p-0`}
`;

export const EmploymentTypeHeading = styled.h1`
  ${tw`text-xl leading-4 font-medium`}
`;

export const InputSearchSection = styled.section`
  ${tw`flex justify-start items-center h-12 m-6 md:ml-0`}
`;

export const SearchContainer = styled.div`
  ${tw`flex justify-center items-center border-[2px] border-solid border-[ #ffffff50] w-full md:w-2/6`}
`;

export const JobsSearchInputField = styled.input`
  ${tw`h-10 w-full bg-transparent text-white outline-0 p-2 md:w-80`}
`;

export const SearchButton = styled.button`
  ${tw`text-white border-0 bg-[#272727] w-8 text-center cursor-pointer grow h-10 flex justify-center items-center`}
`;

export const JobsListSection = styled.div``;

export const JobsListUlElement = styled.ul`
  ${tw`p-0 m-0`}
`;

export const NoJobsFoundContainer = styled.div`
  ${tw`flex justify-center items-center flex-col`}
`;

export const NoJobsImg = styled.img`
  ${tw`w-full md:w-2/4`}
`;

export const NoJobsHeading = styled.h1`
  ${tw`text-3xl`}
`;

export const NoJobsDescription = styled.p``;
