import React from "react";
import styled from "styled-components";
import { Container } from "../Layout/Container";

const Block = styled.div`
  padding: 15px 0;
  background: url(https://www.nissanusa.com/content/dam/Nissan/us/homepage/secondary-pfa/nissan-ariya-ev.jpg);
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
`;

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 34px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;
const NavContainer = styled(Container)`

`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 3em;
`;

const Links = styled.a`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  padding: 15px 15px 10px;
  font-size: 18px;
  line-height: 25px;
  display: inline-block;

  &::title {
  font-family: 
  }

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    display: block;
    background: #000;
    transition: 0.4s transform;
    transform: scaleX(0);
    transform-origin: left;
    margin-top: 5px;
  }

  &:hover::after,
  &_active::after {
    transform: scaleX(1);
  }
`;

const links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <Block>
      <NavContainer>
        <Nav>
          <Logo href="https://logowik.com/content/uploads/images/nissan-2020-new-logo.jpg">
            NISSAN
          </Logo>
          <List>
            {links.map(({ name, link }, index) => (
              <li key={index}>
                <Links href={link}>{name}</Links>
              </li>
            ))}
          </List>
        </Nav>
        <div className="title">
          <p>A TOTALLY NEW WAY SEE ELECTRIC DRIVING</p>
          <h1>The All-New 2023 Nissan ARAVIA</h1>
          <p>
            Fierce, yet refined. Elegant, yet exhilarating. In the ARIYA,
            there’s always more to the story than meets the eye.
          </p>
          <button>Bulid & Price</button>
        </div>
      </NavContainer>
    </Block>
  );
};

export default Header;

{
  /* A totally new way to see electric driving</div>
      The All-New 2023 Nissan ARIYA
      
      
       Fierce, yet refined. Elegant, yet
      exhilarating. In the ARIYA, there’s always more to the story than meets
      the eye. */
}
