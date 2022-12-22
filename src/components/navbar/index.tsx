import useWindowSize from 'hooks/useWindowSize';
import React from 'react';
import styles from './style.module.css';
function Navbar() {
  const { width } = useWindowSize();

  return (
    <div className={`${styles.navbar} bg-sky-500/100`}>
      <div className="flex justify-between items-center"></div>
    </div>
  );
}

export default Navbar;
