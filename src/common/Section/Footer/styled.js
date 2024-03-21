import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: ${({theme}) => theme.size.maxwidth};
    margin:80px auto;
    padding-right: 300px;
    padding-left:15px;
    
`;

export const NormalFont = styled.p`
    font-family: ${({theme}) => theme.font.inter};
    color: ${({theme}) => theme.color.black};
    font-size: 18px;
`

export const Icon = styled.p`

    &:hover {
        color: ${({theme}) => theme.color.mainblue};
    }

`;