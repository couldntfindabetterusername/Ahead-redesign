import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import UI_Image from './UI_Image/UI_Image';

const SwirlingPlanets = () => {
  const arr = ['top', 'right', 'bottom', 'left'];

  return (
    <>
      {/* Planet images following circular path */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
            key={ index }
            initial={{ rotate: 0 + (index * 30) }}
            animate={{ rotate: 360 + (index * 30) }}
            transition={{
              repeat: Infinity,
                duration: 5,
                ease: 'linear',
            }}
            className={`z-10 absolute ${arr[index]}-0 ${index%2 == 0 ? 1 : -1}rotate-45`}
        >
            <UI_Image src='/assets/boo.png' width={75} height={75} alt='planet' />
        </motion.div>
      ))}
    </>
  );
};

export default SwirlingPlanets;
