import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [work, setWork] = useState(false);
  const btnContainer = document.getElementById("nav");
  const btn = btnContainer?.getElementsByClassName("btn");

  for (var i = 0; i < btn; i++) {
    btn[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active");
      this.className += "active";
    });
  }

  const john = () => {
    alert("Signing in . sike!!! ");
  };

  return (
    <Wrapper>
      <Indent show={work}>
        <Bar show={work}>
          <Cont>
            <Close onClick={() => setWork(false)} />
          </Cont>

          <Shadow show={work}>
            <SignButtion>
              <span>Sign in</span>
            </SignButtion>
            <Wrap>
              <a href="#">Review</a>
              <a href="#">Alerts</a>
              <a href="#">Trips</a>
              <a href="#">Bookings</a>
            </Wrap>
          </Shadow>
        </Bar>
      </Indent>

      <NavBar>
        <Logo>
          <MenuIcons onClick={() => setWork(true)} />
        </Logo>

        <ImageContainer>
          <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" />
        </ImageContainer>
        <Logo>
          <SearchIcon />
        </Logo>

        <Container>
          <Lists id="nav">
            <Selection className="active">
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                class="_3nS1tofR iG08Yf8B"
              >
                <path d="M3.366 21.984a1.36 1.36 0 01-1.067-.513 1.352 1.352 0 01-.266-1.148l1.445-6.637 10.249-10.22c1.625-1.62 4.352-1.939 6.153-.674a4.8 4.8 0 012.098 3.518 4.756 4.756 0 01-1.384 3.833l-10.326 10.32-6.902 1.521zm2.038-7.245l-1.069 4.906 4.875-1.103 7.909-7.902-3.796-3.797-7.919 7.896zm9.41-9.382l3.794 3.795.499-.499a2.662 2.662 0 00.775-2.144c-.076-.81-.502-1.514-1.196-1.982-1.029-.724-2.549-.49-3.472.431l-.4.399z"></path>
              </svg>
              <a href="#">Review</a>
            </Selection>
            <Selection className="btn">
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                class="_3nS1tofR iG08Yf8B"
              >
                <path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path>
              </svg>
              <a href="#">Trips</a>
            </Selection>
            <Selection className="btn">
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                class="_3nS1tofR iG08Yf8B"
              >
                <path d="M12 2c.539 0 .976.437.976.976v1.032c1.779.21 3.268 1 4.356 2.222 1.271 1.426 1.937 3.372 1.97 5.512.013.755.016 3.706.016 5.381h1.463v1.951H15.77a4.4 4.4 0 01-.336.924 3.545 3.545 0 01-1.2 1.382c-.589.391-1.332.62-2.234.62s-1.645-.229-2.233-.621a3.538 3.538 0 01-1.2-1.382 4.4 4.4 0 01-.336-.924H3.22v-1.951h1.463c0-1.669.002-4.602.015-5.372-.007-2.149.663-4.098 1.944-5.523 1.098-1.222 2.601-2.009 4.383-2.219V2.976A.975.975 0 0112 2zM6.634 17.122h10.732c0-1.675-.003-4.611-.016-5.351-.026-1.763-.573-3.232-1.475-4.245-.891-1-2.187-1.625-3.876-1.625-1.692 0-3.007.627-3.906 1.627-.909 1.012-1.452 2.473-1.444 4.223 0 .001-.015 3.696-.015 5.371zm3.653 1.951l.024.052c.125.249.297.471.538.63.234.156.59.294 1.151.294.562 0 .917-.138 1.151-.294a1.601 1.601 0 00.561-.682h-3.425z"></path>
              </svg>
              <a href="#">Alerts</a>
            </Selection>

            <SignIn>
              <span onClick={john}>Sign in</span>
            </SignIn>
          </Lists>
        </Container>
      </NavBar>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid lightgray;
  z-index: 6;
  overflow: none;
`;

const NavBar = styled.div`
  max-width: 70.75rem;
  height: 3.75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 762px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  padding: 0 10px;

  svg {
    opacity: 0;
    transition: all 200ms ease-in;
  }

  @media (max-width: 762px) {
    svg {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 11.75rem;
    height: 2.5rem;

    object-fit: contain;
  }

  @media (max-width: 762px) {
    img {
      height: 1.9rem;
      width: 11.2rem;
      object-fit: contain;
    }
  }
`;

const Lists = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  flex-grow: 1;
  justify-content: flex-end;

  @media (max-width: 762px) {
    opacity: 0;
    display: none;
  }
`;
const Selection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }

  font-weight: 700;
  font-size: 1rem;
  margin-right: 0.635rem;

  padding: 6px 10px;
  border-radius: 1.25rem;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: lightgray;
  }

  @media (max-width: 762px) {
    opacity: 0;
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  @media (max-width: 762px) {
    opacity: 0;
    display: none;
  }
`;

const SignIn = styled.div`
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 1rem;
    color: #ffffff;
    background-color: #000;
    padding: 0.4375rem 1rem;
    border-radius: 1.25rem;
    transition: all 200ms ease-in-out;

    &:hover {
      opacity: 0.79;
    }
  }

  @media sreen and (max-width: 762px) {
    opacity: 0;
    display: none;
  }
`;

const Indent = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.show ? `rgba(0, 0, 0, 0.4)` : false)};
  position: absolute;
  transition: transform 200ms ease-in-out;
  transform: ${(props) =>
    props.show ? `translateX(-0%)` : `translateX(-100%)`};
  z-index: 10;
  overflow: none;
`;

const Bar = styled.div`
  height: 100%;
  width: 22.8125rem;
  background-color: white;
  overflow-y: scroll;
`;

const SignButtion = styled.div`
  padding: 10px 9px;
  background-color: #000;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  z-index: 10;

  span {
    font-weight: 700;
    font-size: 1rem;
    color: white;
  }

  &:hover {
    opacity: 0.75;
  }
`;

const Shadow = styled.div`
  background-color: #ffffff;
  padding: 2rem 1.5rem 15rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-weight: 700;
    line-height: 2.625rem;
    font-size: 1.25rem;
    padding: 20px;
    cursor: pointer;
    text-decoration: none;
    transition: all 200ms ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.625rem 0.9375rem;
`;

const MenuIcons = styled(MenuIcon)`
  cursor: pointer;
`;
