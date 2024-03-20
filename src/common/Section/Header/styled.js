import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: ${({theme}) => theme.size.maxwidth};
  margin: 120px auto 0px;
  background-color: ${({theme}) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);

  @media(max-width: ${({theme}) => theme.media.phone}){
    grid-template-columns: 1fr;
  }

`;

export const Group = styled.div`
  margin: 15px;
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
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 900;
  font-size: 38px;
  margin-top: -10px;
`;

export const LeadParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme}) => theme.color.gray}
`;
