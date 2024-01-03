import React from "react";
import styled from "styled-components";

const User = ({ user: { photoURL, displayName } }) => {
  return (
    <StyledWrap>
      <img src={photoURL} alt={displayName} />
      <span>{displayName}</span>
    </StyledWrap>
  );
};

export default User;

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  span {
    padding-left: 5px;
    font-size: 12px;
  }
`;
