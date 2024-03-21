import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${({ theme }) => theme.size.maxwidth};
  margin: 80px auto;
  padding-right: 300px;
  padding-left: 15px;
`;

export const NormalFont = styled.p`
  font-family: ${({ theme }) => theme.font.inter};
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
`;

export const Icon = styled.a`
    color: white;

  &:hover {
    color: ${({theme}) => theme.color.mainblue};
  }

`;

export const Mail = styled.p`
  text-decoration: none;
  font-weight: 900;
  font-size: 38px;
  margin-top: -10px;
  color: black;


  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 34px;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 26px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.mainblue};
    cursor: pointer;
  }

  &:active {
    color: ${({theme}) => theme.color.portage};
  }

`;

export const ContainerIcon = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 24px;
`;
