import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Popup from "../common/styled/popup/Popup";
import { pics } from "../../asset/data";
function Pics() {
  const flickr = useSelector((store) => store.flickrReducer.photo);
  const [Index, setIndex] = useState(0);
  const pop = useRef(null);
  const pos = useRef([]);
  const [Scrolled, setScrolled] = useState(0);
  let els = null;
  const base = -600;
  const itemsRef = useRef([]);
  const getPos = () => {
    pos.current = [];
    els = itemsRef.current;
    for (const el of els) pos.current.push(el.offsetTop);
  };
  const scroll = window.scrollY;

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
  }, [scroll]);

  return (
    <>
      <section id="gallery">
        <h2 className="title ani-content">{pics.title}</h2>
        <p className="txt ani-content">{pics.txt}</p>
        <div className="picWrap">
          {flickr.map((item, idx) => {
            if (idx < 8) {
              return (
                <article
                  ref={(el) => (itemsRef.current[idx] = el)}
                  className={
                    idx % 2 === 0
                      ? `picList pic${idx + 1}`
                      : `picList pic${idx + 1} even`
                  }
                  key={idx}
                >
                  <div className="pic">
                    <div
                      className="imgWrap"
                      onClick={() => {
                        setIndex(idx);
                        pop.current.open();
                      }}
                    >
                      <img
                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="txtTitle">{item.title}</h3>
                  </div>
                </article>
              );
            }
          })}
        </div>
      </section>
      <Popup ref={pop}>
        {flickr.length !== 0 && (
          <img
            src={`https://live.staticflickr.com/${flickr[Index].server}/${flickr[Index].id}_${flickr[Index].secret}_b.jpg`}
            alt={flickr[Index].title}
          />
        )}
      </Popup>
    </>
  );
}

export default Pics;
