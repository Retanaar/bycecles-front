import { ChangeEvent } from "react";
import { IBycecle, Status } from "../../interfaces/Bycecles";
import { IdRow, InfoBlock, TextRow, Wrapper, Close, Price } from "./styled";

type Props = {
  bycecle: IBycecle;
  updateStatus: (slug: string, status: Status) => void;
  removeBycecle: (slug: string) => void;
};

function BycecleRow({ bycecle, updateStatus, removeBycecle }: Props) {
  function onChange(evt: ChangeEvent<HTMLSelectElement>) {
    updateStatus(bycecle.slug, evt.target.value as Status);
  }
  function clickDelete() {
    removeBycecle(bycecle.slug);
  }
  return (
    <Wrapper $status={bycecle.status as Status}>
      <InfoBlock>
        <TextRow>
          <span>{bycecle.name}</span> - {bycecle.type} ({bycecle.color})
        </TextRow>
        <IdRow>{bycecle.slug}</IdRow>
        <TextRow>
          <div>STATUS:</div>
          <select
            name="status"
            defaultValue={bycecle.status}
            onChange={onChange}
          >
            <option value={Status.AVAILABLE}>Available</option>
            <option value={Status.BUSY}>Busy</option>
            <option value={Status.UNAVAILABLE}>Unvailable</option>
          </select>
        </TextRow>
      </InfoBlock>
      <Close onClick={() => clickDelete()}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 9L1 1M9 1L1 9"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Close>
      <Price>{bycecle.price} UAH/hr.</Price>
    </Wrapper>
  );
}

export default BycecleRow;
