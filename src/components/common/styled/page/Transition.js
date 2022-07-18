/** @format */

import React from "react";
import { TransAnimation } from "./Animation";
import { motion } from "framer-motion";
import styled from "styled-components";

const Transition = () => {
  const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      to bottom,
      rgba(255, 0, 179, 0.3) 10%,
      rgba(255, 0, 179, 0.8) 5%,
      rgb(250, 53, 168) 70%,
      rgba(255, 0, 179, 0.8) 1%,
      rgba(255, 0, 179, 0.3) 2%
    );
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
  `;
  return (
    <motion.div
      className="transition"
      variants={TransAnimation}
      initial="hidden"
      animate="show"
      exit="hide"
      transition={{ duration: 1.8 }}
    >
      <Div />
    </motion.div>
  );
};

export default Transition;
