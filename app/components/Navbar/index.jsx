"use client";

import * as Styles from "./styles";

export const Navbar = () => {
  return (
    <>
      <Styles.NavbarContainer>
        <Styles.Logo>
        <Styles.LogoLink>
        <a href="#home">Cousin William</a>
        </Styles.LogoLink>
          </Styles.Logo>
        <Styles.NavLinks>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#enquiries">ENQUIRIES</a>
          <a href="#calendar">CALENDAR</a>
        </Styles.NavLinks>
      </Styles.NavbarContainer>
    </>
  );
};
