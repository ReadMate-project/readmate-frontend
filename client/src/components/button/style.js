import styled, { css } from "styled-components";

const variantCSS = {
    green: css`
        background-color: ${({ theme }) => theme.PALETTE.green};
        background-color: white;
        background-color: ${({ theme }) => theme.PALETTE.darkGray};
    `,
    
};

const borderCSS = {
    default: css`
        border: none;
    `,
    green: css`
    border: 1px solid ${({ theme }) => theme.PALETTE.green};
`,
};

//어차피 크기는 vw로 할거라 적용하는게 의미없을듯합니다..
const sizeCSS = {
    small: css`
        width: 93px;
        height: 35px;
    `,
    medium: css`
    width: 132px;
    height: 53px;
    `,
    large: css`
    width: 410px;
    height: 65px;
    `,
    
};

const colorCSS = {
    black: css`
        color:black;
    `,
    white: css`
        color:white;
    `,
    green: css`
    color:${({ theme }) => theme.PALETTE.green};
`,
};

const Button = styled.button`
    ${({ variant }) => variantCSS[variant]}
    ${({ border }) => borderCSS[border]}
    ${({ size }) => sizeCSS[size]}
    ${({ color }) => colorCSS[color]}

    cursor: pointer;
`;

export default Button;

