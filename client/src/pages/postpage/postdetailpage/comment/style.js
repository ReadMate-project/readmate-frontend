import styled from "styled-components";
import { b1, b2, b4, flexCenter } from "../../../../global/common";

const S={};

S.Background1=styled.div`
    width:80%;
    height:auto;
    background-color:#D9D9D9;
    position: relative;
    top:7vh;
    margin-bottom: 2%;
    border-radius: 5px;
    padding:2%;
`
S.Profile = styled.div`
  display: flex;
  align-items: center;
  gap:0.5%;

  span{
        width: 30px;  
        height: 30px;  
        overflow: hidden; 
        border-radius: 50%; 
        border: 1px solid #717171;
        img {
            width: 100%;
            height: 100%; 
            object-fit: cover; 
        }
        @media (max-width: 1024px) {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 768px) {
            width: 15px;
            height: 15px;
        }

        @media (max-width: 480px) {
            width: 10px;
            height: 10px;
        }
  }
  
`;
S.Username = styled.div`
  ${b4}
`;

S.CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 5px;
  resize: none;
  outline: none;
  &::placeholder{
    ${b4}
  }
`;

S.CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
`;

S.CharacterCount = styled.div`
    color: #717171;
    ${b4}
`;

S.RegisterButton = styled.button`
    padding: 0.5% 1.5%;
    color: white;
    background-color: #717171;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    ${b4}
`;
S.Background2=styled.div`
    width:80%;
    height:auto;
    background-color: white;
    position: relative;
    top:7vh;
    margin-bottom: 2%;
    border-radius: 1rem;
    padding:2%;
`
S.CommentToggle= styled.div`
    display: flex;
    gap:2%;
    ${b1}
    margin-bottom: 10px;
   
`;
S.CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

S.Comment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #717171;
  span{
       width: 40px;  
        height: 40px;  
        overflow: hidden; 
        border-radius: 50%; 
        border: 1px solid #717171;
        img {
            width: 100%;
            height: 100%; 
            object-fit: cover; 
        }
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

S.Username = styled.div`
    ${b2}
    font-weight: bold;
`;

S.CommentContent = styled.div`
    ${b2}
    margin-top: 4px;
    line-height: 1.2;
`;

S.CommentTime = styled.div`
    ${b4}
    color:#717171;
    margin-top: 4px;
`;
//수정, 삭제 버튼
S.ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  text-align: center;
`;

S.Button = styled.button`
  ${b4}
  padding: 0 7px;
  background-color: #717171;
  color: white;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  
 
`;
// S.EditInput=styled.input`
//   ${b2}
//   width: 100%;
//   height:auto;
//   outline: none;
// `
S.EditInput = styled.textarea`
  ${b2}
  width: 100%;
  /* min-height: 10px; 최소 높이 설정 */
  resize: none; 
  outline: none;
  /* overflow: hidden;  */
`;
S.PaginationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`;

S.PageButton = styled.button`
    ${b2}
    padding: 0% 8%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${({ isActive}) =>
    isActive ? '#717171' : 'transparent'};
    color: ${({ isActive}) =>
    isActive ? 'white' : 'black'};
    
`;

S.EmptyMessage=styled.div`
  ${b1}
  margin-top: 2%;
`
export default S;