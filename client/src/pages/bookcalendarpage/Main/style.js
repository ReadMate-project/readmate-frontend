import styled from "styled-components";
import { b1, b2, b4, flexCenter, flexCenterColumn, h1, h3 } from "../../../global/common";
import theme from "../../../global/theme";
const S={};

S.Background=styled.div`
    width:100%;
    height:100%;
`
// S.Title=styled.div`

// `
S.Title=styled.div`
    ${flexCenterColumn};
    div:nth-child(2) {
        position: absolute;
        top:28%;
        width:60%;
        height:2px;
        background-color: black;
      
    }

`
S.TitleHightLight=styled.div`
        position: absolute;
        top:21%;
        left:20%;
        width:10%;
        img{
            width:100%
        }

`
//calendar

S.CalendarContainer = styled.div`
  width: 360px;
  height: 450px;
  margin: auto;
  padding-left:20px;
  padding-right:20px;
  position: absolute;
  
`
S.CalendarHeadContainer=styled.div`
    display:flex;
    justify-content: space-between;
    position: relative;
    height:45px;
    margin:0px 16px;
    `
S.ArrowsWrapper=styled.div`
    & div{
        ${flexCenter};
        background-color: white;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        border-radius: 15px;
        width:62.4px;
        height: 27.2px;
        & div{
            background: none;
            width:0px;
        }
       & button{
        cursor: pointer;
        color:#555657;
        font-size:15px;
        background: none;
        border: none;
        box-shadow:none;
        margin: 0px auto;
        height: 30px;
        position: relative;
        }
    }
`
S.SelectWrapper=styled.h3`
    position:relative;
    & select {
        cursor: pointer;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        border:none;
        padding: 4px;
        font-size: 16px;
        border-radius: 15px;
        color:#555657;
        & option {
            cursor: pointer;
            padding: 4px;
            font-size: 16px;
            color:#555657;
        }
    }
`
S.WeekWrapper=styled.div`
    font-family: 'NanumSquareRound';
    font-weight: 600;
    margin-top: 13px;
    & .week{
        display: flex;
        position: relative;
        padding-bottom:29px;
        justify-content: space-between;
        & .weekday{
            width: calc(100% / 7); 
            text-align: center;
        }
    }
`
S.DateWrapper=styled.div`
    font-family:'Pretandard-Regular';
    font-weight:600;
    & .date{
        position: relative;
        cursor: pointer;
        & .weekday{
            color:#555657;
            width: calc(100% / 7);
            float: left;
            text-align: center;
            height: 45px;
            position:relative;
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
            color:#5487D3;
        }
    }
`
export default S;