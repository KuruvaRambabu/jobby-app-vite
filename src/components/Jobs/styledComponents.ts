import styled from "styled-components";

export const MainContainer = styled.div`
background-color: #000000;
min-height: 90vh;
color: #ffffff;
padding: 30px;

@media screen and (max-width:568px){
    padding: 16px;
}
`
export const JobsContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 20px;
justify-content: space-between;
@media screen and (max-width: 567px) {
    display: flex;
    flex-direction: column;
    margin:0px;
}

`

export const JobsRightSideSection = styled.div`
width: 80%;
@media screen and (max-width: 567px) {
width: 100%;

}
`


export const JobsLeftSideSection = styled.aside`
width: 18%;
@media screen and (max-width: 567px) {
    width: 100%;
}

`

export const HorizontalLine = styled.hr`
margin-top: 30px;
margin-bottom: 30px;
`

export const EmploymentFilterSection = styled.section``

export const EmploymentTypeUlEl = styled.ul`
    padding:0;
`

export const EmploymentTypeHeading = styled.h1`
    font-size: 18px;
    font-weight: bold;
`

export const InputSearchSection = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    margin: 20px;
    @media screen and (max-width:568px){
      margin-top: 20px;
      margin-left: 0;
    }
`

export const SearchContainer = styled.div`
    border: 2px solid #ffffff50;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:568px){
      width: 100%;

    }
`


export const JobsSearchInputField = styled.input`
    height: 30px;
    width: 300px;
    background-color: transparent;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 10px;
    @media screen and (max-width:568px){
      width: 100%;
    }

`


export const SearchButton = styled.button`
    background-color: #272727;
    color: #ffffff;
    border: none;
    width: 50px;
    text-align: center;
    cursor:pointer;

`

export const JobsListSection = styled.div``


export const JobsListUlElement = styled.ul`
padding:0;
margin:0;
`


export const NoJobsFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const NoJobsImg = styled.img`

@media screen and (max-width:568px){
    width: 100%;
}
`

export const NoJobsHeading = styled.h1``

export const NoJobsDescription = styled.p``


