import React, { useEffect, useMemo, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Framer.css';

const Banner = () => {
  const controls = useAnimation();
  const [isUnmounted, setIsUnmounted] = useState(false);

  const items = useMemo(() => [
    <img src="https://framerusercontent.com/images/feEXTT3U2Xmrpe8I4xvvZAozgw.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/x1FccegMIZNzat1jfHQpGIyJT4.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/pmj6QxKgdWYONouqE1cucBThbxU.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/3Kx6V4jWJuP9c0sCeWzZKZyso.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/BSR1bldQAbipZJQxeygt717Sg4w.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/x1FccegMIZNzat1jfHQpGIyJT4.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/pmj6QxKgdWYONouqE1cucBThbxU.svg" alt="upstock" />,
    <img src="https://framerusercontent.com/images/v9beJAzsFDQJvkVfPgKc96npKY.svg" alt="upstock" />,
  ], []);

  useEffect(() => {
    const scrollAnimation = async () => {
      const itemWidth = 300;
      const totalWidth = items.length * itemWidth;

      // Initial delay before starting the animation loop
      await new Promise((resolve) => setTimeout(resolve, 1000));

      while (!isUnmounted) { // Run the animation loop as long as the component is not unmounted
        try {
          await controls.start({ x: -totalWidth }); // Start from the right side
          controls.set({ x: window.innerWidth }); // Reset to the right side

          // Repeat the animation indefinitely with a slow duration
          await controls.start({ x: -totalWidth }, { duration: 40, ease: 'linear' });
        } catch (error) {
          // Catch any errors that may occur when the component is unmounted
          break;
        }
      }
    };

    scrollAnimation();

    // Cleanup function to stop animation when unmounting
    return () => {
      setIsUnmounted(true);
    };
  }, [controls, items, isUnmounted]);

  return (
    <div className="banner-container" style={{ overflow: 'hidden' }}>
      <motion.div
        className="banner"
        animate={controls}
        style={{ display: 'flex', width: `${items.length * 300}px` }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="banner-item"
            style={{ width: '300px', display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
