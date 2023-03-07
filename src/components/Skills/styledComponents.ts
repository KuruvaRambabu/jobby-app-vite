import tw, { styled } from "twin.macro";

export const SkillsContainer = styled.li`
  ${tw`flex w-2/4 md:w-1/4 h-24 justify-start items-center list-none m-0 p-0`}
`;

export const SkillImg = styled.img`
  ${tw` w-16`}
`;

export const SkillName = styled.p`
  ${tw`pl-5`}
`;
