import styled from "styled-components"

export const Logo = styled.div`
  font-size: 1.5rem;
  color: black;
`;

export const NavbarContainer = styled.nav`
  background-color: white;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

export const LogoLink = styled.div`
a{
  color: black;
  text-decoration: none;
  margin-right: 1rem;
}
`;

export const NavLinks = styled.div`
  a {
    color: #333;
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
