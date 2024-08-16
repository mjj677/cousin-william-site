import styled from "styled-components"

// export const LandingContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// text-align: center;
// background-image: url(/images/background.JPG);
// background-size: 100%;
// background-position: center;
// background-repeat: no-repeat;
// color: white;
// height: 30rem;
// `

export const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  height: 30rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/background.JPG);
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8; /* Adjust the opacity here */
    z-index: -1; /* Send the pseudo-element behind the content */
  }
`;

export const LandingLogo = styled.div`
color: white;
align-self: center;
font-size: 60px;
text-align: center;
`

export const LandingSubtext = styled.div`
color: white;
align-self: center;
font-size: 20px;
padding-top: 10px;
`

export const BookButton = styled.button`
  position: absolute;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  font-size: 20px;
  bottom: 100px;
  padding: 5px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05); 
    cursor: pointer;
  }
`;
