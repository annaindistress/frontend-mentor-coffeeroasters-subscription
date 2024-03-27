import PropTypes from "prop-types";
import { motion } from "framer-motion";

function PageAnimationWrapper({ children }) {
  return (
    <motion.div
      initial={{
        x: "20%",
        opacity: 0,
      }}
      animate={{
        x: "0",
        opacity: 1,
      }}
      transition={{
        delay: 0,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

PageAnimationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageAnimationWrapper;
