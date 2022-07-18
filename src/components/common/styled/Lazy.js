// features.js
import { domAnimations } from "framer-motion";
export default domAnimations;

// index.js
import { LazyMotion, m } from "framer-motion";

const loadFeatures = import("./features.js").then((res) => res.default);

function Component() {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div animate={{ scale: 1.5 }} />
    </LazyMotion>
  );
}
