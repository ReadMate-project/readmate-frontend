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
    width:4%;
    img {
        width: 100%;
        /* border:0.5px solid black; */
        border-radius: 50%;
    
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
    width:5%;
    min-width: 5%;
    img{
        width:100%;
        border-radius: 50%;
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

export default S;