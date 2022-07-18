import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../styled/Title/AnimatedCharacters";

const Title = forwardRef(({ aniTitle }, ref) => {
  const [Hidden, setHidden] = useState(false);
  const placeholderText = [{ text: aniTitle }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  //animation handle
  const handleHidden = () => {
    setHidden(false);
  };
  const handleShow = () => {
    setHidden(true);
  };

  useImperativeHandle(ref, () => {
    return {
      hidden: () => {
        handleHidden();
      },
      show: () => {
        handleShow();
      },
    };
  });

  return (
    <motion.span
      className="titleContainer"
      initial="hidden"
      animate={Hidden ? "visible" : "hidden"}
      variants={container}
      style={{ display: "block" }}
    >
      {placeholderText.map((item, index) => {
        return <AnimatedText {...item} key={index} />;
      })}
    </motion.span>
  );
});

export default Title;
