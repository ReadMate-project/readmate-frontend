import styled from "styled-components";
import { b1, b4, flexCenter } from "../../../../global/common";


const S={};

S.DropdownContainer = styled.div`
  display: flex;
  width:100%;
  /* height:10%; */
  position:absolute;
  left:29vw;
`;

S.Dropdown = styled.div`
  display: flex;
  justify-content: flex-start;
  ${b1}
  width:17%;
  select {
    ${b1}
    /* padding: 3%; */
    width:90%;
    background-color: #86A789;
    color:white;
    outline:none;
    border-radius:0.5rem;
    border:none;
    padding-left: 5px;
  }

  option{
    background-color: white;
    ${b4}
    color:#717171;
  }
  & .search{
    width:100%;
  }
`;
S.DropdownContainer3 = styled.div`
  position: absolute;
  left: 50%;
  width: 100px;
  margin: 0 auto;
`;

S.Input3 = styled.input`
width: 100%;
padding: 10px;
font-size: 1rem;
border: 1px solid #CCC;
border-radius: 0.5rem;
outline: none;
&:focus {
    border-color: #BBAB8C;
}
`;
S.ResultsContainer = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
background-color: #FFF;
border: 1px solid #CCC;
border-radius: 0.5rem;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
max-height: 200px;
overflow-y: auto;
z-index: 1000;
margin-top: 5px;
`;

S.ResultItem = styled.div`
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
transition: background-color 0.2s;

&:hover {
    background-color: #F0F0F0;
}

img {
    width: 40px;
    height: 60px;
    object-fit: cover;
    border-radius: 0.25rem;
    margin-right: 10px;
}

div {
    display: flex;
    flex-direction: column;

    strong {
        font-size: 1rem;
        margin-bottom: 2px;
    }

    span {
        font-size: 0.9rem;
        color: #555;
    }
}
`;
export default S;