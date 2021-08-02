import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function Back() {
  return (
    <Wrapper>
      <Container>
        <Wrap>
          <SearchContainer>
            <SearchIcon />
            <input type="text" placeholder="Where to ?" />
          </SearchContainer>
        </Wrap>
      </Container>
    </Wrapper>
  );
}

export default Back;

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Container = styled.div`
  max-width: 70.75rem;
  height: 21.75rem;
  margin: 0 auto;
  background-image: url("./image/stuff.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 762px) {
    background-position: left center;
  }
`;

const SearchContainer = styled.div`
  width: 48rem;
  height: 4.25rem;
  border-radius: 6.25rem;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.625rem;
  input {
    padding: 0.9375rem;
    outline: none;
    border: none;
    width: 94%;

    font-weight: 600;
    font-size: 1rem;
  }

  @media screen and (max-width: 762px) {
    width: auto;
    padding: 0 10px;
    flex: 1;
    margin: 0 20px;
  }

  svg {
    width: 1em;
  }
`;

const Wrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
