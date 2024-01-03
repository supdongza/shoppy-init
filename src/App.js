import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <>
      <StyledWrap>
        <Header />
        <Outlet />
      </StyledWrap>
    </>
  );
}

export default App;

const StyledWrap = styled.main`
  width: 1200px;
  margin: 0 auto;
`;
