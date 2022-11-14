import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  color: string;
};

const ArrowBack = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        fill={props.color}
      >
        <path d="M43.45 36.55 25.3 24l18.15-12.55Zm-20.75 0L4.55 24 22.7 11.45ZM19.3 24Zm20.75 0ZM19.3 30.05v-12.1L10.55 24Zm20.75 0v-12.1L31.3 24Z" />
      </svg>
    </motion.div>
  );
};

export default ArrowBack;
