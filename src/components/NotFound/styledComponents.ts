import tw, { styled } from "twin.macro";

export const NotFoundContainer = styled.div`
  ${tw`flex justify-center items-center min-h-screen bg-black text-white flex-col`}
`;

export const NotFoundImg = styled.img`
  ${tw`w-full md:w-1/4`}
`;

export const NotFoundHeading = styled.h1`
  ${tw`text-2xl font-bold m-2 `}
`;

export const NotFoundDescription = styled.p`
  ${tw`m-4 text-center`}
`;
