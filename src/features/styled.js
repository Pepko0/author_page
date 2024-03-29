import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: ${({theme}) => theme.size.maxwidth};
    margin: auto;

    @media(max-width: ${({theme}) => theme.media.phone}){
        grid-template-columns: 1fr;
    }

`;
