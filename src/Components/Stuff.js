import React from "react";
import styled from "styled-components";
import Containers from "./Containers";

function Stuff() {
  const stuff = window.outerWidth;
  if (stuff >= 762) {
    console.log("working..");
  } else {
    console.log("not working");
  }
  return (
    <Wrapper>
      <Heading>
        <H>Recently Viewed</H>
        <Wraps>
          <List>
            <Containers
              title="Fairmont Austin"
              number="3,174"
              image="./image/Austin.jpg"
            />
          </List>
          <List>
            <Containers
              title="Faena Hotel Miami Beach"
              number="1,712"
              image="./image/miami.jpg"
            />
          </List>
          <List>
            <Containers
              title="Palafitos Overwater Bungalows"
              number="92"
              image="./image/water.jpg"
            />
          </List>
          <List>
            <Containers
              title="Fairmont Kea Lani, Maui"
              image="./image/Lani.jpg"
              number="5,802"
            />
          </List>
        </Wraps>
      </Heading>
      <Heading>
        <h2>You might like these</h2>
        <p>More places to stay in Austin</p>
        <Wraps>
          <List>
            <Containers
              title="Archer Hotel Austin"
              image="./image/Hotelone.jpg"
              number="948"
            />
          </List>
          <List>
            <Containers
              title="The Westin Austin Downtown"
              image="./image/Hoteltwo.jpg"
              number="1,096"
            />
          </List>
          <List>
            <Containers
              title="Kimpton Hotel Van Zandt"
              image="./image/Hotelthree.jpg"
              number="1,155"
            />
          </List>
          <List>
            <Containers
              title="Hyatt Regency Austin"
              image="./image/Hotelfour.jpg"
              number="3,506"
            />
          </List>
        </Wraps>
      </Heading>
      <Heading>
        <h2>Cool Plus stays</h2>
        <p>Where Tripadvisor Plus members are staying and saving</p>

        <Wraps>
          <List>
            <Containers
              image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1f/50/8b/caption.jpg?w=300&h=300&s=1"
              title="Palafitos Overwater Bungalows"
              number={92}
              price="1,225"
            />
          </List>
          <List>
            <Containers
              image="./image/work.jpg"
              title="Faena Hotel Miami Beach"
              number="1,712"
              price="500"
            />
          </List>
          <List>
            <Containers
              title="Fairmont Austin"
              number="3,174"
              price="255"
              image="./image/fair.jpg"
            />
          </List>
          <List>
            <Containers
              title="Fairmont Kea Lani, Maui"
              image="./image/one.jpg"
              number="5,804"
              price="598"
            />
          </List>
        </Wraps>
      </Heading>
      <Border>
        <Mark>Check Me</Mark>
      </Border>
    </Wrapper>
  );
}

export default Stuff;

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Heading = styled.div`
  max-width: 70.75rem;
  height: auto;
  margin: 0 auto;
  margin-bottom: 10px;

  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    font-family: "Trip Sans VF", "Trip Sans", Arial, sans-serif;
    color: #333;
    margin-bottom: 20px;
  }
`;

const Wraps = styled.div`
  height: 22.8125rem;
  width: 74rem;

  display: flex;
`;

const List = styled.div`
  margin-right: 20px;
`;

const H = styled.h2`
  margin-bottom: 20px;
`;

const Border = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.0625rem;
  position: relative;
  margin-bottom: 400px;
`;

const Mark = styled.div`
  position: absolute;
  width: 200px;
  height: 20px;
  padding: 30px;
  background-color: black;
  font-weight: 700;
  font-size: 26px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 200ms ease-in;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;
