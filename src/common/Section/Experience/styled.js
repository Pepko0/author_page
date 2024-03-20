import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  max-width: ${({theme}) => theme.size.maxwidth};
  margin: 100px auto;
  padding: 20px;
  background-color: ${({theme}) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);

`;

export const Section = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${({theme}) => theme.color.gray};

`;

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.inter};
  font-size: 25px;
  border-bottom: 1px, solid;
  `;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 25px;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    grid-template-columns: 1fr;
  }
`;

export const Li = styled.li`
  &:before{
    content: "•";
    color: ${({theme}) => theme.color.mainblue};
    margin-right: 16px;
  }
  font-size: 18px;
  color: ${({theme}) => theme.color.gray};
  margin-bottom: 7px;


`;

export const Span = styled.span`
  color: black;
`;
