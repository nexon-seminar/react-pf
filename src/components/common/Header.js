import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { home, menu } from "../../asset/menu";
import Menu from "./Menu";

function Header({ type }) {
  const menuPop = useRef(null);

  return (
    <>
      <header className={type}>
        <div className="inner">
          <h1>
            <Link to={`${home.link}`}>{home.title}</Link>
          </h1>
          <ul id="gnb">
            {menu.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link to={`${item.link}`}>{item.title}</Link>
                </li>
              );
            })}
          </ul>

          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              menuPop.current.open();
            }}
          />
        </div>
      </header>
      <Menu ref={menuPop} />
    </>
  );
}

export default Header;
