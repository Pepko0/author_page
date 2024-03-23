import styled from "styled-components";

export const Content = styled.div`
  max-width: ${({ theme }) => theme.size.maxwidth};
  margin: auto;
 // background-color: ${({ theme }) => theme.color.gray};
`;

export const Title = styled.div`
  margin: 40px auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 13px ${({theme}) => theme.color.mainblue};
  transform: translateZ(0);

  &:before,
  &::after {
    position: absolute;
    content: "";
  }

  &:before {
    width: 52px;
    height: 102px;
    background: ${({ theme }) => theme.color.lightgray};
    border-radius: 50% 0 0 50%;
    top: -1px;
    left: -1px;
    transform-origin: 52px 51px;
    animation: animation 1.6s infinite ease 1.2s;
  }


  &::after {
    width: 52px;
    height: 102px;
    background: ${({ theme }) => theme.color.lightgray};
    border-radius: 0 50% 50% 0;
    top: -1px;
    left: 51px;
    transform-origin: 0px 51px;
    animation: animation 1.6s infinite ease;
  }

  @keyframes animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
