import styled from "styled-components";

export const Content = styled.div`
    max-width: ${({theme}) => theme.size.maxwidth};
    margin: auto;
    background-color: ${({theme})=> theme.color.gray };
`;

export const Title = styled.p`
    color: ${({theme}) => theme.color.mainblue};
    font-size: 25px;
`;

