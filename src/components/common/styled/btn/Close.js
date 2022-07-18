import { useState, useEffect } from "react";
import styled from "styled-components";

const Closed = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 70px;
  right: 80px;
  transform: rotate(45deg);
  transform: rotate(45deg);
  font-size: 0;
  z-index: 102;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    display: block;
    background-color: #0c0c0c;
    -webkit-transform-origin: top center;
    -ms-transform-origin: top center;
    transform-origin: top center;
  }
  &::before {
    position: absolute;
    top: 48%;
    left: 0;
    width: 100%;
    max-width: 0;
    height: 2px;
    transition: max-width 0.225s 0.225s;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 48%;
    width: 2px;
    height: 100%;
    max-height: 0;
    transition: max-height 0.225s 0.225s;
  }
  &.on {
    &::before {
      max-width: 100%;
      transition-delay: 1s;
    }
    &::after {
      max-height: 100%;
      transition-delay: 1.225s;
    }
  }
  @media screen and (max-width: 1270px) {
    top: 50px;
    right: 30px;
  }
  @media screen and (max-width: 900px) {
    top: 45px;
    right: 20px;
  }
`;
const Close = ({ onClick }) => {
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Closed
      className={Open && "on"}
      onClick={() => {
        setOpen(false);
        setTimeout(() => {
          onClick();
        }, 100);
      }}
    >
      close
    </Closed>
  );
};

export default Close;
