import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Top from "../common/Top";
import Title from "../common/styled/Title/Title";

function Layout({ name, title, children, depthTwo, subTxt }) {
  const frame = useRef(null);
  const subTitle = useRef(null);

  useEffect(() => {
    subTitle.current.show();
    frame.current.classList.add("on");
  }, []);

  //scroll
  const pos = useRef([]);
  const [Scrolled, setScrolled] = useState(0);
  let els = [];
  const base = -800;

  const getPos = () => {
    pos.current = [];
    els = frame.current.querySelectorAll(".ani-content");
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
  }, [depthTwo]);

  return (
    <>
      <section className={`content ${name}`} ref={frame}>
        <div className="inner">
          <div className="titleWrap">
            <h2>
              <Title ref={subTitle} aniTitle={title} />
            </h2>
            {subTxt && <p className="ani-content4">{subTxt}</p>}
            {depthTwo && (
              <ul className="depth2">
                {depthTwo.map((item, index) => {
                  return (
                    <li key={index} className="ani-content3">
                      {(item.path === "blog" && (
                        <a
                          href="https://unbounce.com/blog/?ref=seoptimer.com"
                          target="_blank"
                        >
                          {item.name}
                        </a>
                      )) ||
                        (item.path === "sns" && (
                          <a
                            href="https://www.instagram.com/thedesignagency/"
                            target="_blank"
                          >
                            {item.name}
                          </a>
                        )) || <Link to={item.path}>{item.name}</Link>}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          {children}
        </div>
      </section>
      <Top />
    </>
  );
}

export default Layout;
