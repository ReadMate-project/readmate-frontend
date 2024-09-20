import styled, { css } from "styled-components";

const variantCSS = {
    green: css`
        background-color: ${({ theme }) => theme.PALETTE.green};
    `,
    
};

const borderCSS = {
    default: css`
        border: none;
    `,
};

const sizeCSS = {
    small: css`
        width: 132px;
        height: 41px;
    `,
    
};

const colorCSS = {
    black: css`
        color:black;
    `,
    white: css`
        color:white;
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

