import styled from "styled-components";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from "../../../global/common";
import theme from "../../../global/theme";
const S={};

S.Background=styled.div`
    width:100%;
    height:120vh;
    /* height: 100%; */
    margin-bottom: 40%;
    /* height: 100vh; */
    position: relative;
    /* overflow: auto; */
    /* overflow: hidden; */
    ${flexCenterColumn}
    background-color: ${theme.PALETTE.background};
`

S.Title=styled.div`
    ${flexCenterColumn};
    div:nth-child(2) {
        position: absolute;
        top:22%;
        width:60%;
        height:2px;
        background-color: black;

        
    }

`
S.TitleHightLight=styled.div`
        position: absolute;
        top: 7.5%;
        left:20%;
        width:28%;
        img{
            width:100%
        }
    /* width:100%;
    height:100%;
    
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }   */
`
//calendar

S.CalendarContainer = styled.div`
  width: 60%;
  /* height: 450px; */
  margin: auto;
  height: auto;
  position: absolute;
  top:10%;
  padding-top: 4%;
  
`
S.CalendarHeadContainer=styled.div`
    display:flex;
    justify-content: space-between;
    position: relative;
    /* width:90%; */
    height:10%;
    margin:3% 2%;
    padding-top: 5%;
    `
S.ArrowsWrapper=styled.div`
        ${flexCenter};
        background-color: #86A789;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        border-radius: 1.5rem;
        
        & div{
            color:white; 
            ${h3};
            position: relative;
            top:1px;
            
        }
       & button{
        cursor: pointer;
        color:white;
        ${h2}
        background: none;
        border: none;
        box-shadow:none;
        margin: 0px auto;
        padding:0px 8px;
        position: relative;
        }
    
`
S.SelectWrapper=styled.h3`
    position:relative;
    display: flex;  /* flexbox 사용 */
    gap: 13%; 
    & select {
        cursor: pointer;
        outline: none;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        ${h2}
        font-weight: 500;
        border:none;
        padding: 4px;
        border-radius: 1.5rem;
        background-color: #86A789;
        color:white;
        
        & option {
            cursor: pointer;
            background-color: white;
            padding: 4px;
            ${b2}
            color:#717171;
        }
    }
`

S.CalendarBodyContainer=styled.div`
    background-color: white;
    width:100%;
    height:1050px;
    padding:7% 3%;
    border-radius: 1.5rem;
    position:relative;
   
    @media (max-width: 1024px) {
        height: 700px;
    }

    
    @media (max-width: 768px) {
        height: 570px;
    }


    @media (max-width: 480px) {
        height: 500px;
    }
`
S.LineWrapper=styled.div`
    ${flexCenterColumn}
    width: 100%;
    height:100%;
    position: relative;
    margin-top: 1%;
    & div {
        position: relative;
        width: 90%;
        height: 1px; 
        background-color: #717171; 
        /* margin:8%; */
        z-index: 999;
       
    }
    /* div:nth-child(1) {
   
        top:-20%;
    }
    div:nth-child(2) {
      
        top:0%;
    }
    div:nth-child(3) {
       
        top:50%;
    }
    div:nth-child(4) {
     
        top:70%;
    }
    div:nth-child(5) {
       
        top:90%;
    } */

`
S.WeekWrapper=styled.div`
    ${h3}
    /* margin-top: 10%; */
    & .week{
        display: flex;
        position: relative;
        padding-bottom:3%;
        justify-content: space-between;
        & .weekday{
            width: calc(100% / 7); 
            text-align: center;
        }
    }
`
S.DateWrapper=styled.div`
    ${b2}
    & .date{
        position: relative;
        cursor: pointer;
        & .weekday{
            width: calc(100% / 7);
            float: left;
            text-align: center;
            height: 185px;
            position:relative;
            @media (max-width: 1024px) {
                height: 120px;
            }

            
            @media (max-width: 768px) {
                height: 100px;
            }


            @media (max-width: 480px) {
                height: 80px;
            }
        }
        & .weekday.hasData::after {
            content: ''; 
            position: absolute;
            width: 7px;
            height: 7px;
            background-color: #5487D3;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            margin-top: 10px;
            
        }
        & .weekday.today{
            color:${theme.PALETTE.green};
        }
    }
`

S.BookImage=styled.div`
    /* width:50%; */
    img{
        width:80%;
        max-height: 155px;
    }
`
export default S;