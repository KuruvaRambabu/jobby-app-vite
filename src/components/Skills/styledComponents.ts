import styled from "styled-components";

export const SkillsContainer = styled.li`
  display: flex;
  width: 25%;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 567px) {
    width: 49%;
  }
`;

export const SkillImg = styled.img`
  width: 60px;
`;

export const SkillName = styled.p`
  padding-left: 20px;
`;
