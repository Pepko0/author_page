import styled from "styled-components";

export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: solid;
    max-width: 1000px;
    margin: auto;
`;

export const Repositories = styled.div`
    border: solid;
    margin:10px;
`;

export const Title = styled.h2`
    font-family: ${({theme}) => theme.font.inter};
    font-weight: 900;
`;

export const Content = styled.p`
    color:${({theme}) => theme.color.gray};
`;

export const Link = styled.a`
    text-decoration: none;
    color:${({theme}) => theme.color.mainblue};
    word-break: break-all;

`;