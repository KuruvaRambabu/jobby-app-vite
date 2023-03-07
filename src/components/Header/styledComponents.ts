import styled from "styled-components";

export const HeaderMainContainer = styled.header`
`

export const Nav = styled.nav`
`
export const HeaderUiEl = styled.ul`
    height: 10vh;
    background-color: #272727;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left: 40px;
    padding-right: 40px;
    list-style-type: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width:560px){
            padding: 10px;
    }
`
export const HeaderLiEl = styled.li`
    list-style-type: none;
    padding: 0;
    margin: 0;
`


export const ButtonContainer = styled.div`
    display: flex;

`

export const WebsiteLogo = styled.img`
    width: 100%;
    height: 50px;
    cursor: pointer;
    margin:10px;
`

export const LogoutBtn = styled.button`
    background-color: #6366f1;
    width: 100px;
    height: 30px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    @media screen and (max-width: 567px) {
        display:none;
    }
`

export const LogoutBtnMobile  = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    @media screen and (min-width: 568px) {
        display:none;
    }
`