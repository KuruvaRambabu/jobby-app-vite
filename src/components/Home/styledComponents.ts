import tw, { styled } from "twin.macro";

export const MainContainer = styled.main`
  ${tw`bg-cover flex text-white justify-start min-h-[90vh]	
    bg-[url("https://assets.ccbp.in/frontend/react-js/home-sm-bg.png")]
    md:bg-[url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png")]
  `}
`;

export const Heading = styled.h1`
  ${tw`m-0 text-4xl md:text-6xl font-bold	flex flex-col`}
`;

export const HomePageContentContainer = styled.div`
  ${tw`flex w-full md:w-4/12 justify-start mt-10 p-4 flex-col items-start md:justify-center md:ml-10 md:p-2`}
`;

export const HomePageDescription = styled.p``;
