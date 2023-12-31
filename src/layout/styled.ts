import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  width: 100%;
  height: 42px;
  background-color: #696969;
  font-family: Saira Stencil One;
  color: #ffffff;
  font-size: 24px;
  line-height: 37px;
  font-weight: 400;
  div {
    margin-left: 12px;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 42px;
  background-color: #696969;
  font-family: Saira;
  text-align: right;
  color: #ffffff;
  font-size: 20px;
  line-height: 37px;
  div {
    margin-right: 12px;
    span {
      color: #cbcaca;
    }
  }
`;
