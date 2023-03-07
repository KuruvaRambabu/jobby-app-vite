import styled from "styled-components";

export const MainContainer = styled.main`
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
    min-height: 90vh;
    background-size: cover;
    display: flex;
    color: #ffffff;
    justify-content: flex-start;
    @media screen and (max-width: 567px) {
          background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
          min-height: 100vh;
          background-size: cover;
      }
`


export const Heading = styled.h1`
margin: 0px;
font-size: 60px;
font-weight: bold;
@media screen and (max-width:567px){
        flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0px;
      font-size: 32px;
      font-weight: bold;
}
`

export const HomePageContentContainer = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 40px;
    padding-left: 6px;
    @media screen and (max-width:567px){
      display: flex;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0;
      margin-top: 40px;
      padding: 10px;
    }
`

export const HomePageDescription = styled.p``