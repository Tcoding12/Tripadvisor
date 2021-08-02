import React from "react";
import styled from "styled-components";

function Containers({ title, image, price, fron, number }) {
  return (
    <Wrapper>
      <Cont>
        <img src={image} />
        <h3>{title}</h3>
      </Cont>

      <Stuff>
        <svg
          className="zWXXYhVR"
          viewBox="0 0 68 12"
          width="68"
          height="12"
          aria-label=""
          title=""
        >
          <path
            d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="scale(0.5)"
          ></path>
          <path
            d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(14 0) scale(0.5)"
          ></path>
          <path
            d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(28 0) scale(0.5)"
          ></path>
          <path
            d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(42 0) scale(0.5)"
          ></path>
          <path
            d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z"
            transform="translate(56 0) scale(0.5)"
          ></path>
        </svg>
        <span>{number}</span>
      </Stuff>
      {price && <Spans>From ${price}/night</Spans>}
    </Wrapper>
  );
}

export default Containers;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Cont = styled.div`
  width: 17rem;
  cursor: pointer;
  h3 {
    padding-top: 5px;
    word-wrap: nowrap;
    font-weight: 700;
    color: #000;
    font-size: 17px;
    cursor: pointer;
    transition: opacity 0.1s ease-in-out, text-decoration 0.1s ease-in;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.1s ease-in-out;
    &:hover {
      opacity: 0.75;
    }
  }

  &:hover h3 {
    opacity: 0.75;
    text-decoration: underline;
  }
`;

const Stuff = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  span {
    margin-left: 8px;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 400;
  }
  svg {
    fill: #00aa6c;
  }
`;

const Spans = styled.span`
  font-weight: 700;
  font-size: 16px;
  padding-top: 10px;
`;
