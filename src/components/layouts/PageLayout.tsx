import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default PageLayout;
