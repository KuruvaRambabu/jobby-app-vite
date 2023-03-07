import styled from "styled-components";

export const ProfileMainContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileDetailsContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/profile-bg.png");
  width: 100%;
  background-size: cover;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
`;

export const ProfileImg = styled.img`
  width: 60px;
`;

export const ProfileName = styled.p`
  font-size: 20px;
  color: #4f46e5;
  font-weight: 400;
`;

export const ProfileShortDescription = styled.p`
  color: #475569;
`;
