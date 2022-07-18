import React from "react";
import Header from "../common/Header";
import Top from "../common/Top";
import MainNews from "./MainNews";
import Pics from "./Pics";
import Vids from "./Vids";
import Visual from "./Visual";
import { useRef, useEffect, useState } from "react";
const Main = () => {
  const main = useRef(null);
  const pos = useRef([]);
  const [Scrolled, setScrolled] = useState(0);
  const [Index, setIndex] = useState(0);
  let els = [];
  const base = -600;

  const getPos = () => {
    pos.current = [];
    els = main.current.querySelectorAll(".ani-content");
    for (const el of els) pos.current.push(el.offsetTop);
  };

  const activation = () => {
    const scroll = window.scrollY;
    setScrolled(scroll);

    pos.current.map((pos, idx) => {
      if (scroll >= pos + base) {
        els[idx].classList.add("active");
      }
    });
  };

  useEffect(() => {
    getPos();

    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", activation);
    return () => {
      window.removeEventListener("resize", getPos);
      window.removeEventListener("scroll", activation);
    };
  }, [Index]);

  return (
    <>
      <main ref={main}>
        <Header />
        <Visual />
        <Vids />
        <Pics />
        <MainNews />
        <Top />
      </main>
    </>
  );
};

export default Main;
