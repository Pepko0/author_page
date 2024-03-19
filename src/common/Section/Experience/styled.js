import styled from "styled-components";

export const Container = styled.div`
  // border: solid;
  display: grid;
  grid-template-rows: 1fr;
  max-width: 1000px;
  margin: 100px auto;
  padding: 20px;
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
  grid-template-columns: 1fr 1fr;
  // border: solid;
  font-size: 25px;
`;

export const Li = styled.li`
  &:before{
    content: "•";
    color: ${({theme}) => theme.color.mainblue};
    margin-right: 16px;
  }
`;

export const Span = styled.span`
  color: black;
`;
