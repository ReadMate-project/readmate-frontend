import styled from "styled-components";
import { b1, b4, h3,h1,b3, flexCenterColumn } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Component=styled.div`
    font-family: 'Pretandard';
    ${h3};
    position:relative;
    width:800px;
    height:550px;
    margin:auto;
    margin-bottom: 10%;
    margin-top: 5%;
    padding: 3% 5% 2% 7%;
    border-radius: 1rem;
    background-color:white;
    /* background-color: ${({ isOverlay }) => (isOverlay ? 'rgba(0, 0, 0, 0.3)' : 'white')}; */

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
`
S.Title=styled.div`
    /* ${flexCenterColumn}; */
     div:first-child {
        position: absolute;
        top:10%;
        left:12.5%;
        ${h1};
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
      
    }

`

S.Button=styled.div`
    position:absolute;
    top:8%;
    right:17%;
    ${b1};
    width:14%;
    padding:2.5%;
    line-height: 25%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${theme.PALETTE.darkGray};
    cursor: pointer;
`
S.ProfilePicture=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    /* justify-content: space-between; */
    align-items: center;
    position: absolute;
    top:25%;
    white-space: nowrap;
    
`
S.Profile=styled.div`
    width: 60px;  
    height: 60px;  
    overflow: hidden; 
    border-radius: 50%; 
    margin: 0 7.5%;
    img {
        width: 100%;
        height: 100%; 
        object-fit: cover; 
    }
    @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`


S.ImageButtonContainer=styled.div`

    @media (max-width: 1024px) {
        img {
            width: 60%;
            
        }
    }

    @media (max-width: 768px) {
        img {
            width: 40%;
            
        }
    }

    @media (max-width: 480px) {
        img {
            width: 20%;
        }
    }
`

S.Introduce=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:45%;
    
    input{
        position:relative;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;
        padding-left: 3%;              
        width: 60%;                
        border-radius: 0.5vw;           
        ${b4}
        outline: none;
        /* margin-left: 5%; */
        
    }
    & .count{
        ${b4}
        color: #999999;
    }
`
S.NickName=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:60%;
    input{
        position:relative;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;
        padding-left: 3%;              
        width: 60%;                
        border-radius: 0.5vw;           
        ${b4}
        outline: none;
        margin-left: 4.5%;
    }
    & .count{
        ${b4}
        color: #999999;
    }
        

`
S.SelectCategoryButton=styled.div`
     ${b1};
    font-weight: 700;
    border:2px solid ${theme.PALETTE.green};
    color:${theme.PALETTE.green};
    padding:2%;
    border-radius: 1vw ;
    
    cursor: pointer;
`
S.Category=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:75%;

`
S.CategoryButton = styled.button`
    padding: 2px 7px;
    ${b4}
    background-color: ${({ isSelected }) => (isSelected ? 'green' : 'white')};
    /* color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')}; */
    color:#717171;
    border: 1px solid #717171;
    
    border-radius: 30px;

    
`;
S.SelectedButton = styled(S.CategoryButton)`
    padding: 2px 7px;
    /* background-color:rgba(42, 168, 113, 0.09); */
    border: 1px solid #2AA871;
    color: #2AA871;
    /* border-radius: 10px; */
    cursor: pointer;
    margin:1%;
`;

S.SelectedContainer = styled.div`
    position: relative;
    /* padding: 1.5%;  */
    /* right:0.7%; */
    display: flex;
    flex-wrap: wrap;
    width:60%;
    background-color: rgba(233, 232, 228, 0.55);
    border-radius: 0.5vw; 
    padding:0.5%;
    height:100%;
    min-height:40px;
    overflow-y: auto;
     @media (max-width: 1024px) {
        min-height:30px;
    }

    @media (max-width: 768px) {
        min-height:20px;
    }

    @media (max-width: 480px) {
        min-height:10px;
    }
    
`;

// S.Category=styled.div`
//     width:70%;
//     display:flex;
//     ${b1};
//     font-weight: 700;
//     justify-content: space-between;
//     align-items: center;
//     position: absolute;
//     top:75%;
    
//     input{
//         position:relative;
//         background-color: rgba(233, 232, 228, 0.55);  
//         border: none;               
//         padding: 1.5%;
//         padding-left: 3%;              
//         width: 60%;                
//         border-radius: 10px;          
//         ${b4}
//         outline: none;
        
//     }
//     input::placeholder {
//             color: #999999;  
//             ${b4}  
//         }
//     img {
//         width:7%;
//         cursor: pointer;
//     }

// `

export default S;