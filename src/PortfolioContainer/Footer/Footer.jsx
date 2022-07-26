import React from "react";
import styled from 'styled-components';
import { FaCaretSquareUp } from 'react-icons/fa';
import { useScrollToTop } from 'use-scroll-to-top';

const StyledArrow = styled(FaCaretSquareUp)`
  height: 3em;
  position: absolute;
  width: 3rem;
  bottom: 50%;
  right: 3em;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.95;
  color: var(--sky-blue);
  -webkit-animation: mover 0.5s infinite alternate;
  animation: mover 0.5s infinite alternate;
  :hover{
    opacity:1;
  
  }
  @keyframes mover {
    100% {
        transform: translateY(-5px);
    }
    0% {
        transform: translateX(0px);
    }
`;
export function Footer() {
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });
  return (
    
    <div className="scroll-container">
      <StyledArrow onClick={scrollTop}style={{ display: showScroll ? 'inline' : 'none' }} />
    </div>
  );
}
  
