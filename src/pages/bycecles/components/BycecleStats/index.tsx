import { IByceclesStats } from "../../interfaces/ByceclesStats";
import { Header, TextRow, Wrapper } from "./styled";

type Props = {
  stats?: IByceclesStats;
};

function BycecleStats({ stats }: Props) {
  return (
    <Wrapper>
      <Header>statistics</Header>
      <TextRow>
        Total Bikes: <span>{stats?.total || 0}</span>
      </TextRow>
      <TextRow>
        Available Bikes: <span>{stats?.available || 0}</span>
      </TextRow>
      <TextRow>
        Booked Bikes: <span>{stats?.busy || 0}</span>
      </TextRow>
      <TextRow>
        Avarage bike cost: <span>{(stats?.averagePrice || 0).toFixed(2)}</span>{" "}
        UAH/hr
      </TextRow>
    </Wrapper>
  );
}

export default BycecleStats;
