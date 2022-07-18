import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { home, menu } from "../../asset/menu";
import Close from "./styled/btn/Close";

const Menu = forwardRef((props, ref) => {
  const menuLi = useRef([]);
  const [Open, setOpen] = useState(false);
  const [Show, setShow] = useState(true);

  const open = () => {
    setOpen(true);
    handleWindowSize();
  };

  const close = (e) => {
    setOpen(false);
    handleWindowSize();
  };

  const mouseMove = (e) => {
    for (const el of menuLi.current) {
      el.classList.remove("on");
      el.classList.add("disabled");
    }
    e.target.classList.remove("disabled");
    e.target.classList.add("on");
  };

  const mouseLeave = () => {
    for (const el of menuLi.current) {
      el.classList.remove("on");
      el.classList.remove("disabled");
    }
  };

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        open();
      },
      close: () => {
        close();
      },
    };
  });

  const handleWindowSize = () => {
    const windowWidth = window.innerWidth;
    Open && setOpen(false);
    if (windowWidth <= 900) {
      Show && setShow(false);
    } else {
      !Show && setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [Show]);

  const pc = {
    normal: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.5 } },
    hidden: { y: "100%", transition: { duration: 0.5, delay: 0.5 } },
  };
  const mobile = {
    normal: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
    hidden: { x: "-100%", transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <AnimatePresence>
      {Open && (
        <nav id="mobileGnb">
          {Show && (
            <motion.div
              className="menu left"
              initial={{ y: "-100%" }}
              animate={{
                y: 0,
                transition: { duration: 0.5 },
              }}
              exit={{ y: "-100%", transition: { duration: 0.5, delay: 0.5 } }}
              onClick={() => setOpen(!Open)}
            >
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
              >
                <Link to={`${home.link}`}>{home.title}</Link>
              </motion.h1>
            </motion.div>
          )}
          <motion.div
            className="menu right"
            variants={Show ? pc : mobile}
            initial="normal"
            animate="visible"
            exit="hidden"
            onClick={() => setOpen(!Open)}
          >
            <ul id="gnb">
              {menu.map((item, idx) => {
                return (
                  <motion.li
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.5, delay: idx * 0.15 + 0.5 },
                    }}
                    exit={{
                      y: 50,
                      opacity: 0,
                      transition: { duration: 0.5 },
                    }}
                    key={idx}
                  >
                    <Link
                      to={`${item.link}`}
                      ref={(el) => (menuLi.current[idx] = el)}
                      onMouseEnter={(e) => mouseMove(e)}
                      onMouseLeave={mouseLeave}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
          <Close onClick={close} />
        </nav>
      )}
    </AnimatePresence>
  );
});

export default Menu;
