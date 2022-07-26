import React from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.99
  },
  visible: {
    opacity: 1,
    y:0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const QuoteCard = ({ index, nextRandom, colorRandom }) => {
  return (
    
      <motion.article
        className="quote"
        key={index.author}
        variants={variants}
        initial="hidden"
        animate="visible"
        layout
      >
        <p className="quote-text">"{index.quote}"</p>
        <p className="quote-author">{index.author}</p>
        <Button nextRandom={nextRandom} colorRandom={colorRandom} />
      </motion.article>
  );
};

export default QuoteCard;
