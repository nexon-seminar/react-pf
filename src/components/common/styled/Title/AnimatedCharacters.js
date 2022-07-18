import React from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
  return (
    <span className="word-wrapper" style={{ display: "inline-block" }}>
      {props.children}
    </span>
  );
};

const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.33, 1, 0.68, 1], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.33, 1, 0.68, 1], duration: 0.85 },
    },
  };

  const splitWords = props.text.split(" ");

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </>
  );
};

export default AnimatedCharacters;
