import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: ${({theme}) => theme.size.maxwidth};
  margin: 120px auto 0px;

  @media(max-width: ${({theme}) => theme.media.phone}){
    grid-template-columns: 1fr;
  }

`;

export const Group = styled.div`
  margin: 15px;
  max-width: 633px;
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 350px;
  border-radius: 250px;

  @media(max-width: ${({theme}) => theme.media.phone}){
    max-width: 225px;
  }
`;

export const Caption = styled.p`
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 700;
  font-size: 12px;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.gray};
`;

export const H1 = styled.p`
  font-weight: 900;
  font-size: 38px;
  margin-top: -10px;
`;

export const LeadParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme}) => theme.color.gray};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  font-size: 28px;
  padding: 10px;
  background-color: ${({theme}) => theme.color.mainblue};
  border-radius: 10px;
  border: none;

  &:hover{
    cursor: pointer;
  }
 
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  `;