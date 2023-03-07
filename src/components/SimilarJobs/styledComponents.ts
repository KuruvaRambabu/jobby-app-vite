import tw, { styled } from "twin.macro";

export const SimilarJobLiElement = styled.li`
  ${tw`w-full md:w-1/4 m-1 text-white list-none`}
`;

export const JobDetailsArticle = styled.div`
  ${tw`w-full flex flex-col rounded-lg p-4 items-start text-white`}
  background-color: #272727;
  min-height: 50vh;
`;
