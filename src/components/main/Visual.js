import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { visualTitle } from "../../asset/mainData";
import Cursor from "../common/styled/cursor/Cursor";
import Title from "../common/styled/Title/Title";

function Visual() {
  const cursor = useRef(null);
  const frame = useRef(null);
  const title = useRef(null);
  const enableClick = useRef(true);
  const [ElNum, setElNum] = useState(0);
  const mouseMove = (e) => {
    cursor.current.drag(e);
  };
  const prev = () => {
    enableClick.current = false;
    title.current.hidden();
    frame.current.classList.remove("on");
    frame.current.classList.add("hide");
    setTimeout(() => {
      frame.current.classList.remove("hide");
      setElNum((ElNum) =>
        ElNum === 0 ? (ElNum = visualTitle.length - 1) : --ElNum
      );
      setTimeout(() => {
        title.current.show();
        frame.current.classList.add("on");
        enableClick.current = false;
      }, 100);
    }, 1000);
  };
  const next = () => {
    enableClick.current = false;
    title.current.hidden();
    frame.current.classList.remove("on");
    frame.current.classList.add("hide");
    setTimeout(() => {
      frame.current.classList.remove("hide");
      setElNum((ElNum) =>
        ElNum === visualTitle.length - 1 ? (ElNum = 0) : ++ElNum
      );
      setTimeout(() => {
        title.current.show();
        frame.current.classList.add("on");
        enableClick.current = false;
      }, 100);
    }, 1000);
  };
  useEffect(() => {
    frame.current.addEventListener("mouseenter", () => {
      cursor.current.show();
    });
    frame.current.addEventListener("mouseleave", () => {
      cursor.current.hide();
    });
    setTimeout(() => {
      title.current.show();
      frame.current.classList.add("on");
    }, 200);
  }, []);

  return (
    <figure id="visual" ref={frame} onDrag={mouseMove}>
      {visualTitle.map((item, idx) => {
        return (
          idx === ElNum && (
            <div className="visual" key={idx}>
              <div className="inner">
                <div className="titleWrap">
                  <h2 className="title">
                    <Title ref={title} aniTitle={item.title} />
                  </h2>
                  <div className="num">
                    <strong>
                      <i>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</i>
                    </strong>
                    <span>
                      <i>
                        {visualTitle.length < 10
                          ? `0${visualTitle.length}`
                          : visualTitle.length}
                      </i>
                    </span>
                  </div>
                </div>
                <div className="pic">
                  <h3 className="subTitle">
                    <span>{item.subTitle}</span>
                  </h3>
                  <img src={`${item.img}`} alt={`${item.title}`} />
                  <figcaption className="txt">
                    <h4 className="subTitle2">
                      <span>{item.subTitle}</span>
                    </h4>
                    <p>
                      <span>{item.txt}</span>
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
          )
        );
      })}
      <Cursor ref={cursor}></Cursor>

      <div
        className="btn"
        onMouseEnter={() => cursor.current && cursor.current.big()}
        onMouseLeave={() => {
          cursor.current && cursor.current.small();
        }}
      >
        <button className="prev" onClick={prev}>
          <span className="h">prev</span>
          <svg viewBox="0 0 476.213 476.213">
            <polygon
              points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
	57.427,253.107 476.213,253.107 "
            />
          </svg>
        </button>
        <button className="next" onClick={next}>
          <span className="h">next</span>
          <svg viewBox="0 0 476.213 476.213">
            <polygon
              points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
	345.606,368.713 476.213,238.106 "
            />
          </svg>
        </button>
      </div>
    </figure>
  );
}

export default Visual;
