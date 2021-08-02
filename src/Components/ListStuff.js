import React from "react";
import styled from "styled-components";

function ListStuff({ title, Icons }) {
  return (
    <Wrapper>
      {Icons === <Icons />}

      <span>{title}</span>
      <p>{Icons}</p>
    </Wrapper>
  );
}

export default ListStuff;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 1rem;
    margin-right: 0.635rem;

    @media screen and (max-width: 762px) {
      font-size: 12px;
    }
  }
  align-self: center;
  :hover {
    p {
      fill: white;
    }
  }
`;
