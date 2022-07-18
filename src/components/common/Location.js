import { useEffect, useRef, useState } from "react";

function Location() {
  //map default setting
  const { kakao } = window;
  const info = [
    {
      title: "Main",
      latlng: new kakao.maps.LatLng(37.51270773913474, 127.06069417509839),
      imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
      imgSize: new kakao.maps.Size(126, 114),
      imgPos: {
        offset: new kakao.maps.Point(63, 114),
      },
    },
    {
      title: "Branch",
      latlng: new kakao.maps.LatLng(37.5188715541183, 127.12528957675329),
      imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
      imgSize: new kakao.maps.Size(126, 114),
      imgPos: {
        offset: new kakao.maps.Point(63, 114),
      },
    },
  ];
  const [Location, setLocation] = useState(null);
  const [Info, setInfo] = useState(info);
  const [Index, setIndex] = useState(0);
  const container = useRef(null);
  const btns = useRef(null);
  const option = {
    center: Info[Index].latlng,
    level: 3,
  };
  const imageSrc = Info[Index].imgSrc;
  const imageSize = Info[Index].imgSize;
  const imageOption = Info[Index].imgPos;

  //marker image
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  //get location
  const markerPosition = Info[Index].latlng;

  //marker location
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  //map useEffect
  useEffect(() => {
    container.current.innerHTML = "";

    //map instance
    const map_instance = new kakao.maps.Map(container.current, option);
    function setZoomable(zoomable) {
      map_instance.setZoomable(zoomable);
    }

    //zoom mousewheel - false
    setZoomable(false);
    const handleResize = () => {
      map_instance.setCenter(Info[Index].latlng);
    };

    //marker set
    marker.setMap(map_instance);

    //map state
    setLocation(map_instance);

    //map control
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map_instance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

    //zoom
    const zoomControl = new kakao.maps.ZoomControl();
    map_instance.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

    //resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [Index]);
  return (
    <div className="Map">
      <div id="map" ref={container}></div>
      <div className="btnSet">
        <ul className="branch" ref={btns}>
          {Info.map((info, idx) => {
            let on = "";
            Index === idx ? (on = "on") : (on = "");
            return (
              <li key={idx} onClick={() => setIndex(idx)} className={on}>
                {info.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Location;
