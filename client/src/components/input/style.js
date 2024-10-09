import styled from "styled-components";

const Input = styled.input`

  background-color: rgba(233, 232, 228, 0.55);
  border: none;
  padding: 1.5%;
  padding-left: 3%;
  width: 60%; /*조정필요*/
  border-radius: 10px;
  ${b4}
  outline: none;

  ::placeholder {
    color: #999999;
    ${b4}
  }
`;

export default Input;
