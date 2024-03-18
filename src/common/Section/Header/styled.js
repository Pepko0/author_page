import styled from "styled-components";

export const AutorInformations = styled.div`
  border: solid;
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1000px;
  margin: 120px auto;
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
