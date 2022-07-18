import React, { useRef, useEffect, useState } from "react";
import { workList } from "../../asset/data";
import Top from "../common/Top";

const Work = () => {
  const workTitle = useRef(null);
  const frame = useRef(null);

  //scroll
  const pos = useRef([]);
  const [Scrolled, setScrolled] = useState(0);
  let els = [];
  const base = 300;

  const getPos = () => {
    pos.current = [];
    els = frame.current.querySelectorAll(".list");
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
  }, []);
  return (
    <>
      <div className="Work" ref={frame}>
        <h2 className="workTitle ani-orderTitle" ref={workTitle}>
          <span>WORK</span>
        </h2>
        <ul className="workList">
          {workList.map((item, idx) => {
            return (
              <li key={idx} className={idx % 2 === 0 ? "list odd" : "list"}>
                <div className="pic">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="txt">
                  <h3>
                    <span>{item.title}</span>
                  </h3>
                  <p>
                    <span>{item.txt}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Top />
    </>
  );
};

export default Work;
