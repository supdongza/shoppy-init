import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <StyledWrap>
        <Header />
        <Outlet />
      </StyledWrap>
    </AuthContextProvider>
  );
}

export default App;

const StyledWrap = styled.main`
  width: 1200px;
  margin: 0 auto;
`;
