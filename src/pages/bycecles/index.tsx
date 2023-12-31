import BycecleForm from "./components/BycecleForm";
import BycecleRow from "./components/BycecleRow";
import BycecleStats from "./components/BycecleStats";
import { EmptyList, FormWrapper, ListWrapper, Loader, Wrapper } from "./styled";
import { useBycecles } from "./useBycecles";

function Bycecles() {
  const { isLoading, list, stats, updateStatus, addNewBycecle, removeBycecle } =
    useBycecles();

  return (
    <>
      {isLoading && <Loader>Loading...</Loader>}
      {list && (
        <Wrapper>
          <ListWrapper>
            {list.map((bycecle) => (
              <BycecleRow
                bycecle={bycecle}
                key={bycecle.slug}
                updateStatus={updateStatus}
                removeBycecle={removeBycecle}
              />
            ))}
            {list.length === 0 && <EmptyList>No Bycecles</EmptyList>}
          </ListWrapper>
          <FormWrapper>
            <BycecleForm addNewBycecle={addNewBycecle} />
            <BycecleStats stats={stats} />
          </FormWrapper>
        </Wrapper>
      )}
    </>
  );
}

export default Bycecles;
