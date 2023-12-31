import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 12px;
`;

export const FormRow = styled.div`
  display: flex;
  height: 43px;
  align-items: flex-start;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 8px;
    input {
      width: 94%;
      border: none;
      border-radius: 8px;
      background-color: #e8e8e8;
      padding: 8px;
    }
    span {
      color: red;
      font-size: 10px;
      font-family: Arial;
    }
  }
`;
export const TextareaWrapper = styled.div`
  width: 100%;
  height: 75px;
  textarea {
    width: 98%;
    height: 100%;
    border: none;
    background-color: #e8e8e8;
    border-radius: 8px;
    padding: 12px 0 0 12px;
  }
`;
export const ButtonsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 45px;
  button {
    cursor: pointer;
    padding: 0 82px;
    background-color: #696969;
    border-radius: 8px;
    font-family: Saira;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    border: none;
    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
export const Footer = styled.div`
  width: 98%;
  border-top: 1px solid #cccccc;
  margin-left: 10px;
`;
