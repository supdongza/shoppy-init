import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledHeader>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <StyledNav>
        <Link to="/products">Products</Link>
        <Link to="/cart">cart</Link>
        {user?.isAdmin && (
          <Link to="/products/new">
            <BsFillPencilFill />
          </Link>
        )}
      </StyledNav>
      {user && user.isAdmin && <User user={user} />}
      {!user ? (
        <StyledLoginButton type="button" onClick={handleLogin}>
          로그인
        </StyledLoginButton>
      ) : (
        <StyledLoginButton type="button" onClick={handleLogout}>
          로그아웃
        </StyledLoginButton>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid black;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 0 10px;
  margin-left: auto;
`;

const StyledLoginButton = styled.button`
  margin-left: 10px;
`;
