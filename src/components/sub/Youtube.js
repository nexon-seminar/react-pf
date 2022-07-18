import Layout from "./Layout";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Popup from "../common/styled/popup/Popup";

function Youtube() {
  const depthTwo = [
    { name: "Gallery", path: "/pr/gallery" },
    { name: "Youtube", path: "/pr" },
  ];

  const subTxt =
    "This is Neige's video. Please click the video image in the list.";

  const pop = useRef(null);
  const Vids = useSelector((store) => store.youtubeReducer.youtube);
  const [Index, setIndex] = useState(0);

  const handlePopup = (index) => {
    pop.current.open();
    setIndex(index);
  };

  return (
    <>
      <Layout
        name={"Youtube"}
        title={"Neige Youtube"}
        depthTwo={depthTwo}
        subTxt={subTxt}
      >
        {Vids.map((vid, idx) => {
          const tit = vid.snippet.title;
          const desc = vid.snippet.description;
          const date = vid.snippet.publishedAt;

          return (
            <article key={idx}>
              <div className="num">
                <span>{idx < 10 ? `0${idx + 1}` : idx + 1}</span>
              </div>
              <div className="txt">
                <h3>{tit}</h3>
                <p>{desc}</p>
                <span>{date.split("T")[0]}</span>
              </div>
              <div className="pic" onClick={() => handlePopup(idx)}>
                <img
                  src={vid.snippet.thumbnails.standard.url}
                  alt={vid.title}
                />
              </div>
            </article>
          );
        })}
      </Layout>
      <Popup ref={pop}>
        <>
          {Vids.length !== 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
              frameBorder="0"
            ></iframe>
          )}
        </>
      </Popup>
    </>
  );
}

export default Youtube;
