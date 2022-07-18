import Layout from "./Layout";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-component";
import Popup from "../common/styled/popup/Popup";
import Loader from "../common/styled/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const flickr = useSelector((store) => store.flickrReducer.photo);
  const dispatch = useDispatch();
  const frame = useRef(null);
  const input = useRef(null);
  const pop = useRef(null);
  const [Index, setIndex] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [EnableClick, setEnableClick] = useState(true);
  const [Opt, setOpt] = useState(null);
  const masonryOptions = { transitionDuration: "0.5s" };
  const subTxt =
    "We make digital experiences that use technology to create emotions technology.";
  const depthTwo = [
    { name: "Gallery", path: "/pr/gallery" },
    { name: "Youtube", path: "/pr" },
  ];

  const endLoading = () => {
    setTimeout(() => {
      frame.current.classList.add("on");
      setLoading(false);
      setTimeout(() => setEnableClick(true), 1000);
    }, 1000);
  };
  const showSearch = () => {
    if (!EnableClick) return;
    const tag = input.current.value.trim();
    input.current.value = "";
    if (!tag) return alert("Please enter your search term.");

    setLoading(true);
    frame.current.classList.remove("on");
    setOpt({ type: "search", count: 50, tags: tag, user: "192490779%40N06" });
  };

  useEffect(() => {
    dispatch({ type: "FLICKR_START", Opt });
  }, [Opt]);

  useEffect(() => {
    console.log(flickr, "flickr");
    endLoading();
  }, [flickr]);

  return (
    <>
      <Layout
        name={"Gallery"}
        title={"Gallery"}
        depthTwo={depthTwo}
        subTxt={subTxt}
      >
        {Loading && <Loader />}
        <div className="searchBox">
          <div>
            <input
              className="search"
              type="text"
              ref={input}
              placeholder='Please enter search for " package ".'
              onKeyUp={(e) => {
                if (e.key === "Enter") showSearch();
              }}
            />
            <button className="btnSearch" onClick={showSearch}>
              <span className="h">SEARCH</span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="frame" ref={frame}>
          <Masonry elementType={"div"} options={masonryOptions}>
            {flickr.map((item, idx) => {
              return (
                <article key={idx}>
                  <div className="inner">
                    <div
                      className="pic"
                      onClick={() => {
                        pop.current.open();
                        setIndex(idx);
                      }}
                    >
                      <img
                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
                        alt={item.title}
                      />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              );
            })}
          </Masonry>
        </div>
      </Layout>
      {/* popup */}
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

export default Gallery;
