import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #000000;
    color: #ffffff;
    flex-direction: column;
    @media screen and (max-width: 567px) {
        min-height: 100vh;
  }
    
`

export const NotFoundImg = styled.img`

@media screen and (max-width: 567px) {
      width: 100%;
}
    
`

export const NotFoundHeading = styled.h1``

export const NotFoundDescription = styled.p`

@media screen and (max-width: 567px) {
    margin: 20px;
    text-align: center;
}

`



