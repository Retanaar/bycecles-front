import styled from "styled-components";
import { Status } from "../../interfaces/Bycecles";

function getColor(status: Status) {
  switch (status) {
    case Status.AVAILABLE:
      return "#6fcf97";
    case Status.BUSY:
      return "#F2994A";
    case Status.UNAVAILABLE:
      return "#EB5757";
  }
}

export const Wrapper = styled.div<{ $status: Status }>`
  width: 100%;
  height: 83px;
  background-color: #e8e8e8;
  border: 2px solid ${(props) => getColor(props.$status)};
  border-radius: 12px;
  position: relative;
  margin-bottom: 8px;
  opacity: ${(props) => (props.$status === Status.UNAVAILABLE ? 0.6 : 1)};
`;

export const InfoBlock = styled.div`
  margin: 12px;
`;

export const TextRow = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  color: #333333;
  span {
    font-weight: 700;
  }
  display: flex;
  align-items: baseline;
  select {
    border: none;
    background-color: #e8e8e8;
    margin-left: 16px;
  }
  select:focus {
    outline: none;
    border: none;
  }
`;

export const IdRow = styled.div`
  font-size: 8px;
  line-height: 12px;
  margin-bottom: 4px;
`;
export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;
`;
export const Price = styled.div`
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 24px;
  line-height: 37px;
`;
