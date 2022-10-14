import React from "react";
import styled from "styled-components";
import mealsImage from "../../assets/meals.jpg";

// IMPORT COMPONENTS
import CartMenuButton from "./CartMenuButton";

function Header(props) {
  return (
    <React.Fragment>
      <header>
        <HeaderContainer>
          <NavContainer>
            <LogoContainer>
              <h1>React Meals</h1>
            </LogoContainer>
            <MenuItemsContainer>
              <nav>
                <CartMenuButton onClick={props.onOpenCart} />
              </nav>
            </MenuItemsContainer>
          </NavContainer>
        </HeaderContainer>
        <ImageContainer>
          <img src={mealsImage} alt="Foodies!" />
        </ImageContainer>
      </header>
    </React.Fragment>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background: #8a1b1b;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const ImageContainer = styled.div`
  width: 110%;
  z-index: 0;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const LogoContainer = styled.div`
  color: white;
  width: 40%;
  text-align: center;
`;

const MenuItemsContainer = styled.div`
  width: 50%;
  nav {
    display: flex;
    justify-content: flex-end;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      color: white;
      list-style: none;

      li {
        text-align: center;
        padding: 0 2rem;
      }
    }
    button {
    }
  }
`;
