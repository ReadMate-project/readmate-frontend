import styled from 'styled-components';
import { b1, b4, h2 } from '../../../../global/common';

const S={};

S.Container=styled.div`
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
    width:600px;
    height:370px;
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index:999;
    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 350px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 300px;
    }
`
S.Title = styled.h2`
    ${h2}
    margin-bottom: 3%;
`;

// S.SearchInput = styled.input`
//     width: 100%;
//     padding: 1%;
//     margin-bottom: 3%;
//     ${b1}
//     color:#999999;
//     border-radius: 10px;
//     border: 2px solid #717171;
//     &::placeholder{
//         ${b1}
//         color:#999999;
//     }
// `;

S.ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

S.CategoryButton = styled.button`
    padding: 2px 7px;
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
    padding: 2px 7px;
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
    margin-left: 2px;
    color: #2AA871;
    cursor: pointer;
`;
S.ApplyButton = styled.button`
    ${b1}
    background-color: #2AA871;
    color: white;
    border: none;
    padding: 0.5% 2%;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    position:absolute;
    bottom:5%;
    right:5%;
`;

S.ErrorMessage=styled.div`
    ${b4}
    color:#DF4545;
    margin-bottom: 2%;
`
export default S;