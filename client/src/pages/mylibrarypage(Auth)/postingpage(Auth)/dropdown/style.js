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

export default S;