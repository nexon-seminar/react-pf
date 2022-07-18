import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

const Cursor = forwardRef((props, ref) => {
  const [isCursor, setIsCursor] = useState(false);
  const target = useRef(null);

  const mouseMove = (e) => {
    if (target.current === null) return;
    const { clientX = 0, clientY = 0 } = e;
    target.current.style.left = clientX - 15 + "px";
    target.current.style.top = clientY - 15 + "px";
  };

  const show = () => {
    setIsCursor(true);

    target.current.style = `transform: translate(-50%, -50%) scale(3)`;
  };
  const hide = () => {
    setIsCursor(false);
  };

  const small = () => {
    if (target.current === null) return;
    target.current.style = `transform: translate(-50%, -50%) scale(3)`;
  };
  const big = () => {
    if (target.current === null) return;
    target.current.style = `transform: translate(-50%, -50%) scale(4.2)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [isCursor]);

  useImperativeHandle(ref, () => {
    return {
      show: () => {
        show();
      },
      hide: () => {
        hide();
      },
      drag: (e) => {
        mouseMove(e);
      },
      small: () => {
        small();
      },
      big: () => {
        big();
      },
    };
  });

  return (
    isCursor && (
      <div ref={ref}>
        <div className="cursor" ref={target}></div>
      </div>
    )
  );
});

export default Cursor;
