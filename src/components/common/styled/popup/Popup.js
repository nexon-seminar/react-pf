import { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = forwardRef(({ children }, ref) => {
  const [Open, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
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

  return (
    <>
      <AnimatePresence>
        {Open && (
          <motion.aside
            initial={{ y: "-100%" }}
            animate={{
              y: "0",
              transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
            }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.5,
                delay: 0.8,
                ease: [0.25, 1, 0.5, 1],
              },
            }}
            className="pop"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.5 } }}
              className="con"
            >
              {children}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                }}
                exit={{ opacity: 0 }}
                className="close"
                onClick={close}
              >
                close
              </motion.span>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
});

export default Popup;
