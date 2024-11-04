import styled from "styled-components";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from "../../../global/common";
import theme from "../../../global/theme";
const S={};

S.Background=styled.div`
    width: 80%;
    height:100%;
    /* height:100vh; */
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
    & > :nth-child(3) {
        align-self: flex-end; 
    }
`
S.TitleHightlight = styled.div`
    position:relative;
    width:100%;
    height:100%;
    margin-top:7%;
    margin-bottom: 0.5%;
    img{
        position:relative;
        width:8%;
    }      
    & #essay{
        width:15%;
        margin-top:2%;
    }
`
S.Line=styled.div`
    width:100%;
    height:1px;
    margin-bottom: 1%;
    background-color:black;
    
`
S.BookCount=styled.div`
    color:#717171;
    ${h2}
    position: relative;
    right: 5%;
    /* padding-right: 10%; */
 `
 S.Container=styled.div`
    display: flex;
    justify-content: center;
 `
 S.BookShelf=styled.div`
    margin-top: 3%;
    width:100%;
    position: relative; 
    display: flex;
    justify-content: center;
    img{
        width:90%;
    }
    
 `
S.BookComponent=styled.div`
    position:absolute;
    width:11%;
    height:28%;
    background-color: white;
    top:14.7%;
    box-shadow: 13px 12px 4px rgba(0,0,0,0.25);
    &.book1{
        left:15%;
    }
    &.book2{
        left:35%;
    }
    &.book3{
        left:55%;
    }
    &.book4{
        left:75%;
    }
    &.book5{
        top: 57.4%;
        left:15%;
    }
    &.book6{
        top: 57.4%;
        left:35%;
    }
    &.book7{
        top: 57.4%;
        left:55%;
    }
    &.book8{
        top: 57.4%;
        left:75%;
    }
    
    
`
//Essay

S.EssayTitleContainer=styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width:100%;

`
S.WriteEssayButton=styled.div`
    margin-top:8%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${h3};
    width:12%;
    border-radius: 0.5rem;
    color:#2AA871;
    background-color:white;
    border:2px solid ${theme.PALETTE.green};
    cursor: pointer;
    
`
S.EssayBodyContainer=styled.div`
    position: relative;
    width:100%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    margin-top: 3%;
    background-color: #CFDEC8 ;
`
S.Essay=styled.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
S.EssayItem = styled.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export default S;