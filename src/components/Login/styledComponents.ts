import styled from "styled-components"
import tw from 'twin.macro';

export const MainContainer = styled.div`
    background-color: #000000;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const LoginFormContainer = styled.div`
    padding: 40px;
    background-color: #272727;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24%;
    color: #ffffff;
    border-radius: 10px;
    @media screen and (max-width:567px){
      width: 100%;
      margin: 10px;
    }

`

export const WebisteLogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
`

export const Form  = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 10px;
`


export const ErrorMessageText = styled.p`
    color: #ff0b37;
`

export const  WebisteImg = styled.img`
    width: 60%;
    height: 56px;
`

export const LoaderContainer = styled.div`
    height: 40px;
    margin-top: 25px;
    background-color: #4f46e5;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const LoginBtn = styled.button`
    height: 40px;
    margin-top: 25px;
    background-color: #4f46e5;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const InputLabel = styled.label`
    display: flex;
    flex-grow: 1;
    margin-top: 20px;
    font-size: 14px;
`


export const Input = styled.input`
    flex-grow: 1;
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-top: 2px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #7e858e;
    color: #ffffff;
`


