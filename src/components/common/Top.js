import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Anime from "../../asset/anime";
const Top = () => {
  const topBace = 700;
  const [Top, setTop] = useState(false);
  const [Enable, setEnable] = useState(true);
  const activation = () => {
    const scroll = window.scrollY;
    if (scroll >= window.innerHeight - topBace) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activation);
    return () => {
      window.removeEventListener("scroll", activation);
    };
  }, []);
  return (
    <button
      className={Top ? "top on" : "top"}
      onClick={() => {
        if (Enable) {
          setEnable(false);
          new Anime(window, {
            prop: "scroll",
            value: 0,
            duration: 500,
            callback: () => {
              setEnable(true);
            },
          });
        }
      }}
    >
      <span className="h">top</span>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default Top;
