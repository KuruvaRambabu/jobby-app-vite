import tw, { styled } from "twin.macro";

export const ProfileMainContainer = styled.div`
  ${tw`h-52	flex justify-center items-center`}
`;

export const ProfileDetailsContainer = styled.div`
  ${tw`w-full bg-cover h-52 p-3 rounded-lg	flex justify-around flex-col
   bg-[url("https://assets.ccbp.in/frontend/react-js/profile-bg.png")]
  `}
`;

export const ProfileImg = styled.img`
  ${tw`w-16`}
`;

export const ProfileName = styled.p`
  ${tw`text-lg font-medium text-[#4f46e5]`}
`;

export const ProfileShortDescription = styled.p`
  ${tw`text-[#475569]`}
`;
