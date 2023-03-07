import tw, { styled } from "twin.macro";

export const HeaderMainContainer = styled.header``;

export const Nav = styled.nav``;
export const HeaderUiEl = styled.ul`
  ${tw`h-24	flex justify-between items-center flex-row px-10 p-0 m-0 md:p-2	`}
  background-color: #272727;
`;
export const HeaderLiEl = styled.li`
  ${tw`list-none  p-0 m-0`}
`;

export const ButtonContainer = styled.div`
  ${tw`flex`}
`;

export const WebsiteLogo = styled.img`
  ${tw`w-full h-12 cursor-pointer m-2`}
`;

export const LogoutBtn = styled.button`

${tw`w-24 h-7 text-white border-0 text-center rounded-md text-xs flex justify-center items-center font-medium cursor-pointer md:inline-flex hidden `}
  background-color: #6366f1;
`;

export const LogoutBtnMobile = styled.button`
${tw`flex border-0 cursor-pointer md:hidden `}
`;
