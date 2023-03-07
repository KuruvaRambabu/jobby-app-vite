import styled from "styled-components";

export const SimilarJobLiElement = styled.li`
  width: 24%;
  background-color: #272727;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  list-style-type: none;

  @media screen and (max-width: 567px) {
      width: 100%;
  }

`;

export const JobDetailsArticle = styled.div`
  width: 100%;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: #ffffff;
  min-height: 50vh;
`;
