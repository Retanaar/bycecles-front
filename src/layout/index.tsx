import { Footer, Header, Wrapper, Body } from "./styled";

type Props = {
  children: JSX.Element;
};

function MainLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header>
        <div>ADMIN.BIKE-BOOKING.COM</div>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <div>
          <span>Developer:</span> Ruslan Khorovinkin
        </div>
      </Footer>
    </Wrapper>
  );
}

export default MainLayout;
