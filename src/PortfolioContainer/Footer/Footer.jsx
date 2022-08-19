import React from "react";
import styled from "styled-components";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useScrollToTop } from "use-scroll-to-top";

const StyledArrow = styled(FaArrowAltCircleUp)`
  height: 4em;
  position: absolute;
  width: 4rem;
  bottom: 38rem;
  right: 6em;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  color: var(--peach);
  -webkit-animation: mover 0.5s infinite alternate;
  animation: mover 0.5s infinite alternate;
  :hover{
    color: var(--light-brown);
  }
  @keyframes mover {
    100% {
        transform: translateY(-5px);
    }
    0% {
        transform: translateX(0px);
    }
    @media only screen and (min-width: 1100px) {
      right: 3rem;
  }
    @media only screen and (min-width: 475px) {
      right: 1rem;
  }
`;
export function Footer() {
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });
  return (
    <div className="scroll-container">
      <StyledArrow
        onClick={scrollTop}
        style={{ display: showScroll ? "inline" : "none" }}
      />
    </div>
  );
}
