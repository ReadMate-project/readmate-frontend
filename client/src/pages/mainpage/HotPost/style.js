import styled from 'styled-components'
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h2, h3 } from '../../../global/common';
import theme from '../../../global/theme';

const S={};

S.Container=styled.div`
    width:100%;
    height:auto;
    overflow: hidden;
    background-color: ${theme.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
    
    &.lightGreenBg{
        background-color: ${theme.PALETTE.lightGreen};

    }
    &.hotpost{
        margin-bottom: 8%;
    }

`
S.Title=styled.div`
    /* padding:5% 0; */
    padding-bottom: 5%;
    img{
        width:20%;
    }
`

S.Text3=styled.div`
    position: absolute;
    ${b1};
    top:30%;
    /* transform: translate(0, -100%); */
    margin-bottom: 30%;
`
S.ShowMoreButton3=styled.div`
    position:absolute;
    top:15%;
    left:83%;
    width:100%;
    img{
        position:relative;
        z-index: 10;
        width:8%;
    }
`
// S.HiddenComponent=styled.div`
//     width:100%;
//     height:30%;
//     background-color: blue;
// `
S.HP_Component=styled.div`
    display: flex;
    justify-content: center; /* 자식 div들 사이의 간격 조정 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100%;
    position:absolute;
    top:15%;
    right:0%;
    margin-top: 5%;
`
S.BookClubClip2=styled.div`
    img{
        width:13%;
        display: block;
        visibility: hidden;
    }
    img:first-child {
        position:relative;
        /* padding-top:1%; */
        top:10%;
        transform: translate(0, -10%);
        left:-8%;
        z-index: 10;
    }
    img:nth-child(2) {
        width:11%;
        bottom:0%;
        left:85%; 
        position:relative;
        transform: translate(0, 55%);
        z-index: 10;
        /* margin-bottom: 5%; */
    }
`
S.Crown=styled.div`
   width:7%;
   position: absolute;
   top:13%;
   left: 10%;
   &.crown1 { // 첫 번째 크라운
        left: 10%;
    }

    &.crown2 { // 두 번째 크라운
        left: 60%; // 오른쪽으로 옮기기
    }
    img{
        /* position: relative; */
        /* left: 60%; */
        width:100%;
    }
    
`
S.Box=styled.div`
        width: 36%; 
        height:42%;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 2vw; 
        margin: 0px 5%;
        padding:1.5%;
        padding-left: 2%;
        position: relative;
        cursor: pointer;
`
S.FirstLine=styled.div`
    position: absolute;
    top:15%;
    display: flex;
    align-items: center;
    width:50%;
    img{
        width:25%;
    }
`
S.Title3 = styled.div`
    ${h2}
    padding-left: 3%;
`;

S.UserInfo = styled.div`
    position: absolute;
    top:42%;
    display: flex;
    align-items: center;
    ${b1}
    white-space: nowrap;
    width:10%;
    justify-content: space-between;
    img {
        width: 40px;
        height:40px;
        border-radius: 50%;
        margin-right: 7px;
        @media (max-width: 1024px) {
            width: 30px; 
            height: 30px; 
        }

        @media (max-width: 768px) {
            width: 20px; 
            height: 20px; 
        }

        @media (max-width: 480px) {
            width: 15px; 
            height: 15px;
        }
    }
`;

S.InteractionContainer = styled.div`
    position: absolute;
    top:75%;
    display: flex;
    align-items: center;
    width:55%;
    justify-content: space-between;
    ${b2}
`;

S.LikeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
   
`;

S.CommentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
    
`;
S.TimeContainer=styled.div`
    display: flex;
    align-items: center;
    gap: 3%;

`
S.PostImage = styled.div`
    width: 30%;
    height:80%;
    height: auto;
    position: absolute;
    right: 2%;
    top: 15%;
    
    img{
        width:140px;
        height:140px;
        border-radius: 1vw;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:80px;
            height:80px;
        }

        @media (max-width: 768px) {
            width:50px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:35px;
            height:35px;
        }
    }
`;


export default S;