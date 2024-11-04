import styled from 'styled-components';
import { b1, b4, h2 } from '../../../../global/common';

const S={};

S.Container=styled.div`
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
    width:800px;
    height:480px;
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index:999;
`
S.Title = styled.h2`
    ${h2}
    margin-bottom: 10px;
`;

S.SearchInput = styled.input`
    width: 100%;
    padding: 1%;
    margin-bottom: 20px;
    ${b1}
    color:#999999;
    border-radius: 10px;
    &::placeholder{
        ${b1}
    }
`;

S.ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

S.CategoryButton = styled.button`
    padding: 0.5% 1%;
    ${b4}
    background-color: ${({ isSelected }) => (isSelected ? 'green' : 'white')};
    /* color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')}; */
    color:#717171;
    border: 1px solid #717171;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        background-color: ${({ isSelected }) => (isSelected ? 'green' : '#e0e0e0')};
    }
`;

S.SelectedButton = styled(S.CategoryButton)`
    padding: 0.5% 1%;
    background-color:rgba(42, 168, 113, 0.09);
    border: 1px solid #2AA871;
    color: #2AA871;
    border-radius: 30px;
    cursor: pointer;
`;

S.SelectedContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`;

S.CloseButton = styled.span`
    margin-left: 8px;
    color: #2AA871;
    cursor: pointer;
`;

export default S;