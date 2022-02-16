import styled from "styled-components";

export const CountdownDiv = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        width: 90%;
        height: 120px;
        display: flex;
        margin:5px auto 30px;
    }
`

export const BoardContainer = styled.div`
    margin: 0px 15px;
    @media only screen and (max-width: 600px) {
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
`

export const BoardTime = styled.div`
    background-color: rgba(44,44,68,255);
    width: 150px;
    height: 70px;
    border-radius: 6px;
    @media only screen and (max-width: 600px) {
        width: 90%;
        height: 40px;
        margin: 0 5px;
    }
`
export const BoardTimeDown = styled.div`
    background-color: rgba(52,54,79,255);
    width: 150px;
    height: 70px;
    border-radius: 6px;
    @media only screen and (max-width: 600px) {
        width: 90%;
        height: 40px;
        margin: 0 5px;
    }
`

export const TextTime = styled.h3`
    color: #d3506f;
    font-family:'Red Hat Text', sans-serif;
    font-weight: 700;
    font-size: 90px;
    text-align: center;
    position: relative;
    margin: 0;
    padding: 0;
    top: -130px;
    @media only screen and (max-width: 600px) {
        font-size: 35px;
        top: -65px;
    }
`
export const SubTextTime = styled.h3`
    color: #8d89a3;
    font-family:'Red Hat Text', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    top: -100px;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
        top: -35px;
    }
`
export const TextTitle = styled.h3`
    color: hsl(0, 0%, 100%);
    font-family:'Red Hat Text', sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin: 0px auto 50px;
    text-transform: uppercase;
    padding-top: 150px;
    padding-bottom: 80px;
    letter-spacing: 10px;
    @media only screen and (max-width: 600px) {
        width: 75%;
        padding-top: 80px;
        padding-bottom: 5px;
        letter-spacing: 7px;
        font-size: 17px;
        font-weight: normal;
    }
`

export const IconBot = styled.div`
   position: relative;
   top: 120px;
   height: 30px;
   width: 50%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content:space-evenly;
   text-align: center;
   color: #8584a5;
   font-size: 30px;
   @media only screen and (max-width: 600px) {
        width: 70%;
    }
`